import {Image} from "@/model/image";
import {GoDot, GoDotFill} from "react-icons/go";

const memocode_images: Image[] = [
    {
        id: 1, src: "/image/memocode/memocode_main1.png", title: "메인페이지",
        descriptions:
            <div className="space-y-3">
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">ThemeContext를 사용하여 테마(light/dark)와 색상(primaryColor) 설정을 관리</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="break-all ml-1.5 text-[14px]">localStorage를 통해 상태를 저장하여 재접속 시 선택한 테마를 그대로 적용</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="break-all ml-1.5 text-[14px]">ThemeContext를 기반으로 useTheme 훅을 구현하여, 사용편의성을 높힘</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="break-all ml-1.5 text-[14px]">서버 사이드 컴포넌트에서 SSR을 통해 전체 메모 리스트를 불러오는 함수를 호출하여 초기 데이터를 서버에서 미리 가져와 페이지 렌더링</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="break-all ml-1.5 text-[14px]">클라이언트 사이드 컴포넌트에서 CSR을 통해 스크롤이 끝날 때마다 추가 데이터를 동적으로 가져오는 방식으로 구현(무한 스크롤)</span>
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
                        className="break-all ml-1.5 text-[14px]">검색결과 렌더링 시 DOMPurify.sanitize()를 사용하여 안전하게 표시</span>
                </div>
            </div>
    },
    {id: 3, src: "/image/memocode/memocode_detail1.png", title: "메모상세페이지_게시글"},
    {
        id: 4, src: "/image/memocode/memocode_detail2.png", title: "메모상세페이지_댓글/답글",
        descriptions:
            <div className="space-y-3">
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">로그인 여부 및 댓글 삭제 상태에 따라 적절한 문구를 동적으로 표시하여, 사용자에게 댓글의 상태를 명확하고 직관적으로 전달</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">각 답글 닫기 버튼에 아코디언 효과를 적용하여 공간을 효율적으로 관리하고 답글 개수를 한눈에 확인할 수 있도록 구현</span>
                </div>
            </div>
    },
    // {id: 5, src: "/image/memocode/memocode_login.png", title: "로그인"},
    {id: 5, src: "/image/memocode/memocode_memo_create_comment.png", title: "메모상세페이지_답글 남기기"},
    {id: 6, src: "/image/memocode/memocode_myblog1.png", title: "내 블로그페이지_내 메모 탭"},
    {
        id: 7, src: "/image/memocode/memocode_w1.png", title: "메모작성페이지",
        descriptions:
            <div className="space-y-3">
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">사용자가 필요에 따라 사이드바의 너비를 드래그하여 동적으로 조정할 수 있도록 구현</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">SideBarContext를 기반으로 useSidebar 훅을 구현하여, 사용편의성을 높힘</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="break-all ml-1.5 text-[14px]">공개, 비공개, 즐겨찾기, 보안 탭을 구성하여 사용자가 메모를 카테고리별로 관리하고 신속하게 접근할 수 있도록 설계</span>
                </div>
            </div>
    },
    {id: 8, src: "/image/memocode/memocode_w_search.png", title: "메모작성페이지_검색"},
    {
        id: 9, src: "/image/memocode/memocode_w2.png", title: "메모작성페이지_메모 등록",
        descriptions:
            <div className="space-y-3">
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">썸네일 - 버튼 기능과 DragEvent를 활용한 드래그 앤 드롭 기능을 홤께 제공</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="break-all ml-1.5 text-[14px]">썸네일 - useEffect와 ResizeObserver 함수를 사용하여 모달 창 크기에 따라 드래그 영역의 크기를 동적으로 조정</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="break-all ml-1.5 text-[14px]">썸네일 - jpg, jpeg, png, gif 4가지 형식 이미지 파일 업로드 가능</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="break-all ml-1.5 text-[14px]">태그 - KeyboardEvent를 사용하여 태그를 입력 받은 후 엔터를 누르면 badge형태로 추가되어 시각적으로 표시</span>
                </div>
            </div>
    },
    {
        id: 10, src: "/image/memocode/memocode_w3.png", title: "메모작성페이지_메모 작성",
        descriptions:
            <div className="space-y-3">
                <div className="space-y-2">
                    <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                        <span className="break-all ml-1.5 text-[14px]">메모 작성 / 수정</span>
                    </div>

                    <div className="flex items-start ml-5">
                        <GoDot className="flex-shrink-0 mt-1.5 w-3 h-3"/>
                        <span className="break-all ml-1.5 text-[14px]">react-hook-form의 useForm을 사용해 메모 수정 폼을 관리</span>
                    </div>
                    <div className="flex items-start ml-5">
                        <GoDot className="flex-shrink-0 mt-1.5 w-3 h-3"/>
                        <span className="break-all ml-1.5 text-[14px]">MonacoEditor를 사용해 마크다운 형식의 메모 내용을 입력 및 수정</span>
                    </div>
                    <div className="flex items-start ml-5">
                        <GoDot className="flex-shrink-0 mt-1.5 w-3 h-3"/>
                        <span
                            className="break-all ml-1.5 text-[14px]">메모 저장(Ctrl+S/Cmd+S), 미리보기 모달 열고 닫기(Ctrl+P/Cmd+P) 단축키 기능 지원</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-start text-[15px]">
                        <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                        <span className="break-all ml-1.5 text-[14px]">이미지 업로드</span>
                    </div>

                    <div className="flex items-start ml-5">
                        <GoDot className="flex-shrink-0 mt-1.5 w-3 h-3"/>
                        <span
                            className="break-all ml-1.5 text-[14px]">이미지를 드래그 앤 드롭 또는 버튼을 통해 업로드하고, 업로드된 이미지는 메모에 추가</span>
                    </div>
                    <div className="flex items-start ml-5">
                        <GoDot className="flex-shrink-0 mt-1.5 w-3 h-3"/>
                        <span className="break-all ml-1.5 text-[14px]">이미지 업로드 API(useCreateMemoImage)와 axios를 사용해 이미지 파일을 서버에 전송하고, 업로드된 이미지는 마크다운 형식으로 에디터에 자동 삽입</span>
                    </div>
                    <div className="flex items-start ml-5">
                        <GoDot className="flex-shrink-0 mt-1.5 w-3 h-3"/>
                        <span
                            className="break-all ml-1.5 text-[14px]">이미지 파일을 드래그할 때 화면 배경에 드래그 상태를 시각적으로 강조하는 드래그 화면 표시</span>
                    </div>
                    <div className="flex items-start ml-5">
                        <GoDot className="flex-shrink-0 mt-1.5 w-3 h-3"/>
                        <span
                            className="break-all ml-1.5 text-[14px]">이미지 업로드 중 로딩 상태를 보여주는 로딩 화면 제공(사용자 경험 향상)</span>
                    </div>
                    <div className="flex items-start ml-5">
                        <GoDot className="flex-shrink-0 mt-1.5 w-3 h-3"/>
                        <span
                            className="break-all ml-1.5 text-[14px]">jpg, jpeg, png, gif 4가지 형식 이미지 파일 업로드 가능</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-start text-[15px]">
                        <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                        <span className="break-all ml-1.5 text-[14px]">자동 크기 조정</span>
                    </div>

                    <div className="flex items-start ml-5">
                        <GoDot className="flex-shrink-0 mt-1.5 w-3 h-3"/>
                        <span className="break-all ml-1.5 text-[14px]">useEffect와 ResizeObserver 함수를 사용해 사용자가 창 크기를 조정할 때 에디터와 입력 필드의 크기를 동적으로 조정</span>
                    </div>
                </div>
            </div>
    },
    {
        id: 11, src: "/image/memocode/memocode_w4.png", title: "메모작성페이지_메모 미리보기",
        descriptions:
            <div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">미리보기 버튼 클릭 시 현재 편집 중인 메모를 HTML로 렌더링된 형태로 실시간 확인</span>
                </div>
            </div>
    },
    {
        id: 12, src: "/image/memocode/memocode_version1.png", title: "메모작성페이지_메모 버전 관리",
        descriptions:
            <div className="space-y-3">
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">툴바-메모관리-버전추가를 클릭하면 버전 관리 모달에 현재 메모 내용을 `캡쳐`하듯이 내용 저장</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">Table 컴포넌트를 사용하여 메모 버전, 생성 날짜, 보기 및 삭제 버튼을 포함한 버전 목록을 표 형태로 표시</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">내용 보기 버튼을 눌러 특정 버전의 내용 확인</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">삭제 버튼을 눌러 해당 버전 삭제</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">버전이 없는 경우 `아직 관리중인 버전이 없네요!`라는 메시지를 표시해 사용자가 버전을 추가할 수 있도록 유도</span>
                </div>
            </div>
    },
    {id: 13, src: "/image/memocode/memocode_version2.png", title: "메모작성페이지_메모 버전 상세보기"},
    {
        id: 14, src: "/image/memocode/memocode_sequrity.png", title: "메모작성페이지_메모 보안 설정",
        descriptions:
            <div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">보안을 설정한 메모는 영구적으로 블로그 공개 및 개시 제한</span>
                </div>
            </div>
    },
    {
        id: 15, src: "/image/memocode/memocode_w5.png", title: "메모작성페이지_메모 정보 수정",
        descriptions:
            <div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">react-router-form의 useForm을 사용하여 메모 등록 시 정보를 가져와 그대로 표시</span>
                </div>
            </div>
    },
    {
        id: 16, src: "/image/memocode/memocode_qna1.png", title: "질문/답변페이지",
        descriptions:
            <div className="space-y-3">
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">Q&A 둘러보기 또는 질문하기 클릭 시 해당 경로로 이동하며, 경로가 변경될 때 선택 메뉴에 색상 변화 및 애니메이션 효과 적용</span>
                </div>
            </div>
    },
    {
        id: 17, src: "/image/memocode/memocode_qna_search.png", title: "질문/답변페이지_검색",
        descriptions:
            <div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">검색결과 렌더링 시 DOMPurify.sanitize()를 사용하여 안전하게 표시</span>
                </div>
            </div>
    },
    {
        id: 18, src: "/image/memocode/memocode_qna_w.png", title: "질문등록페이지",
        descriptions:
            <div className="space-y-3">
                <div className="space-y-2">
                    <div className="flex items-start text-[15px]">
                        <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                        <span className="break-all ml-1.5 text-[14px]">질문 작성</span>
                    </div>

                    <div className="flex items-start ml-5">
                        <GoDot className="flex-shrink-0 mt-1.5 w-3 h-3"/>
                        <span className="break-all ml-1.5 text-[14px]">제목과 내용을 입력하지 않으면 경고 메시지를 표시하고, 유효한 입력이 있을 경우 질문 등록</span>
                    </div>
                    <div className="flex items-start ml-5">
                        <GoDot className="flex-shrink-0 mt-1.5 w-3 h-3"/>
                        <span
                            className="break-all ml-1.5 text-[14px]">MonacoEditor를 커스텀하여 자주 사용하는 마크다운 문법을 버튼식으로 구현</span>
                    </div>
                    <div className="flex items-start ml-5">
                        <GoDot className="flex-shrink-0 mt-1.5 w-3 h-3"/>
                        <span
                            className="break-all ml-1.5 text-[14px]">MonacoEditor에 유효한 입력이 있을 경우 미리보기 버튼이 자동 활성화되고, 실시간으로 미리보기 가능</span>
                    </div>
                    <div className="flex items-start ml-5">
                        <GoDot className="flex-shrink-0 mt-1.5 w-3 h-3"/>
                        <span
                            className="break-all ml-1.5 text-[14px]">ResizeHandle 컴포넌트를 구현하여 MonacoEditor의 높이를 사용자가 실시간으로 조절할 수 있도록 구현</span>
                    </div>
                    <div className="flex items-start ml-5">
                        <GoDot className="flex-shrink-0 mt-1.5 w-3 h-3"/>
                        <span
                            className="break-all ml-1.5 text-[14px]">질문 작성 중 취소 버튼을 클릭 할 경우, 모달을 통해 작성 중인 내용 및 취소 여부를 확인</span>
                    </div>
                </div>
            </div>
    },
    {id: 19, src: "/image/memocode/memocode_qna_detail1.png", title: "질문/답변 상세페이지"},
    {
        id: 20, src: "/image/memocode/memocode_qna_detail2.png", title: "질문/답변 상세페이지_답변/답글",
        descriptions:
            <div className="space-y-3">
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">로그인 여부 및 딥변 삭제 상태에 따라 적절한 문구를 동적으로 표시하여, 사용자에게 답변 상태를 명확하고 직관적으로 전달</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">각 답글 닫기 버튼에 아코디언 효과를 적용하여 공간을 효율적으로 관리하고 답글 개수를 한눈에 확인할 수 있도록 구현</span>
                </div>
            </div>
    },
    {
        id: 21, src: "/image/memocode/memocode_qna_create_comment1.png", title: "질문/답변 상세페이지_답글 남기기",
        descriptions:
            <>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">질문 & 답변 카테고리 특성을 반영하여 CustomMonacoEditor 적용</span>
                </div>
            </>
    },
    {
        id: 22, src: "/image/memocode/memocode_qna_create_comment2.png", title: "질문/답변 상세페이지_답변/답글 수정",
        descriptions:
            <>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="break-all ml-1.5 text-[14px]">질문 & 답변 카테고리 특성을 반영하여 CustomMonacoEditor 적용</span>
                </div>
            </>
    },
];

export default memocode_images;