import {FaCheck} from "react-icons/fa";
import {GoDot, GoDotFill} from "react-icons/go";

const Content_Project_Portfolio_KeyFeatures = () => {
    return (
        <div className="flex flex-col w-full h-fit bg-zinc-200 rounded p-3 sm:p-5">
            <div className="border-b border-zinc-400 text-foreground font-semibold tracking-wider pb-2">
                서비스 기능 및 특징
            </div>

            <div className="pt-5 tracking-wide leading-7 space-y-5">
                <div>
                    <div className="flex items-start leading-6 font-semibold text-[15px] text-foreground">
                        <FaCheck className="flex-shrink-0 mt-1 w-4 h-4 mr-1.5"/>
                        메인페이지
                    </div>
                    <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                        <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                        <span className="ml-1.5 text-foreground font-semibold">직접 작성한 CSS 코드와 TailwindCSS, 그리고 animate.css 라이브러리를 활용하여 다양한 애니메이션 효과를 구현하였고, 이를 통해 반응형 웹사이트의 특성을 강조하였습니다.</span>
                    </div>
                    <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                        <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                        <span className="ml-1.5 text-foreground font-semibold">제목과 소개글에 부드럽게 전환되는 애니메이션 효과를 적용하고, 저를 나타내는 문장을 간결하게 작성하여 효과적으로 전달할 수 있도록 구현했습니다.</span>
                    </div>
                    <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                        <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                        <span className="ml-1.5 text-foreground font-semibold">아래로 이동하는 버튼에 스크롤을 유도하는 시각적 요소를 함께 사용하여 사용자 편의성을 높였습니다.</span>
                    </div>
                </div>

                <div>
                    <div className="flex items-start leading-6 font-semibold text-[15px] text-foreground">
                        <FaCheck className="flex-shrink-0 mt-1 w-4 h-4 mr-1.5"/>
                        화면 오른쪽 상단에 배치된 GitHub와 개발 블로그 링크
                    </div>
                    <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                        GitHub와 개발 블로그 링크를 화면 오른쪽 상단에 고정 배치하여 접근성을 높였으며, 전체 포트폴리오의 깔끔한 디자인과 조화를 이루도록 아이콘만 표시하였습니다.
                    </div>
                </div>

                <div>
                    <div className="flex items-start leading-6 font-semibold text-[15px] text-foreground">
                        <FaCheck className="flex-shrink-0 mt-1 w-4 h-4 mr-1.5"/>
                        점프링크 반응형 탭 버튼
                    </div>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">디스플레이 환경에 따른 디자인 및 위치 변경</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            모바일과 웹 환경을 모두 고려하여 탭 버튼의 디자인과 위치를 다르게 배치하였습니다.
                        </div>
                    </>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">점프링크 기능 적용</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            점프링크 기능을 구현하여 사용자가 원하는 섹션으로 쉽게 이동할 수 있도록 최적화하였습니다.
                        </div>
                    </>
                </div>

                <div>
                    <div className="flex items-start leading-6 font-semibold text-[15px] text-foreground">
                        <FaCheck className="flex-shrink-0 mt-1 w-4 h-4 mr-1.5"/>
                        소개 탭 콘텐츠 (ABOUT ME)
                    </div>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span
                                className="ml-1.5 text-foreground font-semibold">교육 & 경험 (Education & Experience)</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            학력, 이수한 IT 관련 교육과정, 자격증, 경력사항을 카드 형태로 구성하고, 가로 캐러셀 기능을 적용하여 정보의 시각적 접근성을 높혀 사용자 경험을 향상시켰습니다.
                        </div>
                    </>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">사용 가능한 스킬 & 툴 (Skill & Tool)</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            실무에 바로 사용 가능한 스킬과 툴을 아이콘으로 시각화하여 직관적으로 인식할 수 있게 하였으며,
                            `경험 있음`부터 `경험 많음`까지를 3단계로 분류하고 색상으로 구분함으로써 각 기술 숙련도를 쉽게 파악할 수 있도록 구현하였습니다.
                        </div>
                    </>
                </div>

                <div>
                    <div className="flex items-start leading-6 font-semibold text-[15px] text-foreground">
                        <FaCheck className="flex-shrink-0 mt-1 w-4 h-4 mr-1.5"/>
                        프로젝트 탭 콘텐츠 (PROJECT)
                    </div>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">프로젝트 요약 뷰</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            짧은 영상을 썸네일로 게시하여 시각적으로 입체감을 더하고, 반응성을 높여 사용자의 궁금증을 유발할 수 있도록 구성하였습니다.
                        </div>
                    </>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">프로젝트 상세 뷰</span>
                        </div>

                        <>
                            <div className="text-[13px] mx-6 pb-1 text-foreground font-semibold">
                                <div className="flex items-start ml-5">
                                    <GoDot className="flex-shrink-0 mt-2 mr-1 text-foreground"/>
                                    <div>상단에 위치한 프로젝트 개요</div>
                                </div>
                            </div>
                            <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                                <div className="ml-9">
                                    개발 기간, 개발 인원, 기여도, 프로젝트에 사용된 라이브러리와 툴을 보기 쉽게 표로 정리하여 뷰 상단에 게시하였습니다.
                                </div>
                            </div>
                        </>

                        <>
                            <div className="text-[13px] mx-6 pb-1 text-foreground font-semibold">
                                <div className="flex items-start ml-5">
                                    <GoDot className="flex-shrink-0 mt-2 mr-1 text-foreground"/>
                                    <div>작업화면</div>
                                </div>
                            </div>
                            <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                                <div className="ml-9">
                                    실제 사용 중인 화면을 이미지로 게시하였고, 이미지 클릭 시 사용자가 직관적으로 이미지를 탐색할 수 있도록 캐러셀 기능을 활용해 큰 화면으로 표시되도록
                                    구현했습니다.
                                </div>
                            </div>
                        </>

                        <>
                            <div className="text-[13px] mx-6 pb-1 text-foreground font-semibold">
                                <div className="flex items-start ml-5">
                                    <GoDot className="flex-shrink-0 mt-2 mr-1 text-foreground"/>
                                    <div>작업화면_이미지 크게보기</div>
                                </div>
                            </div>
                            <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                                <div className="ml-9">
                                    큰 이미지 탐색 시, 모바일과 웹 환경을 고려하여 캐러셀의 디자인과 이동 방향을 각각 다르게 배치하여 반응형 요소를 적용하였습니다.
                                </div>
                            </div>
                        </>

                        <>
                            <div className="text-[13px] mx-6 pb-1 text-foreground font-semibold">
                                <div className="flex items-start ml-5">
                                    <GoDot className="flex-shrink-0 mt-2 mr-1 text-foreground"/>
                                    <div>주요 성과 및 기술적 중점 사항</div>
                                </div>
                            </div>
                            <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                                <div className="ml-9">
                                    프로젝트에서 중점적으로 구현한 기술적 성과와 최적화 요소들을 설명하며, 개발부터 배포, SEO 최적화, 그리고 사용자 경험 개선까지의 주요 작업들을
                                    강조한 내용입니다.
                                </div>
                            </div>
                        </>

                        <>
                            <div className="text-[13px] mx-6 pb-1 text-foreground font-semibold">
                                <div className="flex items-start ml-5">
                                    <GoDot className="flex-shrink-0 mt-2 mr-1 text-foreground"/>
                                    <div>제작동기</div>
                                </div>
                            </div>
                            <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                                <div className="ml-9">
                                    프로젝트를 개발하게 된 이유와 그 방향성을 설명하였습니다.
                                </div>
                            </div>
                        </>

                        <>
                            <div className="text-[13px] mx-6 pb-1 text-foreground font-semibold">
                                <div className="flex items-start ml-5">
                                    <GoDot className="flex-shrink-0 mt-2 mr-1 text-foreground"/>
                                    <div>서비스 기능 및 특징</div>
                                </div>
                            </div>
                            <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                                <div className="ml-9">
                                    프로젝트를 구성하는 요소들과 구현된 기능들을 간결하고 명확하게 정의하였습니다.
                                </div>
                            </div>
                        </>

                        <>
                            <div className="text-[13px] mx-6 pb-1 text-foreground font-semibold">
                                <div className="flex items-start ml-5">
                                    <GoDot className="flex-shrink-0 mt-2 mr-1 text-foreground"/>
                                    <div>이슈 및 해결방법</div>
                                </div>
                            </div>
                            <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                                <div className="ml-9">
                                    개발 과정에서 마주했던 주요 이슈들을 간략하게 정리하였고, 그에 대한 해결 방법을 단계별로 서술하였습니다.
                                </div>
                            </div>
                        </>
                    </>
                </div>

                {/* 추가 위치 */}
            </div>
        </div>
    )
}

export default Content_Project_Portfolio_KeyFeatures;