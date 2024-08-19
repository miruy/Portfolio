import {FaCheck} from "react-icons/fa";

const Content_Project_Memocode_Improvement = () => {
    return (
        <div className="flex flex-col w-full h-fit bg-zinc-900 rounded p-3 sm:p-5">
            <div className="border-b border-zinc-600 text-zinc-300 font-semibold tracking-wider pb-2">
                이슈 및 개선사항
            </div>

            <div className="pt-5 tracking-wide space-y-5">
                <div>
                    <div className="flex text-[14px] items-center font-semibold leading-7 text-zinc-300">
                        <FaCheck className="w-4 h-4 mr-1.5"/>
                        모달창 키보드 단축키 기능
                    </div>
                    <div className="text-[13px] leading-7 mx-6 text-zinc-300">
                        사용자로부터 받은 피드백을 반영하여, 모달 창의 열기 및 닫기 기능에 단축키를 추가 적용할 예정입니다.
                        이를 통해 단축키를 사용해 모달 창을 보다 효율적으로 닫을 수 있도록 개선할 계획입니다.
                    </div>
                </div>
                <div>
                    <div className="flex text-[14px] items-center font-semibold leading-7 text-zinc-300">
                        <FaCheck className="w-4 h-4 mr-1.5"/>
                        메모 작성 시 썸네일 이미지 등록 기능
                    </div>
                    <div className="text-[13px] leading-7 mx-6 text-zinc-300">
                        메모 작성 시 썸네일 이미지를 추가로 등록할 수 있는 기능을 구현할 예정입니다.
                        이를 통해 사용자는 각 메모에 시각적인 요소를 더하여, 내용을 보다 직관적으로 파악하고 관리할 수 있게 될 것입니다.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content_Project_Memocode_Improvement;