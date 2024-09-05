import {Badge} from "@/components/ui/badge";
import education_experience from "@/data/education_Lisence";
import {IoMdCalendar, IoMdRibbon} from "react-icons/io";

interface EducationExperienceProps {
    width: number
}

const EducationExperience = ({width}: EducationExperienceProps) => {
    return (
        <div className="flex flex-col w-full h-fit">
            <div className="border-b border-zinc-400 text-foreground text-2xl font-semibold tracking-wider pb-2">
                Education & Experience
            </div>

            <div className="flex h-fit pt-7 pb-4 overflow-x-scroll" style={{width: width}}>
                <div className="flex space-x-5">
                    {[...education_experience].reverse().map((data, index) => { // 배열 순서 반대로 갸져오기
                        return (
                            <div key={index}
                                 className="space-y-4 bg-secondary w-[330px] h-auto rounded p-5 tracking-wider">
                                <Badge
                                    variant="outline"
                                    className="border border-zinc-400 py-1.5 px-4 flex w-fit h-fit">
                                    <div className="text-[14px]">{data.type}</div>
                                </Badge>
                                <div className="text-xl font-semibold">{data.organization}</div>

                                <div className="space-y-3 text-zinc-700">
                                    <div className="flex items-start space-x-1.5">
                                        <IoMdRibbon className="flex-shrink-0 w-5 h-5 mt-1"/>
                                        <div className="leading-6 text-[15px]">{data.title}</div>
                                    </div>

                                    {data.description &&
                                        <div className="text-[13px] text-zinc-600 py-3">{data.description}</div>
                                    }

                                    <div className="flex items-center space-x-1.5">
                                        <IoMdCalendar className="w-5 h-5"/>
                                        <div className="text-[15px]">{data.date}</div>
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

export default EducationExperience;