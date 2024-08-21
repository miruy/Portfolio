import {FaCheck} from "react-icons/fa";
import {GoDotFill} from "react-icons/go";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

const Content_Project_Portfolio_KeyFeatures = () => {
    return (
        <Accordion type="single" collapsible className="w-full bg-zinc-900 rounded p-3 sm:p-5">
            <AccordionItem value="item-1">
                <AccordionTrigger>서비스 기능 및 특징</AccordionTrigger>
                <AccordionContent>
                    <div className="tracking-wide space-y-5">
                        <div>
                            <div className="flex items-center leading-7 font-semibold text-[15px] text-foreground">
                                <FaCheck className="w-4 h-4 mr-1.5"/>
                                센서 모델 관리
                            </div>
                            <>
                                <div className="flex items-center text-[14px] leading-7 mx-5 py-0.5 text-zinc-300">
                                    <GoDotFill className="w-3 h-3 mx-0.5"/>
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

export default Content_Project_Portfolio_KeyFeatures;