import {FaCheck} from "react-icons/fa";
import {GoDotFill} from "react-icons/go";

const Content_Project_Memocode_Point = () => {
    return (
        <div className="flex flex-col w-full h-fit bg-zinc-900 rounded p-3 sm:p-5">
            <div className="border-b border-zinc-600 text-zinc-300 font-semibold tracking-wider pb-2">
                핵심 요소
            </div>

            <div className="pt-5 tracking-wide space-y-5 text-zinc-300">
                <div>
                    <div className="flex text-[14px] items-center font-semibold leading-7 text-zinc-300">
                        <FaCheck className="w-4 h-4 mr-1.5"/>
                        개발 및 배포 완료 후 현재 서비스 실행 중
                    </div>
                    <>
                        <div className="flex items-center text-[14px] leading-7 mx-5 text-zinc-300">
                            <GoDotFill className="w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground">프로덕션 환경 구축 및 배포</span>
                        </div>
                        <div className="text-[13px] leading-6 mx-6 text-zinc-300">
                            서비스 개발이 완료된 후, Git을 기반으로 CI/CD 파이프라인을 설정하여 코드 변경 사항이 Git 저장소에 푸시될 때마다 자동으로 빌드와 배포가 이루어지도록 하였으며, 이를 통해 빠르고 효율적인 배포가 가능하게 했습니다.
                        </div>
                    </>
                    <>
                        <div className="flex items-center text-[14px] leading-7 mx-5 text-zinc-300">
                            <GoDotFill className="w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground">서버 최적화 및 모니터링</span>
                        </div>
                        <div className="text-[13px] leading-6 mx-6 text-zinc-300">
                            서버 성능을 최적화하여 높은 트래픽을 처리할 수 있도록 하였으며, 실시간 모니터링 도구를 도입하여 서비스 가용성과 성능을 지속적으로 관리하고 있습니다. 이를 통해 사용자가 서비스에 접근할 때 안정적인 경험을 제공할 수 있게 되었습니다.
                        </div>
                    </>
                </div>
                <div>
                    <div className="flex text-[14px] items-center font-semibold leading-7 text-zinc-300">
                        <FaCheck className="w-4 h-4 mr-1.5"/>
                        seo 최적화 시킴
                    </div>
                    <>
                        <div className="flex items-center text-[14px] leading-7 mx-5 text-zinc-300">
                            <GoDotFill className="w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground"></span>
                        </div>
                        <div className="text-[13px] leading-6 mx-6 text-zinc-300">
                        </div>
                    </>
                </div>
                <div>
                    <div className="flex text-[14px] items-center font-semibold leading-7 text-zinc-300">
                        <FaCheck className="w-4 h-4 mr-1.5"/>
                        Google 애나니머스 적용
                    </div>
                    <>
                        <div className="flex items-center text-[14px] leading-7 mx-5 text-zinc-300">
                            <GoDotFill className="w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground"></span>
                        </div>
                        <div className="text-[13px] leading-6 mx-6 text-zinc-300">
                        </div>
                    </>
                </div>
            </div>
        </div>
    )
}

export default Content_Project_Memocode_Point;