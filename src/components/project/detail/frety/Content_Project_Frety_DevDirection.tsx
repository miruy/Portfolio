import {GoDotFill} from "react-icons/go";

const Content_Project_Frety_DevDirection = () => {
    return (
        <div className="flex flex-col w-full h-fit rounded p-3 sm:p-5">
            <div className="border-b border-zinc-400 text-foreground font-semibold tracking-wider pb-2">
                구현방향
            </div>

            <div className="pt-5 tracking-wide">
                <div className="flex items-start text-[15px] leading-7 mx-5 text-zinc-500">
                    <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                    <span
                        className="ml-1.5 text-foreground">레이아웃, 모듈 등의 구조적 분리를 통해 코드 관리 및 유지보수의 효율성 극대화하기</span>
                </div>
            </div>
        </div>
    )
}

export default Content_Project_Frety_DevDirection;