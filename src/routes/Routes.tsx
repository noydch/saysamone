import { createBrowserRouter, createMemoryRouter, RouterProvider } from "react-router-dom"
import Home from "../pages/home/Home"
import Service from "../pages/service/Service"
import Contact from "../pages/contact/Contact"
import Whyme from "../pages/whyme/Whyme"

const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/service',
        element: <Service />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/whyme',
        element: <Whyme />
    },
]

const router =
  typeof window !== "undefined"
    ? createBrowserRouter(routes)
    : createMemoryRouter(routes)

const Routes = () => {
    return <RouterProvider router={router} />
}
export default Routes