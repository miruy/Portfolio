import {Badge} from "@/components/ui/badge";
import skill_tool from "@/data/skill_tool";

interface SkillToolProps {
    width: number
}

const Skill_Tool = ({width}: SkillToolProps) => {
    return (
        <div className="flex flex-col w-full h-fit">
            <div className="border-b border-zinc-600 text-foreground text-2xl font-semibold tracking-wider pb-5">
                Skill & Tools
            </div>

            <div className="flex h-fit overflow-x-auto pt-7 pb-4" style={{maxWidth: width}}>
                <div className="flex space-x-5">
                    {skill_tool.map((data, index) => { // 배열 순서 반대로 갸져오기
                        return (
                            <div key={index}
                                 className="flex flex-col flex-1 space-y-5 border-zinc-900 bg-zinc-900 w-[400px] h-auto rounded p-5 tracking-wider">
                                <Badge
                                    variant="outline"
                                    className="border border-zinc-600 py-1.5 px-4 flex w-fit h-fit">
                                    <div className="text-[14px]">{data.title}</div>
                                </Badge>

                                <div className="flex-1 space-y-3">
                                    <div className="text-[14px] font-semibold text-zinc-300">Skill</div>
                                    <div className="grid grid-cols-5 gap-3 rounded">
                                        {data.skills.map((skill, index) => {
                                            return (
                                                <div key={index}
                                                     className="flex justify-center items-center bg-background rounded p-2">
                                                    <img
                                                        src={skill}
                                                        alt={data.title + `_image_` + index}
                                                        className="w-10 h-10"/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className="flex-1 space-y-3">
                                    <div className="text-[14px] font-semibold text-zinc-300">Tools</div>
                                    <div className="grid grid-cols-5 gap-3 rounded">
                                        {data.tools.map((tool, index) => {
                                            return (
                                                <div key={index}
                                                     className="flex justify-center items-center bg-background rounded p-2">
                                                    <img
                                                        src={tool}
                                                        alt={data.title + `_image_` + index}
                                                        className="w-10 h-10"/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skill_Tool;