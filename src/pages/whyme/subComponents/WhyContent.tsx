import { RiLoopLeftLine } from "react-icons/ri"

const WhyContent = () => {
  return (
    <section className=" containers my-20">
        <div className=" flex items-center justify-center gap-5 flex-col text-center">
            <h1 className=" text-5xl">The Workspace <br /> for productive teams.</h1>
            <p className=" text-[14px] text-gray-500">hello ivy helps teams to streamline projects <br /> and improve team communication.</p>
            <button className=" bg-[#00C39A] text-[14px] w-[120px] py-2 rounded-full text-black font-semibold">Explore More</button>
        </div>
        <div className=" grid grid-cols-3 gap-10">
            <div className=" p-8 h-[220px]">
                <h1 className=" text-4xl font-bold">Why Us?</h1>
                <p>SaaS product is an internet software <br /> that all users have access to ..</p>
            </div>
            <div className=" bg-blue-500 p-8 h-[220px] text-black flex flex-col gap-3">
                <RiLoopLeftLine className=" text-5xl"/>
                <h1 className=" text-2xl font-bold">Why Us?</h1>
                <p className=" text-[14px]">SaaS product is an internet software <br /> that all users have access to ..</p>
            </div>
            <div className=" bg-yellow-300 p-8 h-[220px] text-black flex flex-col gap-3">
                <RiLoopLeftLine className=" text-5xl"/>
                <h1 className=" text-2xl font-bold">Why Us?</h1>
                <p className=" text-[14px]">SaaS product is an internet software <br /> that all users have access to ..</p>
            </div>
            <div className=" bg-amber-100 p-8 h-[220px] text-black flex flex-col gap-3">
                <RiLoopLeftLine className=" text-5xl"/>
                <h1 className=" text-2xl font-bold">Why Us?</h1>
                <p className=" text-[14px]">SaaS product is an internet software <br /> that all users have access to ..</p>
            </div>
            <div className=" bg-orange-200 p-8 h-[220px] text-black flex flex-col gap-3">
                <RiLoopLeftLine className=" text-5xl"/>
                <h1 className=" text-2xl font-bold">Why Us?</h1>
                <p className=" text-[14px]">SaaS product is an internet software <br /> that all users have access to ..</p>
            </div>
            <div className=" bg-green-900 p-8 h-[220px] text-gray-400 flex flex-col gap-3">
                <RiLoopLeftLine className=" text-5xl"/>
                <h1 className=" text-2xl font-bold">Why Us?</h1>
                <p className=" text-[14px]">SaaS product is an internet software <br /> that all users have access to ..</p>
            </div>
        </div>
    </section>
  )
}

export default WhyContent