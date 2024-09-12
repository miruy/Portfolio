import {Image} from "@/model/image";
import {GoDotFill} from "react-icons/go";

const memocode_images: Image[] = [
    {
        id: 1, src: "/image/memocode/memocode_main1.png", title: "메인페이지",
        descriptions:
            <div className="space-y-3">
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="ml-1.5 text-[14px]">ThemeContext를 사용하여 테마(light/dark)와 색상(primaryColor) 설정을 관리</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="ml-1.5 text-[14px]">localStorage를 통해 상태를 저장하여 재접속 시 선택한 테마를 그대로 적용</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="ml-1.5 text-[14px]">ThemeContext를 기반으로 useTheme 훅을 구현하여, 사용편의성을 높힘</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="ml-1.5 text-[14px]">서버 사이드 컴포넌트에서 SSR을 통해 전체 메모 리스트를 불러오는 함수를 호출하여 초기 데이터를 서버에서 미리 가져와 페이지 렌더링</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="ml-1.5 text-[14px]">클라이언트 사이드 컴포넌트에서 CSR을 통해 스크롤이 끝날 때마다 추가 데이터를 동적으로 가져오는 방식으로 구현(무한 스크롤)</span>
                </div>
            </div>
    },
    {
        id: 2, src: "/image/memocode/memocode_main_search.png", title: "메인페이지_검색",
        descriptions:
            <div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="ml-1.5 text-[14px]">검색결과 렌더링 시 DOMPurify.sanitize()를 사용하여 안전하게 표시</span>
                </div>
            </div>
    },
    {id: 3, src: "/image/memocode/memocode_detail1.png", title: "메모상세페이지_게시글"},
    {
        id: 4, src: "/image/memocode/memocode_detail2.png", title: "메모상세페이지_댓글/대댓글",
        descriptions:
            <div className="space-y-3">
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="ml-1.5 text-[14px]">로그인 여부 및 댓글 삭제 상태에 따라 적절한 문구를 동적으로 표시하여, 사용자에게 댓글의 상태를 명확하고 직관적으로 전달</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="ml-1.5 text-[14px]">각 댓글 닫기 버튼에 아코디언 효과를 적용하여 공간을 효율적으로 관리하고 답글 개수를 한눈에 확인할 수 있도록 구현</span>
                </div>
            </div>
    },
    // {id: 5, src: "/image/memocode/memocode_login.png", title: "로그인"},
    {id: 5, src: "/image/memocode/memocode_myblog1.png", title: "내 블로그페이지_내 메모 탭"},
    {
        id: 6, src: "/image/memocode/memocode_w1.png", title: "메모작성페이지",
        descriptions:
            <div className="space-y-3">
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="ml-1.5 text-[14px]">사용자가 필요에 따라 사이드바의 너비를 드래그하여 동적으로 조정할 수 있도록 구현</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="ml-1.5 text-[14px]">SideBarContext를 기반으로 useSidebar 훅을 구현하여, 사용편의성을 높힘</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="ml-1.5 text-[14px]">공개, 비공개, 즐겨찾기, 보안 탭을 구성하여 사용자가 메모를 카테고리별로 관리하고 신속하게 접근할 수 있도록 설계</span>
                </div>
            </div>
    },
    {id: 7, src: "/image/memocode/memocode_w_search.png", title: "메모작성페이지_검색"},
    {id: 8, src: "/image/memocode/memocode_w2.png", title: "메모작성페이지_메모 등록"},
    {id: 9, src: "/image/memocode/memocode_w3.png", title: "메모작성페이지_메모 작성"},
    {id: 10, src: "/image/memocode/memocode_w4.png", title: "메모작성페이지_메모 미리보기"},
    {id: 11, src: "/image/memocode/memocode_w5.png", title: "메모작성페이지_메모 정보 수정"},
    {id: 12, src: "/image/memocode/memocode_qna1.png", title: "질문/답변페이지"},
    {id: 13, src: "/image/memocode/memocode_qna_search.png", title: "질문/답변페이지_검색"},
    {id: 14, src: "/image/memocode/memocode_qna_w.png", title: "질문등록페이지"},
    {id: 15, src: "/image/memocode/memocode_qna_detail1.png", title: "질문/답변 상세페이지"},
    {id: 16, src: "/image/memocode/memocode_qna_detail2.png", title: "질문/답변 상세페이지_댓글/대댓글"},
];

export default memocode_images;