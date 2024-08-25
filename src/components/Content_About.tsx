import {useEffect, useRef, useState} from "react";
import EducationExperience from "@/components/aboutme/Education_Experience";
import Skill_Tool from "@/components/aboutme/Skill_Tool";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";
import {FaGithub} from "react-icons/fa";

const ContentAbout = () => {

    const divRef = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        const div = divRef.current;
        if (div) {
            // ResizeObserver 인스턴스 생성
            const resizeObserver = new ResizeObserver(entries => {
                const {width} = entries[0].contentRect;
                setWidth(width - 10);
            });

            // 관찰 시작
            resizeObserver.observe(div);

            // 컴포넌트가 언마운트 될 때 관찰 중단
            return () => resizeObserver.unobserve(div);
        }
    }, []);

    return (
        <div className="flex flex-col flex-1 space-y-20" ref={divRef}>
            <div
                className="flex flex-col md:flex-row space-y-5 md:space-y-0 space-x-0 md:space-x-5">
                <div className="flex flex-row md:flex-col justify-center md:justify-start">
                    <div
                        className="flex justify-center relative w-[155px] h-[155px] xl:w-[300px] xl:h-[300px]">
                        <div className="flex flex-row md:flex-col absolute -top-2">
                            <img src="/notion_avatar.svg" alt="notion_avatar" className="w-full h-full"/>
                        </div>
                    </div>

                    <div className="flex flex-col w-[200px] md:w-full items-center justify-center space-y-1">
                        <div className="text-xl xl:text-2xl font-semibold tracking-wide">김유림</div>

                        <div className="flex w-full space-x-1">
                            <div className="flex flex-col flex-1 items-center mb-1">
                                <div className="text-[12px] sm:text-[14px]">GitHub</div>
                                <Separator className="my-1 w-full bg-zinc-500"/>
                                <Link
                                    href={`https://github.com/miruy`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub className="w-7 h-7 xl:w-8 xl:h-8 mt-1 fill-white"/>
                                </Link>
                            </div>

                            <div className="flex flex-col flex-1 items-center">
                                <div className="text-[12px] sm:text-[14px]">블로그</div>
                                <Separator className="my-1 w-full bg-zinc-500"/>
                                <Link
                                    href={`https://memocode.dev/@dbflarla4966/memos`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="/memocode_white.png"
                                        className="w-7 h-8 xl:w-8 xl:h-9 mt-1"
                                        alt="memocode_icon"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 bg-zinc-900 p-5">
                    안녕하세요
                </div>
            </div>

            <EducationExperience width={width}/>

            <Skill_Tool width={width}/>
        </div>
    )
}

export default ContentAbout;