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
                            서비스 개발이 완료된 후, Git을 기반으로 CI/CD 파이프라인을 설정하여 코드 변경 사항이 Git 저장소에 푸시될 때마다 자동으로 빌드와 배포가 이루어지도록
                            하였으며, 이를 통해 빠르고 효율적인 배포가 가능하게 했습니다.
                        </div>
                    </>
                </div>
                <div>
                    <div className="flex text-[14px] items-center font-semibold leading-7 text-zinc-300">
                        <FaCheck className="w-4 h-4 mr-1.5"/>
                        하이브리드 렌더링 : SSR과 CSR의 혼합 사용
                    </div>
                    <>
                        <div className="flex items-center text-[14px] leading-7 mx-5 text-zinc-300">
                            <GoDotFill className="w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground">[SSR] 초기 로드 성능 최적화</span>
                        </div>
                        <div className="text-[13px] leading-6 mx-6 text-zinc-300">
                            서버에서 HTML을 미리 렌더링하는 SSR방식을 사용하여 빠른 페이지 로딩 및 SEO를 강화하였고, 서버에서 미리 준비된 데이터를 클라이언트로 전달하여 사용자가
                            정보를 읽기에 불편함이 없도록 하였습니다.
                        </div>
                    </>
                    <>
                        <div className="flex items-center text-[14px] leading-7 mx-5 text-zinc-300">
                            <GoDotFill className="w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground">[CSR] 동적 콘텐츠 처리</span>
                        </div>
                        <div className="text-[13px] leading-6 mx-6 text-zinc-300">
                            React를 통해 CSR을 구현하였고 이를 통해 사용자 인터랙션이 많은 페이지에서 빠른 응답성을 제공했습니다. 초기 로딩 후 필요한 데이터를 클라이언트 측에서 비동기적으로 로드하여 성능을 최적화했습니다.
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