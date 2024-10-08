import {FaCheck} from "react-icons/fa";
import {IoCloseSharp} from "react-icons/io5";
import {GoDotFill} from "react-icons/go";

const Content_Project_Memocode_Improvement = () => {
    return (
        <div className="flex flex-col w-full h-fit bg-zinc-200 rounded p-3 sm:p-5">
            <div className="border-b border-zinc-400 text-foreground font-semibold tracking-wider pb-2">
                이슈 및 해결방법
            </div>

            <div className="tracking-wide">
                <div className="border-b border-zinc-400 py-5">
                    <div className="space-y-2">
                        <div className="flex items-start leading-6 font-semibold text-[15px] text-foreground">
                            <IoCloseSharp className="flex-shrink-0 mt-0.5 w-6 h-6 fill-red-500 mr-1"/>
                            Google Ads와의 연동을 통해 리마케팅을 시도하였으나 정책 위반으로 거절
                        </div>
                        <div className="text-[13px] mx-6 text-zinc-700">
                            구체적인 거절 이유는 게시자 콘텐츠가 없는 화면에 Google 게재 광고가 포함되었기 때문입니다.
                            특히, 가치가 낮은 콘텐츠나 아직 준비 중인 화면, 알림 또는 기타 행동 목적의 화면에 광고가 노출되는 것이 문제로 지적되었습니다.
                        </div>
                    </div>

                    <div className="mt-5 space-y-2">
                        <div className="flex items-start leading-6 font-semibold text-[15px] text-foreground">
                            <FaCheck className="flex-shrink-0 mt-1.5 w-4 h-4 ml-1 mr-2 fill-green-700"/>
                            해결방법
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-start text-zinc-500">
                                <GoDotFill className="flex-shrink-0 w-3 h-3 mx-1.5 mt-1"/>
                                <span className="text-[13px] text-zinc-700">
                                    Google Ads 정책에 따라 광고가 게재되는 페이지에 유의미한 콘텐츠를 추가하여 가치 있는 페이지로 개선될 수 있도록 지속적으로 개선중입니다.
                                </span>
                            </div>
                            <div className="flex items-start text-zinc-500">
                                <GoDotFill className="flex-shrink-0 w-3 h-3 mx-1.5 mt-1"/>
                                <span className="text-[13px] text-zinc-700">
                                    광고는 사용자에게 의미 있는 정보가 포함된 고품질 페이지에만 배치하고, 준비 중인 페이지나 알림 화면에서는 광고를 배제하여 사용자 경험을 최적화할 계획입니다.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b border-zinc-400 py-5">
                    <div className="space-y-2">
                        <div className="flex items-start leading-6 font-semibold text-[15px] text-foreground">
                            <IoCloseSharp className="flex-shrink-0 mt-0.5 w-6 h-6 fill-red-500 mr-1"/>
                            빌드 과정에서 `window is not found` / `router is not found` 에러 발생
                        </div>
                        <div className="text-[13px] mx-6 text-zinc-700">
                            SSR 환경에서 브라우저 전용 객체인 `window`, `router`가 사용되어 발생하였습니다.
                        </div>
                    </div>

                    <div className="mt-5 space-y-2">
                        <div className="flex items-start leading-6 font-semibold text-[15px] text-foreground">
                            <FaCheck className="flex-shrink-0 mt-1.5 w-4 h-4 ml-1 mr-2 fill-green-700"/>
                            해결방법
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-start text-zinc-500">
                                <GoDotFill className="flex-shrink-0 w-3 h-3 mx-1.5 mt-1"/>
                                <span className="text-[13px] text-zinc-700">
                                    클라이언트 사이드에서만 사용될 수 있도록 `typeof window !== ${"undefined"}` / `typeof router !== ${"undefined"}` 조건문을 사용하여 분리하였습니다.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 이슈 추가 위치 */}
            </div>
        </div>
    )
}

export default Content_Project_Memocode_Improvement;