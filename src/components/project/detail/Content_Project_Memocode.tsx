import memocode from "@/data/memocode";
import projectPreview from "@/data/content_Project_Preview";
import Content_Project_Memocode_DevReason from "@/components/project/detail/Content_Project_Memocode_DevReason";
import Content_Project_Detail_Info from "@/components/project/Content_Project_Detail_Info";
import Content_Project_Memocode_KeyFeatures from "@/components/project/detail/Content_Project_Memocode_KeyFeatures";
import Content_Project_Memocode_Improvement from "@/components/project/detail/Content_Project_Memocode_Improvement";
import {ModalContext, ModalTypes} from "@/context/ModalContext";
import {useContext} from "react";
import Content_Project_Detail_Image_Expansion_Modal
    from "@/components/project/detail/Content_Project_Detail_Image_Expansion_Modal";

const Content_Project_Memocode = () => {

    const data = memocode;
    const imageSrcs = [
        "/memocode_main1.png",
        "/memocode_main2.png",
        "/memocode_main3.png",
        "/memocode_main4.png",
    ]
    const {openModal} = useContext(ModalContext)

    return (
        <>
            <Content_Project_Detail_Info data={data}/>

            <div className="flex flex-col w-full h-full my-5 py-5">
                <div className="flex-1 flex flex-col space-y-10 items-center">
                    <div className="flex flex-col w-full h-fit bg-transparent p-3 sm:p-5">
                        <div className="border-b border-zinc-600 text-zinc-300 font-semibold tracking-wider pb-2">
                            작업화면

                            <div className="text-[12px] text-zinc-500 mt-1">클릭 시 큰 이미지로 볼 수 있습니다.</div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 pt-5">
                            {imageSrcs.map((src, index) => {
                                return (
                                    <img onClick={() => {
                                        openModal({
                                            name: ModalTypes.CONTENT_PROJECT_IMAGE_EXPANSION,
                                            data: {
                                                key: "memocode",
                                                imageSrcs: imageSrcs
                                            }
                                        })
                                    }}
                                         key={index}
                                         src={src}
                                         alt={`memocode_image_${index}`}/>
                                )
                            })}
                        </div>

                    </div>

                    {/* 제작 동기 */}
                    <Content_Project_Memocode_DevReason/>

                    {/* 주요 기능 및 특징 */}
                    <Content_Project_Memocode_KeyFeatures/>

                    {/* 이슈 및 개선사항 */}
                    <Content_Project_Memocode_Improvement/>
                </div>
            </div>

            <Content_Project_Detail_Image_Expansion_Modal/>
        </>
    )
}

export default Content_Project_Memocode;