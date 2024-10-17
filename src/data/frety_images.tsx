import {Image} from "@/model/image";
import {GoDot, GoDotFill} from "react-icons/go";

const frety_images: Image[] = [
    {
        id: 1, src: "/image/frety/frety_main1.png", title: "메인페이지",
        descriptions: null
    },
    {
        id: 2, src: "/image/frety/frety_signup1.png", title: "회원가입",
        descriptions:
            <div className="space-y-3">
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">SpringSecurity를 사용하여 비밀번호 해시 처리 및 보안 강황</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="break-all ml-1.5 text-[14px]">비밀번호와 비밀번호 확인이 일치하는지 검증 후 회원가입 진행</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="break-all ml-1.5 text-[14px]">SpringBoot Vaildation을 적용하여 유효성 검증</span>
                </div>
            </div>

        // <div className="space-y-3">
        //     <div className="space-y-2">
        //         <div className="flex items-start text-[15px]">
        //             <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
        //             <span className="break-all ml-1.5 text-[14px]">질문 작성</span>
        //         </div>
        //
        //         <div className="flex items-start ml-5">
        //             <GoDot className="flex-shrink-0 mt-1.5 w-3 h-3"/>
        //             <span className="break-all ml-1.5 text-[14px]">제목과 내용을 입력하지 않으면 경고 메시지를 표시하고, 유효한 입력이 있을 경우 질문 등록</span>
        //         </div>
        //         <div className="flex items-start ml-5">
        //             <GoDot className="flex-shrink-0 mt-1.5 w-3 h-3"/>
        //             <span
        //                 className="break-all ml-1.5 text-[14px]">MonacoEditor를 커스텀하여 자주 사용하는 마크다운 문법을 버튼식으로 구현</span>
        //         </div>
        //         <div className="flex items-start ml-5">
        //             <GoDot className="flex-shrink-0 mt-1.5 w-3 h-3"/>
        //             <span
        //                 className="break-all ml-1.5 text-[14px]">MonacoEditor에 유효한 입력이 있을 경우 미리보기 버튼이 자동 활성화되고, 실시간으로 미리보기 가능</span>
        //         </div>
        //         <div className="flex items-start ml-5">
        //             <GoDot className="flex-shrink-0 mt-1.5 w-3 h-3"/>
        //             <span
        //                 className="break-all ml-1.5 text-[14px]">ResizeHandle 컴포넌트를 구현하여 MonacoEditor의 높이를 사용자가 실시간으로 조절할 수 있도록 구현</span>
        //         </div>
        //         <div className="flex items-start ml-5">
        //             <GoDot className="flex-shrink-0 mt-1.5 w-3 h-3"/>
        //             <span
        //                 className="break-all ml-1.5 text-[14px]">질문 작성 중 취소 버튼을 클릭 할 경우, 모달을 통해 작성 중인 내용 및 취소 여부를 확인</span>
        //         </div>
        //     </div>
        // </div>
    },
    {
        id: 3, src: "/image/frety/frety_signup2.png", title: "회원가입_에러",
        descriptions: null
    },
    {
        id: 4, src: "/image/frety/frety_login1.png", title: "로그인",
        descriptions:
            <div className="space-y-3">
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">DB에 저장된 회원인지 검증 후 로그인 진행
                    </span>
                </div>
            </div>
    },
    {
        id: 5, src: "/image/frety/frety_login2.png", title: "로그인_에러",
        descriptions: null
    },
    {
        id: 6, src: "/image/frety/frety_create1.png", title: "악보제작_1",
        descriptions: null
    },
    {
        id: 7, src: "/image/frety/frety_create2.png", title: "악보제작_2",
        descriptions:
            <div className="space-y-3">
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">사용자에게 가사 한 줄 또는 전체 가사를 입력 받은 후 Javascript함수를 통해 split()함수로 가사를 한 줄씩 및 공백 포함 한 음절씩 분리
                    </span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">분리한 각 음절에 기타코드를 지정할 수 있도록 음절-기타코드(Key-Value) 형식의 Map형태로 파싱하여 객체로 관리
                    </span>
                </div>
            </div>
    },
    {
        id: 8, src: "/image/frety/frety_create3.png", title: "악보제작_업로드된 가사",
        descriptions:
            <div className="space-y-3">
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">가사를 한 줄씩 분리하여 사용자에게 표시(업로드)
                    </span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">삭제 버튼 클릭 시 가사 한 줄씩 삭제 가능
                    </span>
                </div>
            </div>
    },
    {
        id: 9, src: "/image/frety/frety_create4.png", title: "악보제작_기타 코드 선택기",
        descriptions:
            <div className="space-y-3">
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">각 음절 클릭 시 기타 코드 선택기(셀렉트박스) 표시 및 기타 코드 지정 가능
                    </span>
                </div>
            </div>
    },
    {
        id: 10, src: "/image/frety/frety_create5.png", title: "악보제작_기타 코드 선택 후",
        descriptions:
            <div className="space-y-3">
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">기타 코드 선택 후 해당 음절 위에 바로 표시
                    </span>
                </div>
            </div>
    },
    {
        id: 11, src: "/image/frety/frety_detail1.png", title: "악보상세_1",
        descriptions:
            <div className="space-y-3">
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="break-all ml-1.5 text-[14px]">가사 및 각 음절에 지정한 코드 표시</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="break-all ml-1.5 text-[14px]">기타 코드 호버 시 카드 형식 툴팁으로 기타 코드 다이어그램 표시</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="break-all ml-1.5 text-[14px]">svguitar 라이브러리를 사용하여 기타 코드 데이터 렌더링</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="break-all ml-1.5 text-[14px]">기타 코드 데이터는 관련 파일별로 분리하여 유지보수 효율 극대화</span>
                </div>
            </div>
    },
    {
        id: 12, src: "/image/frety/frety_detail2.png", title: "악보상세_2",
        descriptions:
            <div className="space-y-3">
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="break-all ml-1.5 text-[14px]">좋아요 클릭 후 새로고침 되었다가 해당 부분으로 화면 슬라이드하여 돌아오기</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="break-all ml-1.5 text-[14px]">로그아웃일 경우 댓글 입력 칸 disabled</span>
                </div>
            </div>
    },
    {
        id: 13, src: "/image/frety/frety_detail3.png", title: "악보상세_댓글 / 답글",
        descriptions: null
    },
    {
        id: 14, src: "/image/frety/frety_comment_update.png", title: "악보상세_댓글 수정",
        descriptions: null
    },
    {
        id: 15, src: "/image/frety/frety_reply_create.png", title: "악보상세_답글 생성",
        descriptions: null
    },
    {
        id: 16, src: "/image/frety/frety_edit1.png", title: "악보수정_1",
        descriptions: null
    },
    {
        id: 17, src: "/image/frety/frety_edit3.png", title: "악보수정_2",
        descriptions: null
    },
    {
        id: 18, src: "/image/frety/frety_edit2.png", title: "악보수정_코드가 표시된 가사",
        descriptions: null
    },
    {
        id: 19, src: "/image/frety/frety_search.png", title: "악보검색",
        descriptions: null
    },
];

export default frety_images;