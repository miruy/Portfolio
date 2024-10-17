import frety from "@/data/frety";
import Content_Project_Detail_Info from "@/components/project/Content_Project_Detail_Info";
import React, {useContext, useState} from "react";
import {ModalContext, ModalTypes} from "@/context/ModalContext";
import Content_Project_Detail_Image_Expansion_Modal
    from "@/components/project/detail/Content_Project_Detail_Image_Expansion_Modal";
import Content_Project_Frety_Blog from "@/components/project/detail/frety/Content_Project_Frety_Blog";
import frety_images from "@/data/frety_images";
import {BsJournalRichtext} from "react-icons/bs";
import Content_Project_TechStack from "@/components/project/detail/Content_Project_TechStack";
import Content_Project_Frety_DevDirection from "@/components/project/detail/frety/Content_Project_Frety_DevDirection";
import Content_Project_Frety_ERD from "@/components/project/detail/frety/Content_Project_Frety_ERD";
import Content_Project_Frety_Architecture from "@/components/project/detail/frety/Content_Project_Frety_Architecture";

const Content_Project_Frety = () => {

    const data = frety;
    const {openModal} = useContext(ModalContext)
    const [hoveredId, setHoveredId] = useState<number | null>(null)

    return (
        <>
            <Content_Project_Detail_Info data={data}/>

            <div className="flex flex-col w-full h-full">
                <div className="flex-1 flex flex-col items-center space-y-5">

                    {/* 기술 스택 */}
                    <div className="flex flex-col w-full h-fit bg-transparent p-3 sm:p-5">
                        <Content_Project_TechStack data={data}/>
                    </div>

                    {/* 구현 방향 */}
                    <Content_Project_Frety_DevDirection/>

                    <div className="flex flex-col w-full h-fit bg-transparent p-3 sm:p-5">
                        <div className="border-b border-zinc-400 text-foreground font-semibold tracking-wider pb-2">
                            작업화면

                            <div className="text-[12px] text-zinc-400 mt-1">클릭하면 큰 이미지와 기술 설명을 볼 수 있습니다.</div>
                        </div>
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5 pt-5">
                            {frety_images.map((data, index) => {
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
                                                    key: "frety",
                                                    images: frety_images,
                                                    targetId: data.id
                                                }
                                            })
                                        }}
                                    >
                                        <img
                                            src={data.src}
                                            alt={`frety_image_${data.id}`}
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

                    {/* 중점 요소  */}
                    {/*<Content_Project_Portfolio_Point/>*/}

                    {/* 제작 동기 */}
                    {/*<Content_Project_Portfolio_DevReason/>*/}

                    {/* DataBase ERD */}
                    <Content_Project_Frety_ERD/>

                    {/* 아키텍쳐 (서버 구성도) */}
                    <Content_Project_Frety_Architecture/>

                    {/* 관련 블로그 게시글 */}
                    <Content_Project_Frety_Blog/>
                </div>
            </div>

            <Content_Project_Detail_Image_Expansion_Modal/>
        </>
    )
}

export default Content_Project_Frety;