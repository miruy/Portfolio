import {Separator} from "@/components/ui/separator";
import Link from "next/link";
import {FaGithub} from "react-icons/fa";
import {useState} from "react";

const Profile = () => {

    const [hovered, setHovered] = useState<boolean>(false)

    return (
        <div
            className="flex flex-col md:flex-row space-y-5 md:space-y-0 space-x-0 md:space-x-5 items-center">
            <div className="flex flex-row md:flex-col justify-center md:justify-start">
                <div
                    className="flex justify-center relative w-[155px] h-[155px] xl:w-[230px] xl:h-[230px]">
                    <div className="flex flex-row md:flex-col absolute -top-2">
                        <img src="/image/mimo_avatar.png" alt="notion_avatar" className="w-full h-full"/>
                    </div>
                </div>

                <div className="flex flex-col w-[200px] md:w-full items-center justify-center space-y-1">
                    <div className="text-xl xl:text-2xl font-semibold tracking-wide">김유림</div>

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
                                    className="w-7 h-7 xl:w-8 xl:h-8 mt-1 fill-zinc-500 hover:fill-foreground hover:scale-105"/>
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
                                    className="w-7 h-8 xl:w-8 xl:h-9 mt-1"
                                    alt="memocode_icon"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="flex flex-col h-fit leading-5 2xl:leading-7 tracking-wide p-5 text-sm 2xl:text-[16px] text-secondary-foreground">
                <div>안녕하세요.</div>
                <div>
                    프론트엔드 개발자가 되고자<span className="text-foreground font-bold"> 끊임없는 공부</span>와
                    <span className="text-foreground font-bold"> 지속적인 실전 경험</span>을 쌓기 위해 노력하고 있는
                    <span className="text-foreground font-bold"> 김유림 </span>입니다.
                </div>
                <div className="mb-3">
                    백엔드 개발자 양성과정을 통해 기초를 다진 후, 현재는
                    <span className="text-foreground font-bold"> 사용자 중심의 인터페이스를 구축</span>하는 프론트엔드 개발에 집중하고 있습니다.
                </div>
                <div className="mb-3">
                    IT 학원에서 7개월간 백엔드 개발자 양성과정을 이수하며, 팀 프로젝트를 통해 백엔드와 프론트엔드 전반을 경험했습니다.
                    특히, 프로젝트 과정에서 <span className="text-foreground font-bold">생동감 있는 디자인 요소 </span>와
                    <span className="text-foreground font-bold"> 즉각적인 피드백이 반영되는</span> 프론트엔드 개발에 큰 매력을 느꼈습니다.

                    <div>
                        이를 통해 문제를 이해하고,
                        <span className="text-foreground font-bold"> 적절한 해결 방안을 기획하고 적용하는 과정에서 사용자 중심의 인터페이스 구축에 깊은 관심</span>
                        을 가지게 되었습니다.
                    </div>
                </div>
                <div className="mb-3">
                    또한, 팀 프로젝트에서 <span className="text-foreground font-semibold">팀장 </span>
                    역할을 맡아 팀원들을 이끌며 동료들과의 협업과 원활한 커뮤니케이션의 중요성을 깊이 깨달았습니다.
                    이를 바탕으로 <span className="text-foreground font-semibold">효율적인 협업 방안을 모색</span>하고,
                    <span className="text-foreground font-semibold">더 나은 성과를 도출하는 방법</span>에 대해 꾸준히 고민해왔습니다.
                </div>
                <div className="mb-3">
                    저는 프론트엔드 개발이 단순히 디자인 구현을 넘어
                    <span className="text-foreground font-semibold"> 사용자 경험을 고려한 효율적인 처리와 개선이 필수적</span>이라고
                    생각합니다. 앞으로도 지속적인 학습과 참여를 통해, 사용자에게 최상의 경험을 제공하는 프론트엔드 개발자로 성장해 나가고자 합니다.
                </div>
            </div>
        </div>
    )
}

export default Profile;