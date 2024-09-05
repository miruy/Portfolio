import {BsDot} from "react-icons/bs";
import skill_tool_model from "@/model/skill_tool_model";

interface BackendSkillToolProps {
    data: skill_tool_model
}

const Backend_Skill_Tool = ({data}: BackendSkillToolProps) => {
    return (
        <div className="space-y-7">
            <div className="flex-1 space-y-3">
                <div
                    className="flex items-center text-[14px] font-semibold text-zinc-600">
                    Framework
                    <BsDot/>
                    Language
                    <BsDot/>
                    Library
                </div>
                <div className="grid grid-cols-5 gap-4 rounded">
                    {data.skills?.map((skill, index) => {
                        const name = skill.replace("/image/skill/", "").replace(/\.(svg|png)$/, "");
                        let color = "bg-green-500"
                        if (name === "Docker") {
                            color = "bg-yellow-400"
                        }
                        if (name === "MySQL" || name === "OracleSQLDeveloper") {
                            color = "bg-orange-400"
                        }
                        return (
                            <div key={index} className="flex flex-col items-center">
                                <div className={`flex justify-center items-center bg-white rounded w-[50px] h-[50px] relative
                                                       ${name === "JAVA" ? `p-0.5` : `p-2.5`}`}>
                                    <img
                                        src={skill}
                                        alt={name + `_image_` + index}
                                        className="w-full h-auto"/>

                                    <div
                                        className={`absolute -top-1 -right-1 inline-flex rounded-full h-3 w-3 ${color}`}></div>
                                </div>
                                <div className="text-[10px] text-zinc-700 mt-1">{name}</div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="flex justify-between">
                <div className="space-y-3">
                    <div
                        className="flex items-center text-[14px] font-semibold text-zinc-600">
                        DataBase
                    </div>
                    <div className="flex space-x-4 rounded">
                        {data.dbs?.map((db, index) => {
                            const name = db.replace("/image/skill/", "").replace(/\.(svg|png)$/, "");
                            let color = "bg-orange-400"
                            return (
                                <div key={index} className="flex flex-col items-center">
                                    <div
                                        className={`flex justify-center items-center bg-white rounded w-[50px] h-[50px] p-2.5 relative`}>
                                        <img
                                            src={db}
                                            alt={name + `_image_` + index}
                                            className="w-full h-auto"/>

                                        <div
                                            className={`absolute -top-1 -right-1 inline-flex rounded-full h-3 w-3 ${color}`}></div>
                                    </div>
                                    <div
                                        className="text-[10px] text-zinc-700 mt-1">{name === "OracleSQLDeveloper" ?
                                        <div className="flex flex-col items-center leading-3">
                                            <div>OracleSQL</div>
                                            <div>Developer</div>
                                        </div>
                                        : name
                                    }</div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="space-y-3 mr-1">
                    <div
                        className="flex text-[14px] font-semibold text-zinc-600">
                        Infra
                    </div>
                    <div className="flex space-x-4 rounded">
                        {data.infras?.map((infra, index) => {
                            const name = infra.replace("/image/skill/", "").replace(/\.(svg|png)$/, "");
                            let color = "bg-yellow-400"
                            return (
                                <div key={index} className="flex flex-col items-center">
                                    <div
                                        className={`flex justify-center items-center bg-white rounded w-[50px] h-[50px] p-2.5 relative`}>
                                        <img
                                            src={infra}
                                            alt={name + `_image_` + index}
                                            className="w-full h-auto"/>

                                        <div
                                            className={`absolute -top-1 -right-1 inline-flex rounded-full h-3 w-3 ${color}`}></div>
                                    </div>
                                    <div
                                        className="text-[10px] text-zinc-700 mt-1">{name === "OracleSQLDeveloper" ?
                                        <div className="flex flex-col items-center leading-3">
                                            <div>OracleSQL</div>
                                            <div>Developer</div>
                                        </div>
                                        : name
                                    }</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="flex-1 space-y-3">
                <div className="text-[14px] font-semibold text-zinc-600">Tool</div>
                <div className="grid grid-cols-5 gap-4 rounded">
                    {data.tools?.map((tool, index) => {
                        const name = tool.replace("/image/tool/", "").replace(/\.(svg|png)$/, "");
                        let color = "bg-green-500"
                        if (name === "GCP") {
                            color = "bg-yellow-400"
                        }
                        return (
                            <div key={index} className="flex flex-col items-center">
                                <div
                                    className={`flex justify-center items-center bg-white rounded w-[50px] h-[50px] p-2.5 relative`}>
                                    <img
                                        src={tool}
                                        alt={name + `_image_` + index}
                                        className="w-full h-auto"/>

                                    <div
                                        className={`absolute -top-1 -right-1 inline-flex rounded-full h-3 w-3 ${color}`}></div>
                                </div>
                                <div className="text-[10px] text-zinc-700 mt-1">{name}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Backend_Skill_Tool;