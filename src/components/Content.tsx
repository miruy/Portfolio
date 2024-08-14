'use client'

import ContentTopBar from "@/components/Content_TopBar";
import {useEffect, useState} from "react";
import {useTab} from "@/context/TabContext";
import {Button} from "@/components/ui/button";
import ContentAbout from "@/components/Content_About";
import ContentProject from "@/components/Content_Project";

const Content = () => {

    const {activeTab, setActiveTab} = useTab()
    const [isScrollEqualToScreenHeight, setIsScrollEqualToScreenHeight] = useState(false);

    const handleTab = (path: string) => {
        setActiveTab(() => path)

        const targetDiv = document.getElementById(path);
        if (targetDiv) {
            const yOffset = -100;
            const yPosition = targetDiv.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({top: yPosition, behavior: 'smooth'});
        }
    };

    const handleScroll = () => {
        const position = window.scrollY;
        const screenHeight = window.innerHeight;

        if (position >= screenHeight) {
            setIsScrollEqualToScreenHeight(true)
        }

        if (position < screenHeight) {
            setIsScrollEqualToScreenHeight(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
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
                            <span className="text-4xl tracking-wider font-bold">About</span>
                        </Button>

                        <Button
                            variant={null}
                            className={`${activeTab === "project" ? `text-foreground` : `text-zinc-600 hover:text-zinc-500 `} h-fit w-fit rounded duration-300`}
                            onClick={() => handleTab("project")}
                        >
                            <span className="text-4xl tracking-wider font-bold">Project</span>
                        </Button>
                    </div>

                    <div className="flex flex-1 flex-col bg-emerald-500 mt-32 justify-between mx-5 lg:ml-60 lg:mr-20">
                        <div id="about" className="h-[100vh]">
                            <ContentAbout/>
                        </div>

                        <div id="project" className="h-[100vh]">
                            <ContentProject/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;