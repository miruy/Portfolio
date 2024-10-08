import {FaCheck} from "react-icons/fa";
import {GoDotFill} from "react-icons/go";

const Content_Project_Farmfarm_KeyFeatures = () => {
    return (
        <div className="flex flex-col w-full h-fit bg-zinc-200 rounded p-3 sm:p-5">
            <div className="border-b border-zinc-400 text-foreground font-semibold tracking-wider pb-2">
                서비스 기능 및 특징
            </div>

            <div className="tracking-wide pt-5 space-y-5">
                <div>
                    <div className="flex items-start leading-6 font-semibold text-[15px] text-foreground">
                        <FaCheck className="flex-shrink-0 mt-1 w-4 h-4 mr-1.5"/>
                        대시보드 관리
                    </div>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">사용자 정의 대시보드</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            대시보드를 사용자 정의하여
                            <span className="font-bold text-foreground"> 개별 요구에 맞게 최적화</span>
                            할 수 있습니다. 이를 통해 효율적이고 편리한 시설원예 관리를 가능하게 합니다.
                        </div>
                    </>
                </div>

                <div>
                    <div className="flex items-start leading-6 font-semibold text-[15px] text-foreground">
                        <FaCheck className="flex-shrink-0 mt-1 w-4 h-4 mr-1.5"/>
                        하우스 관리
                    </div>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">하우스 생성 및 동기화</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            관리하고자 하는 하우스를 시스템 상에서 생성하고, 하우스 동기화 버튼을 눌러 실제 비닐하우스와 연동합니다.
                        </div>
                    </>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">하우스 동 생성 및 동기화</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            히우스 내의 동을 시스템 상에서 생성하고, 하우스 동 동기화 버튼을 눌러 실제 하우스 동과 연동합니다.
                        </div>
                    </>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">하우스 동 센서 생성 및 동기화</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            하우스 동의 온/습도 센서를 시스템 상에서 생성하고, 센서 동기화 버튼을 눌러 실제 온/습도 센서 기기와 연동합니다.
                        </div>
                    </>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">하우스 정보 조회</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            하우스 이름, 생성일, 온/습도 데이터, 센서모델을 조회할 수 있습니다.
                        </div>
                    </>
                </div>

                <div>
                    <div className="flex items-start leading-6 font-semibold text-[15px] text-foreground">
                        <FaCheck className="flex-shrink-0 mt-1 w-4 h-4 mr-1.5"/>
                        조직 관리
                    </div>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">하우스 관리 조직 생성 및 조회</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            하우스를 관리하는 구성원들을 조직으로 생성하여 조회할 수 있습니다.
                        </div>
                    </>
                </div>

                <div>
                    <div className="flex items-start leading-7 font-semibold text-[15px] text-foreground">
                        <FaCheck className="flex-shrink-0 mt-1 w-4 h-4 mr-1.5"/>
                        센서 모델 관리
                    </div>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">센서 기기 정보 조회</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            각 농업 분야에 맞는 센서 모델을 관리자가 직접 시스템 내에 등록하며, 사용자는 관리자가 등록한 여러종류의 센서 기기 정보를 조회할 수 있습니다.
                        </div>
                    </>
                </div>

                {/* 추가 위치 */}
            </div>
        </div>
    )
}

export default Content_Project_Farmfarm_KeyFeatures;