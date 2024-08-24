import {Badge} from "@/components/ui/badge";
import skill_tool from "@/data/skill_tool";
import Frontend_Skill_Tool from "@/components/aboutme/skill_tool/Frontend_Skill_Tool";
import Backend_Skill_Tool from "@/components/aboutme/skill_tool/Backend_Skill_Tool";
import Design_Skill_Tool from "@/components/aboutme/skill_tool/Design_Skill_Tool";
import Cooperation_Skill_Tool from "@/components/aboutme/skill_tool/Cooperation_Skill_Tool";
import {AiOutlineDash} from "react-icons/ai";

interface SkillToolProps {
    width: number
}

const Skill_Tool = ({width}: SkillToolProps) => {
    return (
        <div className="flex flex-col w-full h-fit">
            <div
                className="flex items-center justify-between border-b border-zinc-600 text-foreground text-2xl font-semibold tracking-wider pb-2">
                <div>Skill & Tool</div>

                <div className="flex items-center space-x-1">
                    <div className="flex items-center space-x-1">
                        <div className={`rounded-full h-2.5 w-2.5 bg-green-500`}></div>
                        <div className="text-[12px] text-zinc-400">경험 많음</div>
                    </div>

                    <AiOutlineDash/>

                    <div className="flex items-center space-x-1">
                        <div className={`rounded-full h-2.5 w-2.5 bg-yellow-300`}></div>
                        <div className="text-[12px] text-zinc-400">경험 있음</div>
                    </div>
                </div>
            </div>

            <div className="flex h-fit pt-7 pb-4 overflow-x-scroll" style={{width: width}}>
                <div className="flex space-x-5">
                    {skill_tool.map((data, index) => { // 배열 순서 반대로 갸져오기
                        return (
                            <div key={index}
                                 className="flex flex-col flex-1 space-y-5 border-zinc-900 bg-zinc-900 w-[350px] h-auto rounded p-5 tracking-wider">
                                <Badge
                                    variant="outline"
                                    className="border border-zinc-600 py-1.5 px-4 flex w-fit h-fit">
                                    <div className="text-[14px]">{data.title}</div>
                                </Badge>

                                {data.title === "Front-End" &&
                                    <Frontend_Skill_Tool data={data}/>
                                }

                                {data.title === "Back-End" &&
                                    <Backend_Skill_Tool data={data}/>
                                }

                                {data.title === "Design" &&
                                    <Design_Skill_Tool data={data}/>
                                }

                                {data.title === "Cooperation" &&
                                    <Cooperation_Skill_Tool data={data}/>
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skill_Tool;