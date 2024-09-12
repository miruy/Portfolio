import {Image} from "@/model/image";
import {GoDotFill} from "react-icons/go";

const uno_images: Image[] = [
    {
        id: 1, src: "/image/uno/user_list.png", title: "회원관리",
        descriptions:
            <>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="ml-1.5 text-[14px]">재사용성이 높은 드롭다운 기능, 캘린더를 커스텀 컴포넌트로 분리하여 사용</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="ml-1.5 text-[14px]">react-hook-form의 Controller 컴포넌트를 사용하여 여러 form 제어(드롭다운, 캘린더, 체크박스, 셀렉트 등)</span>
                </div>
            </>
    },
    {id: 2, src: "/image/uno/user_detail1.png", title: "회원관리_회원상세정보"},
    {
        id: 3, src: "/image/uno/user_detail2.png", title: "회원관리_스트레스 검사 이력",
        descriptions:
            <>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="ml-1.5 text-[14px]">스트레스검사 탭 - 테이블 행에 `스트레스 검사 측정 이력`과 동일한 세부정보 표시</span>
                </div>
            </>
    },
    {
        id: 4, src: "/image/uno/user_detail3.png", title: "회원관리_심리 검사 이력",
        descriptions:
            <>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="ml-1.5 text-[14px]">심리검사 탭 - 테이블 행에 `심리검사이력`과 동일한 세부정보 표시</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="ml-1.5 text-[14px]">표시할 데이터가 없는 경우, `리스트가 비었습니다`라는 메시지를 표시</span>
                </div>
            </>
    },
    {id: 5, src: "/image/uno/stress_list.png", title: "스트레스 검사 측정 이력"},
    {
        id: 6, src: "/image/uno/stress_detail1.png", title: "측정상세정보_불안지수",
        descriptions:
            <>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="ml-1.5 text-[14px]">측정 바 - 여러곳에서 데이터만 다르게 받아 사용할 수 있도록 모듈화하여 작업</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="ml-1.5 text-[14px]">각 측정 항목의 props 데이터에 따라 라벨, 색상, 바 너비, 아이콘 등을 다르게 표시</span>
                </div>
            </>
    },
    {id: 7, src: "/image/uno/stress_detail2.png", title: "측정상세정보_무기력지수"},
    {id: 8, src: "/image/uno/stress_detail3.png", title: "측정상세정보_스트레스"},
    {id: 9, src: "/image/uno/stress_detail4.png", title: "측정상세정보_번아웃지수"},
    {id: 10, src: "/image/uno/stress_detail5.png", title: "측정상세정보_신체활력"},
    {id: 11, src: "/image/uno/stress_detail6.png", title: "측정상세정보_자율신경균형"},
    {id: 12, src: "/image/uno/stress_detail7.png", title: "측정상세정보_혈관건강"},
    {id: 13, src: "/image/uno/stress_detail8.png", title: "측정상세정보_심박수"},
    {id: 14, src: "/image/uno/stress_detail9.png", title: "스트레스 검사 측정 이력_사전설문"},
    {
        id: 15, src: "/image/uno/stress_detail10.png", title: "스트레스 검사 측정 이력_결과지 출력1",
        descriptions:
            <>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="ml-1.5 text-[14px]">인쇄 기능 구현 시 해당 모달만 출력할 수 있도록 react-to-print 사용</span>
                </div>
            </>
    },
    {id: 16, src: "/image/uno/stress_detail11.png", title: "스트레스 검사 측정 이력_결과지 출력2"},
    {id: 17, src: "/image/uno/test_email.png", title: "결과지 이메일 보내기"},
    {id: 18, src: "/image/uno/testhistory_list.png", title: "심리검사이력"},
    {id: 19, src: "/image/uno/testhistory_detail1.png", title: "심리검사이력_결과지 출력1"},
    {id: 20, src: "/image/uno/testhistory_detail2.png", title: "심리검사이력_결과지 출력2"},
    {id: 21, src: "/image/uno/event_list.png", title: "이벤트 및 챌린지 관리"},
    {id: 22, src: "/image/uno/event_detail.png", title: "이벤트 및 챌린지 관리_상세"},
    {id: 23, src: "/image/uno/event_create1.png", title: "이벤트 및 챌린지 관리_등록"},
    {
        id: 24, src: "/image/uno/event_create2.png", title: "이벤트 및 챌린지 관리_캘린더",
        descriptions:
            <>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="ml-1.5 text-[14px]">react-calendar를 커스텀하여 디자인 시안에 부합하는 캘린더 구현</span>
                </div>
            </>
    },
    {id: 25, src: "/image/uno/event_update.png", title: "이벤트 및 챌린지 관리_수정"},
    {id: 26, src: "/image/uno/terms_list.png", title: "이용약관 관리"},
    {id: 27, src: "/image/uno/terms_detail.png", title: "이용약관 관리_상세"},
    {
        id: 28, src: "/image/uno/terms_create.png", title: "이용약관 관리_등록",
        descriptions:
            <>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span className="ml-1.5 text-[14px]">CKEditor 사용하여 텍스트 입력 기능 구현</span>
                </div>
                <div className="flex items-start text-[15px]">
                    <GoDotFill className="flex-shrink-0 mt-1 w-3 h-3"/>
                    <span
                        className="ml-1.5 text-[14px]">react-hook-form의 watch()를 사용하여 내용 데이터를 실시간으로 추적 및 초기 데이터로 설정</span>
                </div>
            </>
    },
    {id: 29, src: "/image/uno/terms_update.png", title: "이용약관 관리_수정"},
];

export default uno_images;