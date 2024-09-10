import {GoDotFill} from "react-icons/go";

const Content_Project_Uno_DevDirection = () => {
    return (
        <div className="flex flex-col w-full h-fit rounded p-3 sm:p-5">
            <div className="border-b border-zinc-400 text-foreground font-semibold tracking-wider pb-2">
                구현방향
            </div>

            <div className="pt-5 tracking-wide">
                <div className="flex items-start text-[15px] leading-7 mx-5 text-zinc-500">
                    <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                    <span className="ml-1.5 text-foreground">재사용 가능한 컴포넌트들을 모듈화하여 여러 곳에서 사용할 수 있도록 작업</span>
                </div>
                <div className="flex items-start text-[15px] leading-7 mx-5 text-zinc-500">
                    <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                    <span
                        className="ml-1.5 text-foreground">레이아웃, 모듈 등의 구조적 분리를 통해 코드 관리 및 유지보수의 효율화</span>
                </div>
                <div className="flex items-start text-[15px] leading-7 mx-5 text-zinc-500">
                    <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                    <span
                        className="ml-1.5 text-foreground">백엔드 API 연동 전 Mock 데이터를 활용하여 개발 프로세스를 가속화하고 기능 및 UI 테스트 진행</span>
                </div>
                <div className="flex items-start text-[15px] leading-7 mx-5 text-zinc-500">
                    <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                    <span
                        className="ml-1.5 text-foreground">백오피스 시스템의 특성을 고려하여 데스크탑 환경에 최적화된 방식으로 개발</span>
                </div>
            </div>
        </div>
    )
}

export default Content_Project_Uno_DevDirection;