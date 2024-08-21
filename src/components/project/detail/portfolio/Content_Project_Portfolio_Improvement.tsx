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
                            온/습도 데이터를 시각화하는 과정에서 정의되지 않은 데이터에 접근하여 에러 발생
                        </div>
                        <div className="text-[13px] mx-6 text-zinc-300">
                            ReChart 라이브러리를 사용하여 온/습도 센서 데이터를 차트로 시각화하는 과정에서,
                            Y축 값을 설정할 때 적절히 초기화되지 않은 상태의 객체에 접근하려 하여 차트가 정상적으로 나타나지 않는 에러가 발생하였습니다.
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
                                     데이터를 가져오는 과정에서 해당 데이터가 적절히 초기화 될 수 있도록, useEffect() 로직을 추가하여 초기화 과정을 재점검 하였습니다.
                                </span>
                            </div>
                            <div className="flex items-center text-zinc-300">
                                <GoDotFill className="w-3 h-3 mx-1.5"/>
                                <span className="text-[13px] text-zinc-300">
                                    데이터 초기화 후 적절히 할당된 데이터를 사용하기 위해 조건부 렌더링을 적용하였으며, 이를 통해 안전한 값을 사용하고 에러를 방지할 수 있었습니다.
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