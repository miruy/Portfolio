import {BsDot} from "react-icons/bs";
import skill_tool_model from "@/model/skill_tool_model";

interface FrontendSkillToolProps {
    data: skill_tool_model
}

const Frontend_Skill_Tool = ({data}: FrontendSkillToolProps) => {
    return (
        <div className="space-y-7">
            <div className="flex-1 space-y-3">
                <div
                    className="flex items-center text-[14px] font-semibold text-zinc-300">
                    Framework
                    <BsDot/>
                    Language
                    <BsDot/>
                    Library
                </div>
                <div className="grid grid-cols-5 gap-4 rounded">
                    {data.skills?.map((skill, index) => {
                        const name = skill.replace("/skill/", "").replace(/\.(svg|png)$/, "");
                        const color = "bg-green-500"
                        return (
                            <div key={index} className="flex flex-col items-center">
                                <div className={`flex justify-center items-center bg-zinc-700 rounded w-[50px] h-[50px] scale-95 relative
                                                      ${name === "Markdown" || name === "Recharts" ? `p-0.5` : `p-2.5`}`}>
                                    <img
                                        src={skill}
                                        alt={name + `_image_` + index}
                                        className="w-full h-auto"/>

                                    <div
                                        className={`absolute -top-1 -right-1 inline-flex rounded-full h-3 w-3 scale-95 ${color}`}></div>
                                </div>
                                <div className="text-[10px] text-zinc-300 mt-1">{name}</div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="flex-1 space-y-3">
                <div className="text-[14px] font-semibold text-zinc-300">Tool</div>
                <div className="grid grid-cols-5 gap-4 rounded">
                    {data.tools?.map((tool, index) => {
                        const name = tool.replace("/tool/", "").replace(/\.(svg|png)$/, "");
                        let color = "bg-green-500"
                        return (
                            <div key={index} className="flex flex-col items-center">
                                <div
                                    className={`flex justify-center items-center bg-zinc-700 rounded w-[50px] h-[50px] p-2.5 relative`}>
                                    <img
                                        src={tool}
                                        alt={name + `_image_` + index}
                                        className="w-full h-auto"/>

                                    <div
                                        className={`absolute -top-1 -right-1 inline-flex rounded-full h-3 w-3 ${color}`}></div>
                                </div>
                                <div className="text-[10px] text-zinc-300 mt-1">{name}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Frontend_Skill_Tool;