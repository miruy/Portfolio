import {useEffect, useRef, useState} from "react";
import EducationExperience from "@/components/aboutme/Education_Experience";
import Skill_Tool from "@/components/aboutme/Skill_Tool";
import Profile from "@/components/aboutme/Profile";

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
        <div className="flex flex-col flex-1 space-y-20" ref={divRef}>
            <Profile/>

            <EducationExperience width={width}/>

            <Skill_Tool width={width}/>
        </div>
    )
}

export default ContentAbout;