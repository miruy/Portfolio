import portfolio from "@/data/portfolio";
import Content_Project_Detail_Info from "@/components/project/Content_Project_Detail_Info";
import {useContext} from "react";
import {ModalContext, ModalTypes} from "@/context/ModalContext";
import Content_Project_Detail_Image_Expansion_Modal
    from "@/components/project/detail/Content_Project_Detail_Image_Expansion_Modal";
import portfolio_images from "@/data/portfolio_images";
import Content_Project_Portfolio_Point from "@/components/project/detail/portfolio/Content_Project_Portfolio_Point";
import Content_Project_Portfolio_DevReason
    from "@/components/project/detail/portfolio/Content_Project_Portfolio_DevReason";
import Content_Project_Portfolio_KeyFeatures
    from "@/components/project/detail/portfolio/Content_Project_Portfolio_KeyFeatures";
import Content_Project_Portfolio_Improvement
    from "@/components/project/detail/portfolio/Content_Project_Portfolio_Improvement";

const Content_Project_Portfolio = () => {

    const data = portfolio;
    const {openModal} = useContext(ModalContext)

    return (
        <>
            <Content_Project_Detail_Info data={data}/>

            <div className="flex flex-col w-full h-full py-5">
                <div className="flex-1 flex flex-col space-y-10 items-center">
                    <div className="flex flex-col w-full h-fit bg-transparent p-3 sm:p-5">
                        <div className="border-b border-zinc-600 text-foreground font-semibold tracking-wider pb-2">
                            작업화면

                            <div className="text-[12px] text-zinc-400 mt-1">클릭하면 이미지를 크게 볼 수 있습니다.</div>
                        </div>
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5 pt-5">
                            {portfolio_images.map((data, index) => {
                                return (
                                    <div key={index} className="flex flex-col">
                                        <img onClick={() => {
                                            openModal({
                                                name: ModalTypes.CONTENT_PROJECT_IMAGE_EXPANSION,
                                                data: {
                                                    key: "portfolio",
                                                    images: portfolio_images,
                                                    targetId: data.id
                                                }
                                            })
                                        }}
                                             src={data.src}
                                             alt={`portfolio_image_${data.id}`}/>
                                        <div
                                            className="flex justify-center py-1 text-[14px] text-zinc-400">{data.title}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* 중점 요소  */}
                    <Content_Project_Portfolio_Point/>

                    {/* 제작 동기 */}
                    <Content_Project_Portfolio_DevReason/>

                    {/* 서비스 기능 및 특징 */}
                    <Content_Project_Portfolio_KeyFeatures/>

                    {/* 이슈 및 해결방안 */}
                    <Content_Project_Portfolio_Improvement/>
                </div>
            </div>

            <Content_Project_Detail_Image_Expansion_Modal/>
        </>
    )
}

export default Content_Project_Portfolio;