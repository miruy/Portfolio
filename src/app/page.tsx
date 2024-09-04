'use client'

import Content from "@/components/Content";
import {BiChevronsDown} from "react-icons/bi";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";
import "animate.css";

const Home = () => {

    const [loaded, setLoaded] = useState<boolean>(false)

    const handleDown = () => {
        const targetDiv = document.getElementById("content");
        if (targetDiv) {
            targetDiv.scrollIntoView({behavior: 'smooth'});
        }
    }

    useEffect(() => {
        // 컴포넌트가 마운트된 후 5초 뒤에 'loaded' 클래스를 추가
        const timer = setTimeout(() => {
            const container = document.getElementById('container');
            if (container) {
                setLoaded(true)
            }
        }, 2600);

        // 컴포넌트가 언마운트될 때 타이머를 클리어
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="fixed z-10 top-0 bottom-0 right-0 left-0 flex">
                <div
                    className="flex flex-1 justify-center items-center">
                    <div
                        id="container"
                        className={`flex justify-center items-center min-h-[100vh] min-w-[100vw] ${loaded ? 'bg-main-bg transition opacity-100 ease-in-out duration-1000 scale-100' : 'bg-[#F1F2F1] transition opacity-100 ease-in-out duration-1000 scale-110'}`}>
                    </div>

                    <div
                        className="container fixed flex flex-col justify-center items-center min-h-[100vh] min-w-[100vw]">
                        <div className="absolute flex flex-col items-center mb-40 lg:mb-52">
                            <div
                                className="text-[16px] lg:text-[20px] text-zinc-500 animate__animated animate__fadeInUp">
                                비 온 뒤의 땅이 단단해지듯
                            </div>
                            <div
                                className="text-[16px] lg:text-[20px] text-zinc-500 animate__animated animate__fadeInUp">
                                도전과 실패를 바탕으로 견고한 성과를 만들어내는
                            </div>
                        </div>

                        <svg
                            className="text-5xl lg:text-7xl"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <g
                                stroke="#a1a1aa"
                                fill="#d4d4d8"
                                fillRule="evenodd"
                                fillOpacity="0.5">
                                <text
                                    stroke="#a1a1aa"
                                    fill="#d4d4d8"
                                    fontWeight="normal"
                                    textAnchor="middle"
                                    x="50%"
                                    y="50%"
                                >
                                    <tspan>
                                        <tspan>F</tspan>
                                        <tspan>r</tspan>
                                        <tspan>o</tspan>
                                        <tspan>n</tspan>
                                        <tspan>t</tspan>
                                        <tspan>-</tspan>
                                        <tspan>E</tspan>
                                        <tspan>n</tspan>
                                        <tspan>d</tspan>
                                        <tspan>&nbsp;</tspan>
                                        <tspan>D</tspan>
                                        <tspan>e</tspan>
                                        <tspan>v</tspan>
                                        <tspan>e</tspan>
                                        <tspan>l</tspan>
                                        <tspan>o</tspan>
                                        <tspan>p</tspan>
                                        <tspan>e</tspan>
                                        <tspan>r</tspan>
                                    </tspan>
                                </text>
                            </g>
                        </svg>

                        <div className="fixed flex space-x-3 animate__animated animate__fadeIn delay-5000 mt-24">
                            <div className="text-zinc-500 text-3xl lg:text-4xl font-semibold tracking-wide">
                                YU RIM
                            </div>
                            <div className="text-zinc-500 text-3xl lg:text-4xl font-semibold tracking-wide">
                                PORTFOLIO
                            </div>
                        </div>
                    </div>

                    <div
                        className="fixed min-w-[100vw] min-h-[100vh] animate__animated animate__zoomIn delay-6000">
                        <div className="w-[100%]">
                            <div className="hover__wrap flex justify-center items-center mt-[200px] h-[100vh]">
                                <div className="hover__updown">
                                    <figure className="front">
                                        <div className="w-[400px] h-[400px] bg-secondary opacity-30 shadow-md rounded-full">

                                        </div>
                                    </figure>
                                    <figure className="back">
                                        <div className="w-[400px] h-[400px] bg-secondary opacity-50 shadow-md rounded-full"></div>
                                        <figcaption className="bg-white bg-opacity-30 absolute w-[100%] h-[100%] rounded-full space-y-5 flex flex-col justify-center items-center">
                                            <span className="text-xl text-zinc-700">Git Hub</span>
                                            <Button variant="default" className="rounded w-[50%] bg-zinc-700 hover:bg-zinc-600">바로가기</Button>
                                        </figcaption>
                                    </figure>
                                </div>
                                {/*<div className="hover__leftright">*/}
                                {/*    <figure className="front">*/}
                                {/*        <img*/}
                                {/*            src="https://github.com/mj0614k/Coding/blob/main/animation/img/hoverAni_03.jpg?raw=true"*/}
                                {/*            alt=""/>*/}
                                {/*        <figcaption>*/}
                                {/*            <h3>Mouse Hover Effect</h3>*/}
                                {/*            <p>마우스를 올리면<br/>to Right</p>*/}
                                {/*        </figcaption>*/}
                                {/*    </figure>*/}
                                {/*    <figure className="back">*/}
                                {/*        <img*/}
                                {/*            src="https://github.com/mj0614k/Coding/blob/main/animation/img/hoverAni_04.jpg?raw=true"*/}
                                {/*            alt=""/>*/}
                                {/*        <figcaption>*/}
                                {/*            <h3>Mouse Hover Effect</h3>*/}
                                {/*            <p>마우스를 내리면<br/>to Left</p>*/}
                                {/*        </figcaption>*/}
                                {/*    </figure>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>

                    <TooltipProvider>
                        <Tooltip delayDuration={100}>
                            <TooltipTrigger asChild className="button">
                                <Button
                                    variant={null}
                                    className="absolute bottom-12"
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