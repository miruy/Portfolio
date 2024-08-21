import {FaCheck} from "react-icons/fa";
import {IoCloseSharp} from "react-icons/io5";
import {GoDotFill} from "react-icons/go";

const Content_Project_Portfolio_Improvement = () => {
    return (
        <div className="flex flex-col w-full h-fit bg-zinc-900 rounded p-3 sm:p-5">
            <div className="border-b border-zinc-600 text-foreground font-semibold tracking-wider pb-2">
                이슈 및 해결방법
            </div>

            <div className="tracking-wide">
                <div className="border-b border-zinc-600 py-5">
                    <div className="space-y-2">
                        <div className="flex items-center leading-7 font-semibold text-[15px] text-foreground">
                            <IoCloseSharp className="w-6 h-6 fill-red-500 mr-1"/>
                            빌드 과정에서 `window is not found` 에러 발생
                        </div>
                        <div className="text-[13px] mx-6 text-zinc-300">
                            CSR 환경에서 useEffect() 의존성 배열에 `window`객체를 포함하여 에러가 발생하였습니다.
                        </div>
                    </div>

                    <div className="mt-5 space-y-2">
                        <div className="flex items-center leading-7 font-semibold text-[15px] text-foreground">
                            <FaCheck className="w-4 h-4 ml-1 mr-2 fill-green-700"/>
                            해결방법
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center text-zinc-300">
                                <GoDotFill className="w-3 h-3 mx-1.5"/>
                                <span className="text-[13px] text-zinc-300">
                                    useEffect()의 의존성 배열에서 `window` 객체를 제거하고, `window` 관련 코드를 useEffect() 내부에서 typeof window !== `undefined` 조건문으로 감싸 에러를 방지하였습니다.
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