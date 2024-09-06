import {GoDotFill} from "react-icons/go";

const education_experience = [
    {
        organization: "여주대학교",
        title: "보육과",
        description: "",
        type: "학력",
        date: "2015.03 ~ 2018.02 (3년)"
    },
    {
        organization: "KG IT뱅크",
        title: "자바 프로그래밍",
        description:
            <>
                <div>프로그래밍과 프로그래밍 언어의 기본 개념을 이해하고, 자바 문법을 체계적으로 학습하였습니다.</div>
                <div>이를 통해 객체 지향 프로그래밍 기법을 익히는 경험을 하였습니다.</div>
            </>,
        type: "교육",
        date: "2021.10 ~ 2021.11 (1개월)"
    },
    {
        organization: "KG IT뱅크",
        title: "스프링클라우드를 활용한 마이크로서비스 개발자 양성 과정",
        description:
            <>
                <div>JAVA, JSP, 스프링 클라우드 프레임워크를 중심으로 백엔드 개발에 필요한 다양한 기술을 습득하였습니다.</div>
                <div>
                    이를 통해 기본적인 웹 개발과 서버 사이드 로직의 대해 이해할 수 있었고, 스프링 클라우드를 활용하여 마이크로서비스 아키텍처를 효과적으로 설계하고 구현하는 방법을 배울 수
                    있었습니다.
                </div>
            </>,
        type: "교육",
        date: "2021.11 ~ 2022.05 (6개월)"
    },
    {
        organization: "한국산업인력공단",
        title: "정보처리산업기사",
        description: "",
        type: "자격",
        date: "2023.11.15"
    },
    {
        organization: "CAiTORY",
        title: "UNO CARE CMS 프론트엔드 웹 개발 참여(외주 프로젝트)",
        description:
            <>
                <div>
                    의료 관련 기관에서 사용자 정보, 사용자의 의료 기록 및 설문 기록, 예약 시스템 등 의료 분야에서 사용되는 다양한 콘텐츠를 효율적으로 관리하는 시스템입니다.
                </div>

                <div className="pt-2">
                    <div>주요 업무</div>
                    <div className="flex flex-shrink-0 items-start space-x-1">
                        <GoDotFill className="mt-1"/>
                        <div>제공받은 요구 사항 및 디자인 시안에 맞추어 사용자 인터페이스(UI) 구현</div>
                    </div>
                    <div className="flex flex-shrink-0 items-start space-x-1">
                        <GoDotFill className="mt-1"/>
                        <div>백엔드와의 API 연동을 통해 사용자 인터페이스에 데이터 표시</div>
                    </div>
                    <div className="flex flex-shrink-0 items-start space-x-1">
                        <GoDotFill className="mt-1"/>
                        <div>지속적인 코드 개선 및 오류 발생 문제 해결(유지보수)</div>
                    </div>
                </div>
            </>,
        type: "경력",
        date: "2024.01 ~ 2024.04 (4개월)"
    },
];

export default education_experience;