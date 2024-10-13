import {Image} from "@/model/image";
import {GoDot, GoDotFill} from "react-icons/go";

const frety_images: Image[] = [
    {
        id: 1, src: "/image/frety/frety_main1.png", title: "메인페이지",
        descriptions: null
        // <div className="space-y-3">
        //     <div className="flex items-start text-[15px]">
        //         <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
        //         <span
        //             className="break-all ml-1.5 text-[14px]">ThemeContext를 사용하여 테마(light/dark)와 색상(primaryColor) 설정을 관리</span>
        //     </div>
        //     <div className="flex items-start text-[15px]">
        //         <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
        //         <span className="break-all ml-1.5 text-[14px]">localStorage를 통해 상태를 저장하여 재접속 시 선택한 테마를 그대로 적용</span>
        //     </div>
        //     <div className="flex items-start text-[15px]">
        //         <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
        //         <span className="break-all ml-1.5 text-[14px]">ThemeContext를 기반으로 useTheme 훅을 구현하여, 사용편의성을 높힘</span>
        //     </div>
        //     <div className="flex items-start text-[15px]">
        //         <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
        //         <span className="break-all ml-1.5 text-[14px]">서버 사이드 컴포넌트에서 SSR을 통해 전체 메모 리스트를 불러오는 함수를 호출하여 초기 데이터를 서버에서 미리 가져와 페이지 렌더링</span>
        //     </div>
        //     <div className="flex items-start text-[15px]">
        //         <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
        //         <span className="break-all ml-1.5 text-[14px]">클라이언트 사이드 컴포넌트에서 CSR을 통해 스크롤이 끝날 때마다 추가 데이터를 동적으로 가져오는 방식으로 구현(무한 스크롤)</span>
        //     </div>
        // </div>
    },
    {
        id: 2, src: "/image/frety/frety_signup1.png", title: "회원가입",
        descriptions: null
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
        id: 3, src: "/image/frety/frety_signup1.png", title: "회원가입_에러",
        descriptions: null
    },
    {
        id: 4, src: "/image/frety/frety_login1.png", title: "로그인",
        descriptions: null
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
        descriptions: null
    },
    {
        id: 8, src: "/image/frety/frety_create3.png", title: "악보제작_업로드된 가사",
        descriptions: null
    },
    {
        id: 9, src: "/image/frety/frety_create4.png", title: "악보제작_기타 코드 선택기",
        descriptions: null
    },
    {
        id: 10, src: "/image/frety/frety_create5.png", title: "악보제작_기타 코드 선택 후",
        descriptions: null
    },
    {
        id: 11, src: "/image/frety/frety_detail1.png", title: "악보상세_1",
        descriptions: null
    },
    {
        id: 12, src: "/image/frety/frety_detail2.png", title: "악보상세_2",
        descriptions: null
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