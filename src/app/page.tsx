'use client'

import Content from "@/components/Content";
import "animate.css";
import {IoIosArrowDown} from "react-icons/io";

const Home = () => {

    const handleDown = () => {
        const targetDiv = document.getElementById("content");
        if (targetDiv) {
            targetDiv.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <>
            <div className="fixed z-10 top-0 bottom-0 right-0 left-0">
                <div className="fixed z-10 bottom-20 right-20 left-20">
                    <div className="relative swirl-in-fwd mx-[50%] pt-[750px]">
                        <div onClick={handleDown} className="flex flex-col justify-center items-center cursor-pointer text-gray-400 hover:text-gray-700 hover:scale-105 duration-500">
                            <IoIosArrowDown className="w-[50px] h-[50px]"/>
                            <div className="absolute -bottom-5 w-[100px] text-[16px]">Scroll or Click</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col h-full justify-center items-center space-y-5">
                    <video
                        src="/image/main_gif.mp4"
                        className="w-[230px] h-[230px] lg:w-[300px] lg:h-[300px]"
                        autoPlay
                        playsInline
                        muted
                        loop
                    />

                    <div className="flex space-x-3 items-center ml-5 animate__animated animate__fadeIn delay-1000">
                        <div className="text-zinc-600 text-3xl lg:text-4xl font-semibold tracking-wide">
                            YU RIM
                        </div>
                        <div className="text-zinc-600 text-3xl lg:text-4xl font-semibold tracking-wide">
                            PORTFOLIO
                        </div>
                    </div>
                </div>
            </div>

            <Content/>
        </>
    )
}

export default Home;