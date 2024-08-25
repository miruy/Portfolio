import {Separator} from "@/components/ui/separator";
import Link from "next/link";
import {FaGithub} from "react-icons/fa";

const Profile = () => {
    return (
        <div
            className="flex flex-col md:flex-row space-y-5 md:space-y-0 space-x-0 md:space-x-5 items-center">
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

            <div
                className="flex flex-col h-fit leading-6 space-y-1.5 tracking-wide p-5 text-sm xl:text-[17px] text-zinc-300">
                <div>안녕하세요.</div>
                <div>
                    프론트엔드 개발자가 되고자
                    <span className="text-white font-semibold"> 끊임없는 공부</span>
                    와
                    <span className="text-white font-semibold"> 지속적인 실전 경험</span>
                    을 쌓기 위해 노력하고 있는
                    <span className="text-white font-bold"> 김유림 </span>
                    입니다.
                </div>
                <div>
                    백엔드 개발자 양성과정을 통해 기초를 다진 후, 이제는
                    <span className="text-white font-semibold"> 사용자 중심의 인터페이스를 구축</span>
                    하는 프론트엔드 개발에
                    집중하고 있습니다.
                </div>
                <div>포트폴리오를 둘러보신 후,
                    <span className="text-white font-semibold"> 귀중한 피드백</span>
                    을 남겨주신다면 겸손한 마음으로 개선사항에 반영하겠습니다.
                </div>
                <div>귀한 시간 내어 방문해 주셔서 감사합니다 : )</div>
            </div>
        </div>
    )
}

export default Profile;