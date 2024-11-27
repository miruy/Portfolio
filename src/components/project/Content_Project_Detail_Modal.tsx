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
import {FaGithub, FaLink} from "react-icons/fa";
import Link from "next/link";
import {IoClose} from "react-icons/io5";
import {Separator} from "@/components/ui/separator";
import Content_Project_Memocode from "@/components/project/detail/memocode/Content_Project_Memocode";
import Content_Project_Farmfarm from "@/components/project/detail/farmfarm/Content_Project_Farmfarm";
import Content_Project_Portfolio from "@/components/project/detail/portfolio/Content_Project_Portfolio";
import Content_Project_Frety from "@/components/project/detail/frety/Content_Project_Frety";
import Content_Project_Uno from "@/components/project/detail/uno/Content_Project_Uno";
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

                    {url &&
                        <div className="flex justify-center py-5 space-x-1 items-center">
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
                                        <PiPresentationChartBold
                                            className="w-6 h-6 mt-1 fill-zinc-500 hover:fill-zinc-900"/>
                                    </Link>
                                </div>
                            }
                        </div>
                    }

                    <div className="absolute w-full h-full">
                        {title && title === "카이토리 - UNO CARE CMS" && <Content_Project_Uno/>}
                        {title && title === "Frety" && <Content_Project_Frety/>}
                        {title && title === "MEMOCODE" && <Content_Project_Memocode/>}
                        {title && title === "FARMFARM" && <Content_Project_Farmfarm/>}
                        {title && title === "포트폴리오 사이트" && <Content_Project_Portfolio/>}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default Content_Project_Detail_Modal;