import fs from 'node:fs/promises'
import express, { Request, Response } from 'express'
import { Transform } from 'node:stream'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 5173
const base = process.env.BASE || '/'
const ABORT_DELAY = 10000

const __dirname = dirname(fileURLToPath(import.meta.url))

const templateHtml = isProduction
  ? await fs.readFile(resolve(__dirname, './dist/client/index.html'), 'utf-8')
  : ''

const app = express()

let vite: any
if (!isProduction) {
  const { createServer } = await import('vite')
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
  })
  app.use(vite.middlewares)
} else {
  const compression = (await import('compression')).default
  const sirv = (await import('sirv')).default
  app.use(compression())
  app.use(base, sirv(resolve(__dirname, './dist/client'), { extensions: [] }))
}

app.use('*all', async (req: Request, res: Response) => {
  try {
    const url = req.originalUrl.replace(base, '')

    let template: string
    let render: (url: string, options: any) => { pipe: Function; abort: Function }
    if (!isProduction) {
      template = await fs.readFile(resolve(__dirname, './index.html'), 'utf-8')
      template = await vite.transformIndexHtml(url, template)
      render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render
    } else {
      template = templateHtml
      render = (await import(resolve(__dirname, './dist/server/entry-server.js'))).render
    }

    let didError = false

    const { pipe, abort } = render(url, {
      onShellError() {
        res.status(500)
        res.set({ 'Content-Type': 'text/html' })
        res.send('<h1>Something went wrong</h1>')
      },
      onShellReady() {
        res.status(didError ? 500 : 200)
        res.set({ 'Content-Type': 'text/html' })

        const transformStream = new Transform({
          transform(chunk: any, encoding: BufferEncoding, callback: Function) {
            res.write(chunk, encoding)
            callback()
          },
        })

        const [htmlStart, htmlEnd] = template.split(`<!--app-html-->`)

        res.write(htmlStart)

        transformStream.on('finish', () => {
          res.end(htmlEnd)
        })

        pipe(transformStream)
      },
      onError(error: any) {
        didError = true
        console.error(error)
      },
    })

    setTimeout(() => {
      abort()
    }, ABORT_DELAY)
  } catch (error: any) {
    vite?.ssrFixStacktrace(error)
    console.error(error.stack)
    res.status(500).end(error.stack)
  }
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
}) 