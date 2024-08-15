import projectPreview from "@/data/content_Project_Preview";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {ModalContext, ModalTypes} from "@/context/ModalContext";
import {useContext} from "react";
import Content_Project_Detail_Modal from "@/components/Content_Project_Detail_Modal";

const ContentProject = () => {

    const {openModal} = useContext(ModalContext)

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-7">
                {projectPreview.map((data, index) => {
                    return (
                        <div
                            key={index}
                            className="relative flex flex-col w-full h-full bg-secondary rounded cursor-pointer shadow-xl shadow-black"
                            style={{aspectRatio: '3 / 4'}}>
                            <video
                                src={data.src}
                                className="w-full h-[50%] object-fill rounded"
                                autoPlay
                                playsInline
                                // controls - 영상컨트롤바
                                muted
                                loop
                            />

                            <div className="flex flex-col flex-1 justify-between p-4">
                                <div className="space-y-2">
                                    <div
                                        className="text-[22px] 2xl:text-[20px] font-bold tracking-wide">{data.title}</div>
                                    <div className="text-[14px] text-zinc-400 tracking-wide">{data.description}</div>
                                </div>

                                <div className="flex flex-wrap">
                                    {data.tags.map((tag, index) => {
                                        return (
                                            <Badge key={index}
                                                   className="text-[15px] 2xl:text-[13px] bg-zinc-700 hover:bg-zinc-900 text-zinc-300 rounded m-0.5">{tag}</Badge>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* 오버레이 */}
                            <div
                                className="absolute inset-0 hover:backdrop-blur-sm hover:bg-secondary/70 transition duration-500 rounded">
                                <div
                                    className="opacity-0 hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col items-center justify-center h-full space-y-5">
                                    <div
                                        className="text-[22px] 2xl:text-[23px] font-bold tracking-wide">{data.title}</div>

                                    <Button
                                        variant="default"
                                        size="lg"
                                        className="rounded"
                                        onClick={() => {
                                            openModal({
                                                name: ModalTypes.CONTENT_PROJECT_DETAIL,
                                                data: {
                                                    title: data.title,
                                                    description: data.description,
                                                    git: data.git,
                                                    url: data.url
                                                }
                                            })
                                        }}>
                                        상세 보기
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <Content_Project_Detail_Modal/>
        </>
    )
}

export default ContentProject;