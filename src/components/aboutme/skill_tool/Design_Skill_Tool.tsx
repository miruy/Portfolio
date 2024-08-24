import {BsDot} from "react-icons/bs";
import skill_tool_model from "@/model/skill_tool_model";

interface DesignSkillToolProps {
    data: skill_tool_model
}

const Design_Skill_Tool = ({data}: DesignSkillToolProps) => {
    return (
        <div className="flex-1 space-y-3">
            <div className="text-[14px] font-semibold text-zinc-300">Tool</div>
            <div className="grid grid-cols-5 gap-4 rounded">
                {data.tools?.map((tool, index) => {
                    const name = tool.replace("/tool/", "").replace(/\.(svg|png)$/, "");
                    return (
                        <div key={index} className="flex flex-col items-center">
                            <div
                                className={`flex justify-center items-center bg-zinc-700 rounded w-[50px] h-[50px]
                                                            ${name === "GitHub" ? `p-1.5` : `p-2.5`}
                                                            `}>
                                <img
                                    src={tool}
                                    alt={name + `_image_` + index}
                                    className="w-full h-auto"/>
                            </div>
                            <div className="text-[10px] text-zinc-300 mt-1">{name}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Design_Skill_Tool;