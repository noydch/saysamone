
const ContactContent = () => {
  return (
    <section className="">
        <div className=" h-full w-full bg-[#FDC799] p-20">
            <div className=" containers flex">
                <div className="relative py-5 px-10 flex-[2] after:content-[''] after:bg-black after:w-[0.5px] after:h-full after:right-0 after:absolute after:-translate-y-1/2 after:top-1/2">
                    <h3 className=" text-3xl text-black">Let's design <br /> something meaningful</h3>
                    <div className=" mt-5 flex flex-col gap-2">
                    <input type="text" 
                    placeholder="Email address"
                    className=" border-2 border-black p-4 w-full rounded-md text-black placeholder:text-black outline-none"
                    />
                    <input type="text" 
                    placeholder="Name"
                    className=" border-2 border-black p-4 w-full rounded-md text-black placeholder:text-black outline-none"
                    />
                    <input type="text" 
                    placeholder="Message"
                    className=" border-2 border-black p-4 w-full rounded-md text-black placeholder:text-black outline-none"
                    />
                    </div>
                    <button className=" bg-black rounded-full px-5 py-1.5 mt-4">Send</button>
                </div>
                <div className=" flex-[2] py-5 px-10 text-black">
                    <p className=" text-[14px]">Or reach us at</p>
                    <h3 className=" text-4xl mt-5">hope@uihut.com</h3>
                    <hr className="my-10 border-black"/>
                    <p className=" text-[14px]">Dodonut consistently delivers beautiful <br /> design that hits the mark. They are my go-to <br /> team for web UX/UI!</p>
                    <strong className=" my-5">Saysamone dch</strong>
                    <p className=" text-[14px]">Principal, Creative Director at Trajectory Web Design</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactContent