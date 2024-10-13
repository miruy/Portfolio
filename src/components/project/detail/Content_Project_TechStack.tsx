import {Project} from "@/model/project";
import React from "react";
import {GoDotFill} from "react-icons/go";

interface ContentProjectDetailInfo {
    data: Project;
}

const Content_Project_TechStack = ({data}: ContentProjectDetailInfo) => {
    return (
        <div className="flex flex-col w-full h-fit bg-transparent">
            <div className="border-b border-zinc-400 text-foreground font-semibold tracking-wider pb-2">
                기술스택
            </div>

            <div className="pt-5 mx-5 space-y-1">
                {/*Language*/}
                <div className="flex items-center tracking-wide space-x-1">
                    <div className="flex items-start text-[15px] leading-7">
                        <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5 text-zinc-500"/>
                        <span className="ml-1.5 text-[14px] font-semibold">Language :</span>
                    </div>

                    <div>
                        {data.usedSkils.map((usedSkil, index) => {
                            return (
                                <div key={index} className="text-[14px]">{usedSkil.Language}</div>
                            );
                        })}
                    </div>
                </div>

                {/*Framework*/}
                {data?.usedSkils?.[0]?.Framework &&
                    <div className="flex items-center tracking-wide space-x-1">
                        <div className="flex items-start text-[15px] leading-7">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5 text-zinc-500"/>
                            <span className="ml-1.5 text-[14px] font-semibold">Framework :</span>
                        </div>

                        <div>
                            {data.usedSkils.map((usedSkil, index) => {
                                return (
                                    <div key={index} className="text-[14px]">{usedSkil.Framework}</div>
                                );
                            })}
                        </div>
                    </div>
                }

                {/*Library*/}
                <div className="flex items-center tracking-wide space-x-1">
                    <div className="flex items-start text-[15px] leading-7">
                        <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5 text-zinc-500"/>
                        <span className="ml-1.5 text-[14px] font-semibold">Library :</span>
                    </div>

                    <div>
                        {data.usedSkils.map((usedSkil, index) => {
                            return (
                                <div key={index} className="text-[14px]">{usedSkil.Library}</div>
                            );
                        })}
                    </div>
                </div>

                {/*Server*/}
                {data?.usedSkils?.[0]?.Server &&
                    <div className="flex items-center tracking-wide space-x-1">
                        <div className="flex items-start text-[15px] leading-7">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5 text-zinc-500"/>
                            <span className="ml-1.5 text-[14px] font-semibold">Server :</span>
                        </div>

                        <div>
                            {data.usedSkils.map((usedSkil, index) => {
                                return (
                                    <div key={index} className="text-[14px]">{usedSkil.Server}</div>
                                );
                            })}
                        </div>
                    </div>
                }

                <>
                    {/*CI / CD (Hosting / Deployment)*/}
                    {data?.usedSkils?.[0]?.["CI / CD"] &&
                        <div className="flex items-center tracking-wide space-x-1">
                            <div className="flex items-start text-[15px] leading-7">
                                <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5 text-zinc-500"/>
                                <span className="ml-1.5 text-[14px] font-semibold">CI / CD :</span>
                            </div>

                            <div>
                                {data.usedSkils.map((usedSkil, index) => {
                                    return (
                                        <div key={index} className="text-[14px]">{usedSkil["CI / CD"]}</div>
                                    );
                                })}
                            </div>
                        </div>
                    }

                    {/*Hosting / Deployment*/}
                    {data?.usedSkils?.[0]?.["Hosting / Deployment"] &&
                        <div className="flex items-center tracking-wide space-x-1">
                            <div className="flex items-start text-[15px] leading-7">
                                <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5 text-zinc-500"/>
                                <span className="ml-1.5 text-[14px] font-semibold">Hosting / Deployment :</span>
                            </div>

                            <div>
                                {data.usedSkils.map((usedSkil, index) => {
                                    return (
                                        <div key={index}
                                             className="text-[14px]">{usedSkil["Hosting / Deployment"]}</div>
                                    );
                                })}
                            </div>
                        </div>
                    }
                </>

                {/*DB*/}
                {data?.usedSkils?.[0]?.DB &&
                    <div className="flex items-center tracking-wide space-x-1">
                        <div className="flex items-start text-[15px] leading-7">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5 text-zinc-500"/>
                            <span className="ml-1.5 text-[14px] font-semibold">DB :</span>
                        </div>

                        <div>
                            {data.usedSkils.map((usedSkil, index) => {
                                return (
                                    <div key={index} className="text-[14px]">{usedSkil.DB}</div>
                                );
                            })}
                        </div>
                    </div>
                }

                {/*Tool*/}
                <div className="flex items-center tracking-wide space-x-1">
                    <div className="flex items-start text-[15px] leading-7">
                        <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5 text-zinc-500"/>
                        <span className="ml-1.5 text-[14px] font-semibold">Tool :</span>
                    </div>

                    <div>
                        {data.usedSkils.map((usedSkil, index) => {
                            return (
                                <div key={index} className="text-[14px]">{usedSkil.Tool}</div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content_Project_TechStack;