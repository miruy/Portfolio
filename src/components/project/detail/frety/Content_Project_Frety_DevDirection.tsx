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
                        className="ml-1.5 text-foreground">자바스크립트, Thymeleaf fragment 등의 구조적 분리를 통해 코드 관리 및 유지보수의 효율성 극대화하기</span>
                </div>
                <div className="flex items-start text-[15px] leading-7 mx-5 text-zinc-500">
                    <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                    <span
                        className="ml-1.5 text-foreground">`기타 악보 도메인`의 특성을 반영하여 사용자에게 실질적으로 필요한 기능 구현 및 사용편의성을 우선으로 하기</span>
                </div>
                <div className="flex items-start text-[15px] leading-7 mx-5 text-zinc-500">
                    <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                    <span
                        className="ml-1.5 text-foreground">다양한 기타 연주자의 연주 숙련도를 고려하여 코드이름과 코드 다이어그램을 함께 표시하기</span>
                </div>
            </div>
        </div>
    )
}

export default Content_Project_Frety_DevDirection;