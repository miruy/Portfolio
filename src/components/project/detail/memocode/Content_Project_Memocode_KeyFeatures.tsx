import {FaA, FaQ} from "react-icons/fa6";
import {FaCheck} from "react-icons/fa";
import {GoDotFill} from "react-icons/go";

const Content_Project_Memocode_KeyFeatures = () => {
    return (
        <div className="flex flex-col w-full h-fit bg-zinc-200 rounded p-3 sm:p-5">
            <div className="border-b border-zinc-400 text-foreground font-semibold tracking-wider pb-2">
                제작동기
            </div>

            <div className="tracking-wide pt-5 space-y-5">
                <div>
                    <div className="flex items-center leading-6 font-semibold text-[15px] text-foreground">
                        <FaCheck className="w-4 h-4 mr-1.5"/>
                        메모 관리 (등록, 수정, 검색, 삭제)
                    </div>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">메모 공개 / 비공개 기능</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            작성한 메모를 공개 여부 설정에 따라
                            <span className="font-bold text-foreground"> 블로그 게시글로 전환 </span>
                            또는
                            <span className="font-bold text-foreground"> 작성자만 열람/수정 가능한 메모장 </span>
                            으로 이용 할 수 있습니다.
                        </div>
                    </>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">메모 보안 기능</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            작성한 메모의 보안을 활성화하면 영구적으로 해당 메모를 블로그에 게시 및 공개할 수 없도록 하여
                            <span className="font-bold text-foreground"> 노출되면 안되는 중요한 정보를 안전하게 관리 </span>
                            할 수 있습니다.
                        </div>
                    </>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">메모 버전 관리 기능</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            메모의 내용을
                            <span className="font-bold text-foreground"> 보존 </span>
                            하고 싶거나, 변경해도
                            <span className="font-bold text-foreground"> 이전 내용이 유실되지 않게 보관 </span>
                            하고 싶을 경우 해당 메모의 버전을 생성하여
                            <span className="font-bold text-foreground"> `캡쳐` </span>
                            하듯이 저장된 이전 내용의 메모를 버전별로 열람할 수 있습니다.
                        </div>
                    </>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">메모 즐겨찾기 기능</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            자주 열람하거나, 자주 수정하는 메모를 즐겨찾기로 추가해 쉽게 메모를 찾아 관리할 수 있습니다.
                        </div>
                    </>
                </div>

                <div>
                    <div className="flex items-center leading-6 font-semibold text-[15px] text-foreground">
                        <FaCheck className="w-4 h-4 mr-1.5"/>
                        블로그 관리
                    </div>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">게시글 검색 기능</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            제목, 머리글, 내용을 검색 키워드로 사용하여 게시글을 빠르게 검색할 수 있습니다.
                        </div>
                    </>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">게시글 댓글 / 대댓글 작성, 수정, 삭제 기능</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            블로그 게시글의 댓글과 대댓글을 작성, 수정, 삭제 할 수 있습니다.
                        </div>
                    </>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">내 블로그 기능</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            내 블로그 페이지에서 사용자가 게시한 게시글을 한눈에 볼 수 있습니다.
                        </div>
                    </>
                </div>

                <div>
                    <div className="flex items-center leading-6 font-semibold text-[15px] text-foreground">
                        <FaCheck className="w-4 h-4 mr-1.5"/>
                        <div className="flex items-center text-[13px]">
                            <FaQ className="w-3 h-3 mr-0.5"/>&<FaA className="w-3 h-3 ml-0.5"/>
                        </div>
                        관리 (등록, 수정, 검색, 삭제)
                    </div>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">질문 검색 기능</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            제목, 내용, 태그를 검색 키워드로 사용하여 질문을 빠르게 검색할 수 있습니다.
                        </div>
                    </>
                    <>
                        <div className="flex items-start text-[14px] leading-7 mx-5 py-0.5 text-zinc-500">
                            <GoDotFill className="flex-shrink-0 mt-2 w-3 h-3 mx-0.5"/>
                            <span className="ml-1.5 text-foreground font-semibold">답변 및 대댓글 작성, 수정, 삭제 기능</span>
                        </div>
                        <div className="text-[13px] mx-6 pb-1 text-zinc-700">
                            질문의 답변과 대댓글을 작성, 수정, 삭제 할 수 있습니다.
                        </div>
                    </>
                </div>
            </div>
        </div>
    )
}

export default Content_Project_Memocode_KeyFeatures;