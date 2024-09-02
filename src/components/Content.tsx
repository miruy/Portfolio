'use client'

import ContentTopBar from "@/components/Content_TopBar";
import {useEffect, useRef, useState} from "react";
import {useTab} from "@/context/TabContext";
import {Button} from "@/components/ui/button";
import ContentAbout from "@/components/Content_About";
import ContentProject from "@/components/Content_Project";
import {TbClockEdit} from "react-icons/tb";

const Content = () => {

    const aboutRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);
    const {activeTab, setActiveTab} = useTab()
    const [isScrollEqualToScreenHeight, setIsScrollEqualToScreenHeight] = useState<boolean>(false);

    const handleTab = (path: string) => {
        setActiveTab(() => path)

        if (typeof window !== 'undefined') {
            const targetDiv = document.getElementById(path);

            if (targetDiv) {
                const yOffset = -100;
                const yPosition = targetDiv.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({top: yPosition, behavior: 'smooth'});
            }
        }
    };

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            const position = window.scrollY;
            const screenHeight = window.innerHeight;

            if (position >= screenHeight) {
                setIsScrollEqualToScreenHeight(true)
            }

            if (position < screenHeight) {
                setIsScrollEqualToScreenHeight(false)
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);

    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveTab(() => entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.3, // 요소가 30% 이상 보일 때 트리거
        });

        const targets = [aboutRef.current, projectRef.current];
        targets.forEach((target) => {
            if (target) observer.observe(target);
        });

        return () => {
            targets.forEach((target) => {
                if (target) observer.unobserve(target);
            });
        };
    }, []);

    return (
        <div className="h-screen relative flex">
            <div className="absolute z-50 top-[100vh] bottom-0 right-0 left-0 flex flex-col h-screen">
                <div id="content" className="relative bg-background flex-1 flex">
                    <ContentTopBar isScrollEqualToScreenHeight={isScrollEqualToScreenHeight} handleTab={handleTab}/>

                    <div
                        className={`${isScrollEqualToScreenHeight ? 'fixed' : 'absolute'} hidden lg:flex top-24 left-5 z-50 flex-col w-auto h-auto p-1 bg-transparent`}>
                        <Button
                            variant={null}
                            className={`${activeTab === "about" ? `text-foreground` : `text-zinc-600 hover:text-zinc-500`} h-fit w-fit rounded duration-300`}
                            onClick={() => handleTab("about")}
                        >
                            <span className="text-4xl tracking-wider font-bold">ABOUT ME</span>
                        </Button>

                        <Button
                            variant={null}
                            className={`${activeTab === "project" ? `text-foreground` : `text-zinc-600 hover:text-zinc-500 `} h-fit w-fit rounded duration-300`}
                            onClick={() => handleTab("project")}
                        >
                            <span className="text-4xl tracking-wider font-bold">PROJECT</span>
                        </Button>
                    </div>

                    <div className="flex flex-1 flex-col mt-[100px] mx-4 sm:mx-10 lg:ml-[280px] lg:mr-[45px]">
                        <div id="about" ref={aboutRef}>
                            <ContentAbout/>
                        </div>

                        <div id="project" ref={projectRef} className="mt-24">
                            <ContentProject/>
                        </div>
                        <div className="h-[500px]"></div>
                    </div>

                    <div
                        className={`${isScrollEqualToScreenHeight ? 'fixed' : 'absolute'} hidden lg:flex items-center space-x-1.5 bottom-5 left-5 z-50 text-zinc-400`}>
                        <TbClockEdit className="w-5 h-5"/>
                        <div className="tracking-wide text-[15px]">2024.09.02</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;