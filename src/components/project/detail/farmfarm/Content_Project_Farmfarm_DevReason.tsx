import {FaA, FaQ} from "react-icons/fa6";
import {FaCheck} from "react-icons/fa";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

const Content_Project_Farmfarm_DevReason = () => {
    return (
        <Accordion type="single" collapsible className="w-full bg-zinc-900 rounded p-3 sm:p-5">
            <AccordionItem value="item-1">
                <AccordionTrigger>제작동기</AccordionTrigger>
                <AccordionContent>
                    <div className="tracking-wide space-y-5 text-zinc-300">
                        <div>
                            <span className="text-[14px]">메모코드는 제가 개발을 하면서 </span>
                            <span className="font-semibold text-[15px] text-foreground">자주 사용하는 것들을 한 곳에 </span>
                            <span className="text-[14px]">모아서 사용하면 </span>
                            <span className="font-semibold text-[15px] text-foreground">공간적으로, 시간적으로 </span>
                            <span className="text-[14px]">더욱 편리할 것 같다는 생각에 개발하게 되었습니다.</span>
                        </div>

                        <div>
                            <div className="flex text-[14px] items-center font-semibold leading-7">
                                <FaCheck className="w-4 h-4 mr-1.5"/>
                                메모
                            </div>
                            <div className="text-[13px]">
                                저는 평소 중요한 아이디어나 정보를 놓치지 않고 기억하기 위해 메모를 자주하는 습관이 있습니다.
                            </div>
                            <div className="text-[13px]">메모하는 습관은 개발과정에서도 큰 도움이 되었습니다.</div>
                            <div className="text-[13px]">
                                메모를 통해 생각의 흐름을 정리하고, 더 나아가 효율적이고, 가독성 좋은 코드를 작성할 수 있었습니다.
                            </div>
                        </div>

                        <div>
                            <div className="flex text-[14px] items-center font-semibold leading-7">
                                <FaCheck className="w-4 h-4 mr-1.5"/>
                                블로그 관리
                            </div>
                            <div className="text-[13px]">
                                블로그를 통해 저만의 학습 과정을 기록하고, 지식을 정리하며, 다른 개발자들과 경험을 공유하기 위해 블로그를 하고 있습니다.
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center font-semibold leading-7">
                                <FaCheck className="w-4 h-4 mr-1.5"/>
                                <div className="flex items-center text-[13px]">
                                    <FaQ className="w-3.5 h-3.5 mr-0.5"/>&<FaA className="w-3.5 h-3.5 ml-0.5"/>
                                </div>
                            </div>
                            <div className="text-[13px]">
                                저는 개발을 하는 과정에서 문제가 발생하거나 궁금한 점이 생기면 구글링을 통해 어려움을 해결하고 있습니다.
                            </div>
                            <div className="text-[13px]">
                                유명한 개발자 커뮤니티 사이트나 질문/답변 공유 사이트 등 여러 사이트를 참고하며 개발을 하다보니 브라우저의 탭이 점점 늘어가
                                사용하지 않는 탭을 지워가며 작업하는 것에 불편함을 느꼈습니다.
                            </div>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default Content_Project_Farmfarm_DevReason;