'use client'

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {FaGithub} from "react-icons/fa";
import {useTab} from "@/context/TabContext";

interface ContentTopBarProps {
    isScrollEqualToScreenHeight: boolean;
    handleTab: (path: string) => void;
}

const ContentTopBar = ({isScrollEqualToScreenHeight, handleTab}: ContentTopBarProps) => {

    const {activeTab} = useTab()

    return (
        <div
            className={`${isScrollEqualToScreenHeight ? 'fixed top-0' : 'absolute top-0'} w-full h-24 bg-background/5 backdrop-blur`}>
            <div className="flex h-full justify-between lg:justify-end items-center px-5">
                <div className="flex lg:hidden space-x-1">
                    <Button
                        variant="ghost"
                        className={`${activeTab === "about" ? `bg-muted` : ``} h-fit w-fit rounded duration-300`}
                        onClick={() => handleTab("about")}
                    >
                        <span className="text-md tracking-wider font-bold">About</span>
                    </Button>

                    <Button
                        variant="ghost"
                        className={`${activeTab === "project" ? `bg-muted` : ``} h-fit w-fit rounded duration-300`}
                        onClick={() => handleTab("project")}
                    >
                        <span className="text-md tracking-wider font-bold">Project</span>
                    </Button>
                </div>

                <div className="flex">
                    <TooltipProvider>
                        <Tooltip delayDuration={100}>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="h-fit w-fit rounded"
                                >
                                    <Link
                                        href={`https://github.com/miruy`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub className="w-6 h-6 lg:w-7 lg:h-7 my-1"/>
                                    </Link>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent
                                align="center"
                                alignOffset={0}
                                sideOffset={10}
                                className="bg-accent rounded">
                                <p>GitHub</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip delayDuration={100}>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="h-fit w-fit rounded"
                                >
                                    <Link
                                        href={`https://memocode.dev/@dbflarla4966/memos`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="/memocode_white.png"
                                            className="w-6 h-7 lg:w-7 lg:h-8 mt-1"
                                            alt="memocode_icon"/>
                                    </Link>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent
                                align="center"
                                alignOffset={0}
                                sideOffset={10}
                                className="bg-accent rounded">
                                <p>블로그</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                </div>
            </div>
        </div>
    )
}

export default ContentTopBar;