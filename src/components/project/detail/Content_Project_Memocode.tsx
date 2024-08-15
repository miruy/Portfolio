import memocode from "@/data/memocode";
import projectPreview from "@/data/content_Project_Preview";
import Content_Project_Memocode_DevReason from "@/components/project/detail/Content_Project_Memocode_DevReason";
import Content_Project_Detail_Info from "@/components/project/Content_Project_Detail_Info";
import Content_Project_Memocode_KeyFeatures from "@/components/project/detail/Content_Project_Memocode_KeyFeatures";

const Content_Project_Memocode = () => {

    const data = memocode;
    const videoSrc = projectPreview[0].src;

    return (
        <>
            <Content_Project_Detail_Info data={data}/>

            <div className="flex flex-col w-full h-full my-5 py-5">
                <div className="flex-1 flex flex-col space-y-10 items-center">
                    <div className="w-full h-[240px] sm:w-[600px] sm:h-[350px] scale-100"
                         style={{aspectRatio: '3 / 4'}}>
                        <video
                            src={videoSrc}
                            className="w-full h-full object-fill rounded"
                            autoPlay
                            playsInline
                            // controls - 영상컨트롤바
                            muted
                            loop
                        />
                    </div>

                    {/* 제작 동기 */}
                    <Content_Project_Memocode_DevReason/>

                    {/* 주요 기능 및 특징 */}
                    <Content_Project_Memocode_KeyFeatures/>

                    {/*  트러블슈팅 또는 개선 시킬점 */}
                    <div className="flex flex-col w-full h-96 bg-zinc-950/70 rounded p-3 sm:p-5">
                        <div className="border-b border-zinc-600 text-zinc-300 font-semibold tracking-wider pb-2">
                            트러블슈팅 또는 개선 시킬점
                        </div>
                    </div>

                    <div className="flex flex-col w-full h-96 rounded">작업화면</div>
                </div>
            </div>
        </>
    )
}

export default Content_Project_Memocode;