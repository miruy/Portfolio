import {FaCheck} from "react-icons/fa";
import {GoDotFill} from "react-icons/go";

const Content_Project_Portfolio_Point = () => {
    return (
        <div className="flex flex-col w-full h-fit bg-zinc-900 rounded p-3 sm:p-5">
            <div className="border-b border-zinc-600 text-foreground font-semibold tracking-wider pb-2">
                중점 요소
            </div>

            <div className="pt-5 tracking-wide space-y-5 text-zinc-300">
                <div>
                    <div className="flex items-center leading-7 font-semibold text-[15px] text-foreground">
                        <FaCheck className="w-4 h-4 mr-1.5"/>
                        개발 및 배포 완료 후 현재 서비스 운영 중
                    </div>
                    <>
                        <div className="flex items-center text-[14px] leading-7 mx-5 py-0.5 text-zinc-300">
                            <GoDotFill className="w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">프로덕션 환경 구축 및 배포</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-300">
                            서비스 개발이 완료된 후, Git을 기반으로 CI/CD 파이프라인을 설정하여 코드 변경 사항이 Git 저장소에 푸시될 때마다 자동으로 빌드와 배포가 이루어지도록
                            하였으며, 이를 통해 빠르고 효율적인 배포가 가능하게 하였습니다.
                        </div>
                    </>
                </div>

                {/* 추가 위치 */}
            </div>
        </div>
    )
}

export default Content_Project_Portfolio_Point;