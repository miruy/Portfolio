import {FaAsterisk, FaCheck} from "react-icons/fa";
import {GoDotFill} from "react-icons/go";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

const Content_Project_Farmfarm_KeyFeatures = () => {
    return (
        <Accordion type="single" collapsible className="w-full bg-zinc-900 rounded p-3 sm:p-5">
            <AccordionItem value="item-1">
                <AccordionTrigger>서비스 기능 및 특징</AccordionTrigger>
                <AccordionContent>
                    <>
                        <div className="flex items-start space-x-1 text-zinc-400 text-[13px]">
                            <FaAsterisk className="flex-shrink-0 mt-1.5 w-2 h-2"/>
                            <div>서비스 내 사용되는 모든 명칭 및 구조는 실제 시설원예(비닐하우스) 도메인을 반영하여 사용자가 쉽게 조회하고 관리할 수 있도록 구성하였습니다.</div>
                        </div>
                        <div className="flex items-start space-x-1 pb-5 text-zinc-400 text-[13px]">
                            <FaAsterisk className="flex-shrink-0 mt-1.5 w-2 h-2 text-zinc-400"/>
                            <div>
                                본 서비스는 실제 시설에서 사용 중인 관계로, 로그인 및 서비스 이용은 등록된 비닐하우스를 운영하는 농업인만 가능합니다. 이에 따라, 사이트에 대한 자세한
                                정보는 포트폴리오 내 작업 화면을 통해서만 확인할 수 있음을 양해 부탁드립니다.
                            </div>
                        </div>
                    </>

                    <div className="tracking-wide space-y-5">
                        <div>
                            <div className="flex items-start leading-6 font-semibold text-[15px] text-foreground">
                                <FaCheck className="flex-shrink-0 mt-1 w-4 h-4 mr-1.5"/>
                                대시보드 관리
                            </div>
                            <>
                                <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-300">
                                    <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                                    <span className="ml-1.5 text-foreground font-semibold">사용자 정의 대시보드</span>
                                </div>
                                <div className="text-[13px] mx-6 pb-1 text-zinc-300">
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
                                <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-300">
                                    <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                                    <span className="ml-1.5 text-foreground font-semibold">하우스 생성 및 동기화</span>
                                </div>
                                <div className="text-[13px] mx-6 pb-1 text-zinc-300">
                                    관리하고자 하는 하우스를 시스템 상에서 생성하고, 하우스 동기화 버튼을 눌러 실제 비닐하우스와 연동합니다.
                                </div>
                            </>
                            <>
                                <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-300">
                                    <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                                    <span className="ml-1.5 text-foreground font-semibold">하우스 동 생성 및 동기화</span>
                                </div>
                                <div className="text-[13px] mx-6 pb-1 text-zinc-300">
                                    히우스 내의 동을 시스템 상에서 생성하고, 하우스 동 동기화 버튼을 눌러 실제 하우스 동과 연동합니다.
                                </div>
                            </>
                            <>
                                <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-300">
                                    <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                                    <span className="ml-1.5 text-foreground font-semibold">하우스 동 센서 생성 및 동기화</span>
                                </div>
                                <div className="text-[13px] mx-6 pb-1 text-zinc-300">
                                    하우스 동의 온/습도 센서를 시스템 상에서 생성하고, 센서 동기화 버튼을 눌러 실제 온/습도 센서 기기와 연동합니다.
                                </div>
                            </>
                            <>
                                <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-300">
                                    <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                                    <span className="ml-1.5 text-foreground font-semibold">하우스 정보 조회</span>
                                </div>
                                <div className="text-[13px] mx-6 pb-1 text-zinc-300">
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
                                <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-300">
                                    <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                                    <span className="ml-1.5 text-foreground font-semibold">하우스 관리 조직 생성 및 조회</span>
                                </div>
                                <div className="text-[13px] mx-6 pb-1 text-zinc-300">
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
                                <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-300">
                                    <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                                    <span className="ml-1.5 text-foreground font-semibold">센서 기기 정보 조회</span>
                                </div>
                                <div className="text-[13px] mx-6 pb-1 text-zinc-300">
                                    각 농업 분야에 맞는 센서 모델을 관리자가 직접 시스템 내에 등록하며, 사용자는 관리자가 등록한 여러종류의 센서 기기 정보를 조회할 수 있습니다.
                                </div>
                            </>
                        </div>

                        {/* 추가 위치 */}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default Content_Project_Farmfarm_KeyFeatures;