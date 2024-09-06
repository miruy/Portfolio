import {Separator} from "@/components/ui/separator";
import Link from "next/link";
import {FaGithub} from "react-icons/fa";
import {useState} from "react";
import {FaChildReaching, FaHandsClapping} from "react-icons/fa6";
import {PiShootingStarFill} from "react-icons/pi";

const Profile = () => {

    const [hovered, setHovered] = useState<boolean>(false)

    return (
        <div
            className="flex flex-col 2xl:flex-row space-y-5 2xl:space-y-0 space-x-0 2xl:space-x-14 items-center">
            <div className="flex flex-col justify-center space-y-4">
                <div className="w-[230px] h-[230px] lg:w-[280px] lg:h-[280px]">
                    <img src="/image/mimo_avatar.png" alt="notion_avatar" className="w-full h-full"/>
                </div>

                <div className="flex flex-col w-[200px] md:w-full items-center justify-center">
                    <div className="flex w-full space-x-1">
                        <div className="flex flex-col flex-1 items-center mb-1">
                            <div className="text-[12px] sm:text-[14px]">GitHub</div>
                            <Separator className="my-1 w-full bg-zinc-400"/>
                            <Link
                                href={`https://github.com/miruy`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub
                                    className="w-8 h-8 mt-1 fill-zinc-500 hover:fill-foreground hover:scale-105"/>
                            </Link>
                        </div>

                        <div className="flex flex-col flex-1 items-center">
                            <div className="text-[12px] sm:text-[14px]">블로그</div>
                            <Separator className="my-1 w-full bg-zinc-400"/>
                            <Link
                                href={`https://memocode.dev/@dbflarla4966/memos`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    onMouseOver={() => setHovered(true)}
                                    onMouseLeave={() => setHovered(false)}
                                    src={hovered ? `/image/memocode/memocode_black.png` : `/image/memocode/memocode_gray.png`}
                                    className="w-8 h-9 mt-1"
                                    alt="memocode_icon"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="flex flex-col h-fit tracking-wide py-5 text-[15px] 2xl:text-[16px] text-zinc-700 space-y-5">
                <div className="bg-secondary rounded p-5 leading-[25px] md:leading-7">
                    <div className="flex flex-shrink-0 items-start space-x-1 mb-2">
                        <FaChildReaching className="w-4 h-4 mt-1.5"/>
                        <div className="text-[17px] font-bold">소개</div>
                    </div>

                    안녕하세요.
                    <div>
                        프론트엔드 개발자가 되고자 <span
                        className="bg-zinc-600 py-0.5 px-1.5 text-white rounded text-[13.5px] 2xl:text-[14.5px]">끊임없는 공부</span>
                        와{` `}
                        <span className="bg-zinc-600 py-0.5 px-1.5 text-white rounded text-[13.5px] 2xl:text-[14.5px]">지속적인 실전 경험</span>을
                        쌓기 위해 노력하고 있는
                        {` `}<span
                        className="underline underline-offset-4 font-semibold text-foreground">김유림</span>입니다.
                    </div>
                    <div>
                        백엔드 개발자 양성과정을 통해 기초를 다진 후, 현재는{` `}
                        <span className="bg-zinc-600 py-0.5 px-1.5 text-white rounded text-[13.5px] 2xl:text-[14.5px]">사용자 중심의 인터페이스를 구축</span>하는
                        프론트엔드
                        개발에 집중하고 있습니다.
                    </div>
                </div>

                <div className="bg-secondary rounded p-5 leading-[25px] md:leading-7">
                    <div className="flex flex-shrink-0 items-start space-x-1.5 mb-2">
                        <PiShootingStarFill className="w-5 h-5 mt-1"/>
                        <div className="text-[17px] font-bold">개발 역량을 강화하기 위한 노력</div>
                    </div>

                    IT 학원에서 7개월간 백엔드 개발자 양성과정을 이수하며, 팀 프로젝트에서 팀장 역할을 맡아 팀원들과의 원활한 소통 및 협업을 이끌어냈습니다.
                    <div>
                        이를 통해{` `}
                        <span className="bg-zinc-600 py-0.5 px-1.5 text-white rounded text-[13.5px] 2xl:text-[14.5px]">
                        효율적인 협업 방안을 모색하고, 더 나은 성과를 이끌어내기 위한 다양한 방법을 꾸준히 고민</span>해 왔습니다.
                    </div>
                    <div>
                        또한, React, Next.js, HTML, CSS, Javascript, Typescript 등{` `}
                        <span className="bg-zinc-600 py-0.5 px-1.5 text-white rounded text-[13.5px] 2xl:text-[14.5px]">
                            프론트엔드 개발에 필수적인 기술을 학습
                        </span>하고, 이를 실전 프로젝트에 적용하며 기술을 효과적으로 활용하고 응용하는 능력을 키웠습니다.
                    </div>
                    더불어{` `}
                    <span className="bg-zinc-600 py-0.5 px-1.5 text-white rounded text-[13.5px] 2xl:text-[14.5px]">
                        문제 해결 능력을 키우기 위해 지속적인 학습
                    </span>을 병행하며, 실무에서 요구되는 기술적 깊이를 꾸준히 쌓아가고 있습니다.
                </div>
            </div>
        </div>
    )
}

export default Profile;