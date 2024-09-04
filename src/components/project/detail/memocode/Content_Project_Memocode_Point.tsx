import {FaCheck} from "react-icons/fa";
import {GoDotFill} from "react-icons/go";

const Content_Project_Memocode_Point = () => {
    return (
        <div className="flex flex-col w-full h-fit bg-zinc-200 rounded p-3 sm:p-5">
            <div className="border-b border-zinc-400 text-foreground font-semibold tracking-wider pb-2">
                주요 성과 및 기술적 중점 사항
            </div>

            <div className="pt-5 tracking-wide space-y-5">
                <div>
                    <div className="flex items-start leading-6 font-semibold text-[15px] text-foreground">
                        <FaCheck className="flex-shrink-0 mt-1.5 w-4 h-4 mr-1.5"/>
                        개발 및 배포 완료 후 현재 서비스 운영 중
                    </div>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">프로덕션 환경 구축 및 배포</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            서비스 개발이 완료된 후, Git을 기반으로 CI/CD 파이프라인을 설정하여 코드 변경 사항이 Git 저장소에 푸시될 때마다 자동으로 빌드와 배포가 이루어지도록
                            하였으며, 이를 통해 빠르고 효율적인 배포가 가능하게 하였습니다.
                        </div>
                    </>
                </div>
                <div>
                    <div className="flex items-start leading-6 font-semibold text-[15px] text-foreground">
                        <FaCheck className="flex-shrink-0 mt-1.5 w-4 h-4 mr-1.5"/>
                        하이브리드 렌더링을 통한 사용자 경험 최적화
                    </div>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">[SSR] 초기 로드 성능 최적화</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            서버에서 HTML을 미리 렌더링하는 SSR방식을 사용하여 빠른 페이지 로딩 및 SEO를 강화하였고, 서버에서 미리 준비된 데이터를 클라이언트로 전달하여 사용자가
                            정보를 읽기에 불편함이 없도록 하였습니다.
                        </div>
                    </>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">[CSR] 동적 콘텐츠 처리</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            React를 통해 CSR을 구현하였고 이를 통해 사용자 인터랙션이 많은 페이지에서 빠른 응답성을 제공했습니다. 초기 로딩 후 필요한 데이터를 클라이언트 측에서
                            비동기적으로 로드하여 성능을 최적화하였습니다.
                        </div>
                    </>
                </div>
                <div>
                    <div className="flex items-start leading-6 font-semibold text-[15px] text-foreground">
                        <FaCheck className="flex-shrink-0 mt-1.5 w-4 h-4 mr-1.5"/>
                        SEO 최적화
                    </div>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">메타 태그 및 구조화된 데이터 적용</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            각 페이지에 적절한 메타 태그를 추가하고, Open Graph를 포함하여 콘텐츠의 검색 엔진 노출을 극대화하였습니다.
                            또, 구조화된 데이터를 활용하여 검색 엔진이 페이지 콘텐츠를 더 잘 이해하고 인덱싱할 수 있도록 최적화하였습니다.
                        </div>
                    </>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">페이지 로딩 속도 개선</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            이미지 최적화, 코드 압축, 그리고 캐싱 전략을 적용했습니다. 이로 인해 페이지 로딩 시간이 단축되어 검색 순위와 사용자 경험이 향상되었습니다.
                        </div>
                    </>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">모바일 친화성 강화</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            모바일 기기에서의 접근성을 높이기 위해 반응형 웹 디자인을 채택하고, 페이지 속도 및 사용자 인터페이스(UI)를 모바일 환경에 맞게 최적화하였습니다.
                        </div>
                    </>
                </div>
                <div>
                    <div className="flex items-start leading-6 font-semibold text-[15px] text-foreground">
                        <FaCheck className="flex-shrink-0 mt-1.5 w-4 h-4 mr-1.5"/>
                        Google 애널리틱스 적용
                    </div>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">트래픽 분석 및 사용자 행동 추적</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            페이지뷰, 세션 지속 시간, 이탈률 등의 주요 지표를 실시간으로 모니터링하고 분석할 수 있게 되었고, 이를 통해 부족한 부분을 객관적으로 파악하고, 개선시킬 수
                            있도록 하였습니다.
                        </div>
                    </>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">사용자 이벤트 추적을 통한 사용자 경험 개선</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            사용자 인터랙션에 대한 깊이 있는 분석을 위해, 특정 행동(예: 버튼 클릭, 양식 제출 등)을 추적하는 이벤트 트래킹을 적용하였습니다.
                        </div>
                    </>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">Google Ads와의 연동을 위한 지속적인 리팩토링</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            마케팅 캠페인의 효율성을 높이고, 맞춤형 광고를 통해 재방문율과 전환율을 개선하는 데 기여하고자 Google Ads 연동을 시도하고 있습니다.
                        </div>
                    </>
                </div>
            </div>
        </div>
    )
}

export default Content_Project_Memocode_Point;