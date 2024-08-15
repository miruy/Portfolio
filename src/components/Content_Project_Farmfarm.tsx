import Content_Project_Detail_Info from "@/components/Content_Project_Detail_Info";
import farmfarm from "@/data/farmfarm";

const Content_Project_Farmfarm = () => {

    const data = farmfarm;

    return (
        <>
            <Content_Project_Detail_Info data={data}/>
            {/*호버하면 모달뜨게해서 모달안에 (제작동기, 주요기능및 특징-seo최적화 포함하기, 작업화면등*/}
            {/*트러블슈팅-문제/해결/회고)*/}
        </>
    )
}

export default Content_Project_Farmfarm;