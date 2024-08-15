import {CiStickyNote} from "react-icons/ci";
import {MdFormatBold, MdOutlineQuestionAnswer} from "react-icons/md";
import {FaA, FaQ} from "react-icons/fa6";
import {FaCheck} from "react-icons/fa";
import {LuDot} from "react-icons/lu";
import {GoDotFill} from "react-icons/go";

const Content_Project_Memocode_KeyFeatures = () => {
    return (
        <div className="flex flex-col w-full h-fit bg-zinc-900 rounded p-3 sm:p-5">
            <div className="border-b border-zinc-600 text-zinc-300 font-semibold tracking-wider pb-2">
                주요기능 및 특징
            </div>

            <div className="pt-5 tracking-wide space-y-5">
                <div>
                    <div className="flex text-[14px] items-center font-semibold leading-7">
                        <FaCheck className="w-4 h-4 mr-1.5"/>
                        메모 관련
                    </div>
                    <div className="flex items-center text-[14px] leading-7 mx-5">
                        <GoDotFill className="w-3 h-3 mx-0.5"/>
                        <span className="ml-1.5">메모 공개 / 비공개 기능</span>
                    </div>
                    <div className="text-[13px] leading-7 mx-6">
                        저는 평소 중요한 아이디어나 정보를 놓치지 않고 기억하기 위해 메모를 자주하는 습관이 있습니다.
                    </div>
                </div>

                <div>
                    <div className="flex text-[14px] items-center font-semibold leading-7">
                        <FaCheck className="w-4 h-4 mr-1.5"/>
                        블로그 관련
                    </div>
                    <div className="flex items-center text-[14px] leading-7 mx-5">
                        <GoDotFill className="w-3 h-3 mx-0.5"/>
                        <span className="ml-1.5">메모 공개 / 비공개 기능</span>
                    </div>
                    <div className="text-[13px] leading-7 mx-6">
                        저는 평소 중요한 아이디어나 정보를 놓치지 않고 기억하기 위해 메모를 자주하는 습관이 있습니다.
                    </div>
                </div>

                <div>
                    <div className="flex text-[14px] items-center font-semibold leading-7">
                        <FaCheck className="w-4 h-4 mr-1.5"/>
                        <div className="flex items-center text-[13px]">
                            <FaQ className="w-3 h-3 mr-0.5"/>&<FaA className="w-3 h-3 ml-0.5"/>
                        </div>
                        관련
                    </div>
                    <div className="flex items-center text-[14px] leading-7 mx-5">
                        <GoDotFill className="w-3 h-3 mx-0.5"/>
                        <span className="ml-1.5">메모 공개 / 비공개 기능</span>
                    </div>
                    <div className="text-[13px] leading-7 mx-6">
                        저는 평소 중요한 아이디어나 정보를 놓치지 않고 기억하기 위해 메모를 자주하는 습관이 있습니다.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content_Project_Memocode_KeyFeatures;