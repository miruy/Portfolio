import {ModalContext, ModalTypes} from "@/context/ModalContext";
import React, {useContext} from "react";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {FaAsterisk, FaGithub, FaLink} from "react-icons/fa";
import Link from "next/link";
import {IoClose} from "react-icons/io5";
import {Separator} from "@/components/ui/separator";
import Content_Project_Memocode from "@/components/project/detail/Content_Project_Memocode";
import Content_Project_Farmfarm from "@/components/project/detail/Content_Project_Farmfarm";
import Content_Project_Portfolio from "@/components/project/detail/Content_Project_Portfolio";
import Content_Project_Frety from "@/components/project/detail/Content_Project_Frety";
import Content_Project_Uno from "@/components/project/detail/Content_Project_Uno";
import {PiPresentationChartBold} from "react-icons/pi";

const Content_Project_Detail_Modal = () => {

    const {modalState, closeModal} = useContext(ModalContext)
    const {title, description, git, url, srs} = modalState[ModalTypes.CONTENT_PROJECT_DETAIL].data

    return (
        <Dialog open={modalState[ModalTypes.CONTENT_PROJECT_DETAIL].isVisible}>
            <DialogContent
                className="flex flex-col flex-1 p-3 sm:p-6 min-w-[90%] lg:min-w-[70%] w-[70%] h-[90vh] bg-secondary rounded sm:rounded border-0 outline-0">
                <div className="relative flex-1 overflow-y-auto">
                    <DialogHeader className="space-y-3">
                        <DialogTitle className="text-xl sm:text-2xl tracking-wider font-bold">{title}</DialogTitle>
                        <DialogDescription>
                            {description}
                        </DialogDescription>
                    </DialogHeader>

                    <div
                        className="flex fixed z-[1000] top-3 right-3 space-x-2 items-center rounded">
                        <DialogClose asChild>
                            <Button variant="default"
                                    className="h-fit w-fit px-1 py-1 rounded-full">
                                <IoClose
                                    className="w-5 h-5"
                                    onClick={() => {
                                        closeModal({name: ModalTypes.CONTENT_PROJECT_DETAIL})
                                    }}/>
                            </Button>
                        </DialogClose>
                    </div>

                    <div className="flex justify-center py-5 space-x-1 items-center">
                        {!url &&
                            <div className="flex flex-col space-y-1 py-5">
                                <div
                                    className="flex items-start space-x-1.5 text-zinc-700 font-semibold text-[14px] md:text-[15px]">
                                    <FaAsterisk className="flex-shrink-0 mt-1.5 w-2.5 h-2.5"/>
                                    <div>
                                        이 글의 목적은 상업적 이용이 아닌 개인 포트폴리오 제작을 위한 것이며, 모든 저작권은 해당 기업에 있음을 밝힙니다.
                                    </div>
                                </div>
                                <div
                                    className="flex items-start space-x-1.5 text-zinc-700 font-semibold text-[14px] md:text-[15px]">
                                    <FaAsterisk className="flex-shrink-0 mt-1.5 w-2.5 h-2.5"/>
                                    <div>
                                        상용화 여부 확인이 어려워 배포 링크를 첨부하지 않았습니다.
                                    </div>
                                </div>
                                <div
                                    className="flex items-start space-x-1.5 text-zinc-700 font-semibold text-[14px] md:text-[15px]">
                                    <FaAsterisk className="flex-shrink-0 mt-1.5 w-2.5 h-2.5"/>
                                    <div>
                                        저작권 및 관련 정보 보호를 위해 프로젝트 전체가 아닌 일부만<span className="text-zinc-500 text-[13px]"> (예:이미지 블라인드 처리, 구현 기능, 작업 기술 및 도구 등) </span>게시하는
                                        점 양해 부탁드립니다.
                                    </div>
                                </div>
                            </div>
                        }
                        {url &&
                            <>
                                <div className="flex flex-col items-center mb-1">
                                    <div className="text-[11px] sm:text-[13px]">사이트 바로가기</div>
                                    <Separator className="my-2 w-32 bg-zinc-400"/>
                                    <Link
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaLink className="w-5 h-5 mt-1 fill-zinc-500 hover:fill-zinc-900"/>
                                    </Link>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="text-[11px] sm:text-[13px]">관련 Git 바로가기</div>
                                    <Separator className="my-2 w-32 bg-zinc-400"/>
                                    <Link
                                        href={git}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub className="w-6 h-6 mt-1 fill-zinc-500 hover:fill-zinc-900"/>
                                    </Link>
                                </div>
                                {srs &&
                                    <div className="flex flex-col items-center">
                                        <div className="text-[11px] sm:text-[13px]">요구사항 및 시스템 설계</div>
                                        <Separator className="my-2 w-32 bg-zinc-400"/>
                                        <Link
                                            href={srs}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <PiPresentationChartBold className="w-6 h-6 mt-1 fill-zinc-500 hover:fill-zinc-900"/>
                                        </Link>
                                    </div>
                                }
                            </>
                        }
                    </div>

                    <div className="absolute w-full h-full">
                        {title && title === "UNO CARE CMS" && <Content_Project_Uno/>}
                        {title && title === "Frety - 프렛티" && <Content_Project_Frety/>}
                        {title && title === "MEMOCODE - 메모코드" && <Content_Project_Memocode/>}
                        {title && title === "FARMFARM - 팜팜" && <Content_Project_Farmfarm/>}
                        {title && title === "포트폴리오_김유림" && <Content_Project_Portfolio/>}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default Content_Project_Detail_Modal;