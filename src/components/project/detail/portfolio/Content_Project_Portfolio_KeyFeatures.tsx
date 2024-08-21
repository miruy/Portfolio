import {FaCheck} from "react-icons/fa";
import {GoDotFill} from "react-icons/go";

const Content_Project_Portfolio_KeyFeatures = () => {
    return (
        <div className="flex flex-col w-full h-fit bg-zinc-900 rounded p-3 sm:p-5">
            <div className="border-b border-zinc-600 text-foreground font-semibold tracking-wider pb-2">
                서비스 기능 및 특징
            </div>

            <div className="pt-5 tracking-wide leading-7 text-zinc-300 space-y-5">
                <div>
                    <div className="flex items-center leading-7 font-semibold text-[15px] text-foreground">
                        <FaCheck className="w-4 h-4 mr-1.5"/>
                        메인페이지
                    </div>
                    <div className="flex items-center text-[14px] leading-7 mx-5 py-0.5 text-zinc-300">
                        <GoDotFill className="w-3 h-3 mx-0.5"/>
                        <span className="ml-1.5 text-foreground font-semibold">역동적인 애니메이션을 배경으로 사용하여 반응형 웹사이트의 특성을 강조하였습니다.</span>
                    </div>
                    <div className="flex items-center text-[14px] leading-7 mx-5 py-0.5 text-zinc-300">
                        <GoDotFill className="w-3 h-3 mx-0.5"/>
                        <span className="ml-1.5 text-foreground font-semibold">배경의 큰 움직임을 고려해 소개 글은 짧고 간결하게 작성하여 저를 효과적으로 표현할 수 있도록 했습니다.</span>
                    </div>
                    <div className="flex items-center text-[14px] leading-7 mx-5 py-0.5 text-zinc-300">
                        <GoDotFill className="w-3 h-3 mx-0.5"/>
                        <span className="ml-1.5 text-foreground font-semibold">아래로 이동하는 버튼에 스크롤을 유도하는 시각적 요소를 함께 사용하여 사용자 편의성을 높였습니다.</span>
                    </div>
                </div>

                <div>
                    <div className="flex items-center leading-7 font-semibold text-[15px] text-foreground">
                        <FaCheck className="w-4 h-4 mr-1.5"/>
                        점프링크 반응형 탭 버튼
                    </div>
                    <>
                        <div className="flex items-center text-[14px] leading-7 mx-5 py-0.5 text-zinc-300">
                            <GoDotFill className="w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">디스플레이 환경에 따른 디자인 및 위치 변경</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-300">
                            모바일과 웹 환경을 모두 고려하여 탭 버튼의 디자인과 위치를 다르게 배치하였습니다.
                        </div>
                    </>
                    <>
                        <div className="flex items-center text-[14px] leading-7 mx-5 py-0.5 text-zinc-300">
                            <GoDotFill className="w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">점프링크 기능 적용</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-300">
                            점프링크 기능을 구현하여 사용자가 원하는 섹션으로 쉽게 이동할 수 있도록 최적화하였습니다.
                        </div>
                    </>
                </div>

                <div>
                    <div className="flex items-center leading-7 font-semibold text-[15px] text-foreground">
                        <FaCheck className="w-4 h-4 mr-1.5"/>
                        소개 탭 콘텐츠 (About)
                    </div>
                    <>
                        <div className="flex items-center text-[14px] leading-7 mx-5 py-0.5 text-zinc-300">
                            <GoDotFill className="w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold"></span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-300">
                        </div>
                    </>
                    <>
                        <div className="flex items-center text-[14px] leading-7 mx-5 py-0.5 text-zinc-300">
                            <GoDotFill className="w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold"></span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-300">
                        </div>
                    </>
                </div>

                <div>
                    <div className="flex items-center leading-7 font-semibold text-[15px] text-foreground">
                        <FaCheck className="w-4 h-4 mr-1.5"/>
                        프로젝트 탭 콘텐츠 (Project)
                    </div>
                    <>
                        <div className="flex items-center text-[14px] leading-7 mx-5 py-0.5 text-zinc-300">
                            <GoDotFill className="w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold"></span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-300">
                        </div>
                    </>
                    <>
                        <div className="flex items-center text-[14px] leading-7 mx-5 py-0.5 text-zinc-300">
                            <GoDotFill className="w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold"></span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-300">
                        </div>
                    </>
                </div>

                {/* 추가 위치 */}
            </div>
        </div>
    )
}

export default Content_Project_Portfolio_KeyFeatures;