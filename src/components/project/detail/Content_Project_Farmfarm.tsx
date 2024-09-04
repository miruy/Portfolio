import farmfarm from "@/data/farmfarm";
import Content_Project_Detail_Info from "@/components/project/Content_Project_Detail_Info";
import {useContext} from "react";
import {ModalContext, ModalTypes} from "@/context/ModalContext";
import Content_Project_Detail_Image_Expansion_Modal
    from "@/components/project/detail/Content_Project_Detail_Image_Expansion_Modal";
import farmfarm_images from "@/data/farmfarm_images";
import Content_Project_Farmfarm_Point from "@/components/project/detail/farmfarm/Content_Project_Farmfarm_Point";
import Content_Project_Farmfarm_DevReason
    from "@/components/project/detail/farmfarm/Content_Project_Farmfarm_DevReason";
import Content_Project_Farmfarm_KeyFeatures
    from "@/components/project/detail/farmfarm/Content_Project_Farmfarm_KeyFeatures";
import Content_Project_FarmFarm_Improvement
    from "@/components/project/detail/farmfarm/Content_Project_FarmFarm_Improvement";
import {FaAsterisk} from "react-icons/fa";

const Content_Project_Farmfarm = () => {

    const data = farmfarm;
    const {openModal} = useContext(ModalContext)

    return (
        <>
            <Content_Project_Detail_Info data={data}/>

            <div className="flex flex-col w-full h-full py-5">
                <div className="flex-1 flex flex-col space-y-10 items-center">
                    <div className="flex flex-col w-full h-fit bg-transparent p-3 sm:p-5 space-y-7">
                        <div className="space-y-2">
                            <div className="flex items-start space-x-1.5 text-zinc-600 text-[14px] md:text-[15px]">
                                <FaAsterisk className="flex-shrink-0 mt-1.5 w-2.5 h-2.5"/>
                                <div>
                                    서비스 내 사용되는 모든 명칭 및 구조는 실제 시설원예(비닐하우스) 도메인을 반영하여 사용자가 쉽게 조회하고 관리할 수 있도록 구성하였습니다.
                                </div>
                            </div>
                            <div className="flex items-start space-x-1.5 text-zinc-600 text-[14px] md:text-[15px]">
                                <FaAsterisk className="flex-shrink-0 mt-1.5 w-2.5 h-2.5"/>
                                <div>
                                    본 서비스는 실제 시설에서 사용 중인 관계로, <span className="text-zinc-700 font-semibold">로그인 및 서비스 이용은 등록된 비닐하우스를 운영하는 농업인만 가능합니다.</span>
                                    <div>이에 따라, <span className="text-zinc-900 font-semibold">사이트에 대한 자세한 정보는 포트폴리오 내 작업 화면 및 작성 내용을 통해서만 확인</span>할
                                        수 있다는 점 양해 부탁드립니다.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-zinc-400 text-foreground font-semibold tracking-wider pb-2">
                            작업화면

                            <div className="text-[12px] text-zinc-400 mt-1">클릭하면 이미지를 크게 볼 수 있습니다.</div>
                        </div>
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5 pt-5">
                            {farmfarm_images.map((data, index) => {
                                return (
                                    <div key={index} className="flex flex-col">
                                        <img onClick={() => {
                                            openModal({
                                                name: ModalTypes.CONTENT_PROJECT_IMAGE_EXPANSION,
                                                data: {
                                                    key: "farmfarm",
                                                    images: farmfarm_images,
                                                    targetId: data.id
                                                }
                                            })
                                        }}
                                             src={data.src}
                                             alt={`farmfarm_image_${data.id}`}/>
                                        <div
                                            className="flex justify-center py-1 text-[14px] text-zinc-500">{data.title}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* 중점 요소  */}
                    <Content_Project_Farmfarm_Point/>

                    {/* 제작 동기 */}
                    <Content_Project_Farmfarm_DevReason/>

                    {/* 서비스 기능 및 특징 */}
                    <Content_Project_Farmfarm_KeyFeatures/>

                    {/* 이슈 및 해결방안 */}
                    <Content_Project_FarmFarm_Improvement/>
                </div>
            </div>

            <Content_Project_Detail_Image_Expansion_Modal/>
        </>
    )
}

export default Content_Project_Farmfarm;