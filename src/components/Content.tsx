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
                <div className="relative bg-background flex-1">
                    <ContentTopBar isScrollEqualToScreenHeight={isScrollEqualToScreenHeight} handleTab={handleTab}/>

                    <div className="mt-24">
                        <div
                            className={`${isScrollEqualToScreenHeight ? 'fixed' : 'absolute'} hidden lg:flex top-24 left-5 z-50 flex-col w-auto h-auto p-1 bg-transparent`}>
                            <Button
                                variant={null}
                                className={`${activeTab === "about" ? `text-foreground` : `text-muted hover:text-muted-foreground`} h-fit w-fit rounded duration-300`}
                                onClick={() => setActiveTab(() => "about")}
                            >
                                <span className="text-4xl tracking-wider font-bold">About</span>
                            </Button>

                            <Button
                                variant={null}
                                className={`${activeTab === "project" ? `text-foreground` : `text-muted hover:text-muted-foreground `} h-fit w-fit rounded duration-300`}
                                onClick={() => setActiveTab(() => "project")}
                            >
                                <span className="text-4xl tracking-wider font-bold">Project</span>
                            </Button>
                        </div>

                        <div className="bg-emerald-500 flex flex-1 mx-5 lg:ml-60 lg:mr-20">
                            {activeTab === "about" && <ContentAbout/>}
                            {activeTab === "project" && <ContentProject/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;