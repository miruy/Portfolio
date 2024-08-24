import {useEffect, useRef, useState} from "react";
import EducationExperience from "@/components/aboutme/Education_Experience";
import Skill_Tool from "@/components/aboutme/Skill_Tool";

const ContentAbout = () => {

    const divRef = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        const div = divRef.current;
        if (div) {
            // ResizeObserver 인스턴스 생성
            const resizeObserver = new ResizeObserver(entries => {
                const {width} = entries[0].contentRect;
                setWidth(width - 10);
            });

            // 관찰 시작
            resizeObserver.observe(div);

            // 컴포넌트가 언마운트 될 때 관찰 중단
            return () => resizeObserver.unobserve(div);
        }
    }, []);

    return (
        <div className="flex flex-col flex-1 space-y-14" ref={divRef}>
            <div className="flex">
                <div className="relative w-[350px] h-[350px] p-1">
                    <img src="/notion_avatar.svg" alt="notion_avatar" className="absolute -top-16 w-full h-full"/>
                </div>

                <div className="flex-1 bg-zinc-900"></div>
            </div>

            <EducationExperience width={width}/>

            <Skill_Tool width={width}/>
        </div>
    )
}

export default ContentAbout;