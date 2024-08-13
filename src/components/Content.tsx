'use client'

import Content_TopBar from "@/components/Content_TopBar";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {useEffect, useState} from "react";

const Content = () => {

    const [activeTab, setActiveTab] = useState<string>();
    const [isScrollEqualToScreenHeight, setIsScrollEqualToScreenHeight] = useState(false);

    const handleTab = (path: string) => {
        setActiveTab(path)
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
                    <Content_TopBar isScrollEqualToScreenHeight={isScrollEqualToScreenHeight} handleTab={handleTab}/>

                    <Tabs defaultValue="about" className="mt-24">
                        <TabsList
                            className={`${isScrollEqualToScreenHeight ? 'fixed' : 'absolute'} hidden lg:flex top-24 left-5 z-50 flex-col w-auto h-auto p-1 bg-transparent`}>
                            <TabsTrigger
                                value="about"
                                className={`text-4xl tracking-wider font-bold`}
                            >
                                About
                            </TabsTrigger>
                            <TabsTrigger
                                value="project"
                                className="text-4xl tracking-wider font-bold"
                            >
                                Project
                            </TabsTrigger>
                        </TabsList>

                        <div className="bg-emerald-500 flex flex-1 mx-5 lg:ml-60 lg:mr-20">
                            <div className="hidden lg:flex">
                                <TabsContent value="about">About page</TabsContent>
                                <TabsContent value="project">Project page</TabsContent>
                            </div>

                            <div className="flex lg:hidden">
                                {activeTab === "about" &&
                                    <div>
                                        About page
                                    </div>
                                }
                                {activeTab === "project" &&
                                    <div>
                                        Project page
                                    </div>
                                }
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Content;