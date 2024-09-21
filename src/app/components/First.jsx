import React from "react";
import Image from "next/image";

const First = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <section>
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">Hey There, I'm Shubhranshu</h1>
                    <p className="text-[#CCD3DD] text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ullam cupiditate sint magnam</p>
                    <div>
                        <button className= "px-6 py-4 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">Hire Me!</button>
                        <button className= "px-6 py-4 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">Download CV</button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 mb-6 lg:mt-0">
                    <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/shubhranshu_pic.png"
                            alt="Profile pic"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            height={300}
                            width={300} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default First