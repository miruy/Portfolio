'use client'

import Content from "@/components/Content";
import 'animate.css';
import {BiChevronsDown} from "react-icons/bi";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {FaGithub} from "react-icons/fa";

const Home = () => {

    const handleDown = () => {
        const targetDiv = document.getElementById("content");
        if (targetDiv) {
            targetDiv.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <>
            <div className="fixed z-10 top-0 bottom-0 right-0 left-0 flex">
                <div
                    className="relative flex flex-1 justify-center items-center">
                    <video
                        autoPlay
                        loop
                        muted
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/video_bg.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>

                    <div className="absolute top-[340px] flex flex-col justify-center items-center">
                        <div
                            className="text-[14px] sm:text-[16px] lg:text-[20px] text-muted animate__animated animate__fadeIn">
                            비 온 뒤의 땅이 단단해지듯
                        </div>
                        <div
                            className="text-[14px] sm:text-[16px] lg:text-[20px] text-muted animate__animated animate__fadeIn">
                            도전과 실패를 바탕으로 견고한 성과를 만들어내는
                        </div>
                        <div
                            className="text-[25px] sm:text-[40px] lg:text-[60px] font-bold text-background animate__animated animate__fadeInUp">
                            프론트엔드 개발자 김유림입니다.
                        </div>
                    </div>

                    <TooltipProvider>
                        <Tooltip delayDuration={100}>
                            <TooltipTrigger asChild>
                                <Button
                                    variant={null}
                                    className="absolute bottom-12 animate-pulse"
                                >
                                    <BiChevronsDown
                                        onClick={handleDown}
                                        className="w-14 h-14 fill-zinc-500"/>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent
                                align="center"
                                alignOffset={0}
                                sideOffset={10}
                                className="bg-accent rounded">
                                <p>Click or Scroll</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>

            <Content/>
        </>
    )
}

export default Home;