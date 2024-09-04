import {FaCheck} from "react-icons/fa";
import {IoCloseSharp} from "react-icons/io5";
import {GoDotFill} from "react-icons/go";

const Content_Project_Portfolio_Improvement = () => {
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
                            빌드 과정에서 `window is not found` 에러 발생
                        </div>
                        <div className="text-[13px] mx-6 text-zinc-700">
                            CSR 환경에서 useEffect() 의존성 배열에 `window`객체를 포함하여 에러가 발생하였습니다.
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
                                    useEffect()의 의존성 배열에서 `window` 객체를 제거하고, `window` 관련 코드를 useEffect() 내부에서 typeof window !== `undefined` 조건문으로 감싸 에러를 방지하였습니다.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b border-zinc-400 py-5">
                    <div className="space-y-2">
                        <div className="flex items-start leading-6 font-semibold text-[15px] text-foreground">
                            <IoCloseSharp className="flex-shrink-0 mt-0.5 w-6 h-6 fill-red-500 mr-1"/>
                            ABOUT ME 섹션의 `Education & Experience` 및 `Skill & Tool` 항목에 대한 가로 캐러셀 기능을 구현하는 과정에서, 화면의 너비에
                            따라 구성 요소들이 실시간으로 재배치 되지 않아 레이아웃이 깨지는 에러가 발생하였습니다.
                        </div>
                        <div className="text-[13px] mx-6 text-zinc-700">
                            화면 너비가 실시간으로 변경되거나 다양한 디스플레이 크기의 기기로 접속할 때, UI 요소들이 동적으로 반응하여 의도된 위치에 정렬되어야 하지만, 이러한 반응이 제대로
                            이루어지지 않아 레이아웃이 왜곡되는 문제가 발생하였습니다.
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
                                    useEffect()와 ResizeObserver를 활용하여 특정 요소의 크기 변화를 실시간으로 감지하고,
                                    이를 useState로 관리하여 동적으로 컴포넌트의 너비를 업데이트하였습니다.
                                    이를 통해 요소의 크기 변화에 즉각적으로 대응하여 UI가 올바르게 정렬되도록 구현하였습니다.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 추가 위치 */}
            </div>
        </div>
    )
}

export default Content_Project_Portfolio_Improvement;