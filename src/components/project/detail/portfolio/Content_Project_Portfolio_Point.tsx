import {FaCheck} from "react-icons/fa";
import {GoDotFill} from "react-icons/go";

const Content_Project_Portfolio_Point = () => {
    return (
        <div className="flex flex-col w-full h-fit bg-zinc-900 rounded p-3 sm:p-5">
            <div className="border-b border-zinc-600 text-foreground font-semibold tracking-wider pb-2">
                주요 성과 및 기술적 중점 사항
            </div>

            <div className="pt-5 tracking-wide space-y-5 text-zinc-300">
                <div>
                    <div className="flex items-start leading-6 font-semibold text-[15px] text-foreground">
                        <FaCheck className="flex-shrink-0 mt-1 w-4 h-4 mr-1.5"/>
                        지속적인 포트폴리오 개선 작업
                    </div>
                    <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-300">
                        <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                        <span className="ml-1.5 text-foreground font-semibold">포트폴리오에 대한 피드백을 수렴하고, 적극적으로 개선 사항을 반영하여 지속적으로 발전시키고 있습니다. </span>
                    </div>
                </div>

                {/* 추가 위치 */}
            </div>
        </div>
    )
}

export default Content_Project_Portfolio_Point;