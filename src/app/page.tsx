'use client'

import Content from "@/components/Content";
import {useEffect, useState} from "react";
import "animate.css";
import {MdKeyboardArrowDown} from "react-icons/md";
import {Button} from "@/components/ui/button";
import {ModalTypes} from "@/context/ModalContext";

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
                <div className="flex">
                    <div
                        id="container"
                        className={`flex justify-center items-center min-h-[100vh] min-w-[100vw] ${loaded ? 'bg-main-bg transition opacity-100 ease-in-out duration-1000 scale-100 relative' : 'bg-[#f6f6f6] transition opacity-100 ease-in-out duration-1000 scale-110'}`}>

                        <div className="absolute inset-0 backdrop-blur-xs bg-zinc-100/30"></div>
                    </div>

                    <div
                        className="container fixed flex flex-col justify-center items-center min-h-[100vh] min-w-[100vw]">
                        <div className="absolute flex flex-col items-center mb-40 lg:mb-52">
                            <div
                                className="text-[16px] lg:text-[20px] text-zinc-600 animate__animated animate__fadeInUp">
                                비 온 뒤의 땅이 단단해지듯
                            </div>
                            <div
                                className="text-[16px] lg:text-[20px] text-zinc-600 animate__animated animate__fadeInUp">
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
                                stroke="#52525b"
                                fill="#d4d4d8"
                                fillRule="evenodd"
                                fillOpacity="0.5"
                                strokeOpacity="0.7"
                            >
                                <text
                                    stroke="#52525b"
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
                            <div className="text-zinc-600 text-3xl lg:text-4xl font-semibold tracking-wide">
                                YU RIM
                            </div>
                            <div className="text-zinc-600 text-3xl lg:text-4xl font-semibold tracking-wide">
                                PORTFOLIO
                            </div>
                        </div>
                    </div>

                    <div
                        className="fixed min-w-[100vw] min-h-[100vh] animate__animated animate__slideInUp delay-5300">
                        <div className="w-[100%]">
                            <div className="hover__wrap flex justify-center items-end mb-[50px] h-[100vh]">
                                <div className="hover__updown cursor-pointer" onClick={handleDown}>
                                    <figure className="front">
                                        <div
                                            className="flex flex-col justify-center items-center w-[90px] h-[90px] bg-transparent shadow-md rounded-full">
                                            <MdKeyboardArrowDown className="w-[60px] h-[60px] text-zinc-600"/>
                                        </div>
                                    </figure>
                                    <figure className="back">
                                        <div
                                            className="w-[90px] h-[90px] bg-white bg-opacity-20 shadow-md rounded-full"></div>
                                        <figcaption
                                            className="bg-white bg-opacity-30 w-[120%] h-[120%] shadow-md rounded-full absolute flex flex-col justify-center items-center">
                                            <div className="text-zinc-700">Click or Scroll</div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Content/>
        </>
    )
}

export default Home;