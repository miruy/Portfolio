import Content_Project_Detail_Info from "@/components/project/Content_Project_Detail_Info";
import {ModalContext, ModalTypes} from "@/context/ModalContext";
import React, {useContext, useState} from "react";
import Content_Project_Detail_Image_Expansion_Modal
    from "@/components/project/detail/Content_Project_Detail_Image_Expansion_Modal";
import uno from "@/data/uno";
import Content_Project_Uno_DevDirection from "@/components/project/detail/uno/Content_Project_Uno_DevDirection";
import {BsJournalRichtext} from "react-icons/bs";
import uno_images from "@/data/uno_images";
import Content_Project_TechStack from "@/components/project/detail/Content_Project_TechStack";
import {FaAsterisk} from "react-icons/fa";

const Content_Project_Uno = () => {

    const data = uno;
    const {openModal} = useContext(ModalContext)
    const [hoveredId, setHoveredId] = useState<number | null>(null)

    return (
        <div className="pt-5">
            <Content_Project_Detail_Info data={data}/>

            <div className="flex flex-col w-full h-full">
                <div className="flex-1 flex flex-col items-center">
                    <div className="flex flex-col space-y-1 py-5">
                        <div
                            className="flex items-start space-x-1.5 text-zinc-700 font-semibold text-[14px] md:text-[15px]">
                            <FaAsterisk className="flex-shrink-0 mt-1.5 w-2.5 h-2.5"/>
                            <div>
                                이 글의 목적은 상업적 이용이 아닌 개인 포트폴리오 제작을 위한 것이며, 모든 저작권은 해당 기업(카이토리)에 있음을 밝힙니다.
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

                    <div className="space-y-5">
                        {/* 기술 스택 */}
                        <div className="flex flex-col w-full h-fit bg-transparent p-3 sm:p-5">
                            <Content_Project_TechStack data={data}/>
                        </div>

                        {/* 구현 방향 */}
                        <Content_Project_Uno_DevDirection/>

                        <div className="flex flex-col w-full h-fit bg-transparent p-3 sm:p-5">
                            <div className="border-b border-zinc-400 text-foreground font-semibold tracking-wider pb-2">
                                작업화면

                                <div className="text-[12px] text-zinc-400 mt-1">클릭하면 큰 이미지와 기술 설명을 볼 수 있습니다.</div>
                            </div>
                            <div
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5 pt-5">
                                {uno_images.map((data, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-col relative cursor-pointer"
                                            onMouseOver={() => setHoveredId(data.id)}
                                            onMouseLeave={() => setHoveredId(null)}
                                            onClick={() => {
                                                openModal({
                                                    name: ModalTypes.CONTENT_PROJECT_IMAGE_EXPANSION,
                                                    data: {
                                                        key: "uno",
                                                        images: uno_images,
                                                        targetId: data.id
                                                    }
                                                })
                                            }}
                                        >
                                            <img
                                                src={data.src}
                                                alt={`uno_image_${data.id}`}
                                                className={`${hoveredId === data.id ? `scale-105` : `scale-100`} duration-300`}
                                            />
                                            {data.descriptions &&
                                                <div
                                                    className="absolute top-1.5 left-1.5 bg-zinc-500 bg-opacity-80 rounded p-1.5">
                                                    <BsJournalRichtext className="text-white w-5 h-5"/>
                                                </div>
                                            }
                                            <div className="flex justify-center py-1 text-[14px] text-zinc-500">
                                                {data.title}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Content_Project_Detail_Image_Expansion_Modal/>
        </div>
    )
}

export default Content_Project_Uno;