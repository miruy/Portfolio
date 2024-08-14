import ProjectPreview from "@/data/Content_Project_Preview";

const ContentProject = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5">
                {ProjectPreview.map((data, index) => {
                    return (
                        <div key={index} className="w-full h-full bg-secondary rounded" style={{aspectRatio: '8 / 9'}}>
                            <div>{data.title}</div>
                            <div>{data.description}</div>
                            <div>{data.tag}</div>
                        </div>
                    )
                })}
            </div>
            {/*Project page*/}

            {/*호버하면 모달뜨게해서 모달안에 (소개글, 링크, 제작기간, 제작인원, 사용스킬/툴, 작업기여도, 주요기능및 특징-seo최적화 포함하기, 작업화면등*/}
            {/*트러블슈팅-문제/해결/회고)*/}
            {/*메모코드*/}
            {/*팜팜*/}
            {/*포트폴리오*/}
        </>
    )
}

export default ContentProject;