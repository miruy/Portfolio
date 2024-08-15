import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {Project} from "@/model/project";

interface ContentProjectDetailInfo {
    data: Project;
}

const Content_Project_Detail_Info = ({data}: ContentProjectDetailInfo) => {
    return (
        <>
            <Table className="mx-auto w-full lg:w-[50%]">
                <TableHeader className="bg-zinc-700">
                    <TableRow>
                        <TableHead className="w-auto px-5 tracking-wide">개발기간</TableHead>
                        <TableHead className="w-auto px-5 tracking-wide">개발인원</TableHead>
                        <TableHead className="w-auto px-5 tracking-wide">기여도</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="w-auto px-5 text-center tracking-wide">{data.workingAt}</TableCell>
                        <TableCell className="w-auto px-5 text-center tracking-wide">{data.workers}</TableCell>
                        <TableCell className="w-auto px-5 text-center tracking-wide">{data.Contribution}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <div className="flex space-x-2">
                <Table className="mx-auto flex-1">
                    <TableHeader className="border-b-2 border-b-zinc-500">
                        <TableRow>
                            <TableHead className="w-auto px-5 tracking-wide">Skills</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="">
                        <TableRow>
                            <TableCell className="w-auto px-5 py-2 text-center tracking-wide">
                                <div className="flex flex-wrap">
                                    {data.skills.map((skill, index) => {
                                        return (
                                            <Badge key={index}
                                                   className="text-[15px] 2xl:text-[13px] bg-zinc-700 hover:bg-zinc-700 text-zinc-300 rounded m-0.5">{skill}</Badge>
                                        );
                                    })}
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Table className="mx-auto flex-1">
                    <TableHeader className="border-b-2 border-b-zinc-500">
                        <TableRow>
                            <TableHead className="w-auto px-5 tracking-wide">Skills</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="">
                        <TableRow>
                            <TableCell className="w-auto px-5 py-2 text-center tracking-wide">
                                <div className="flex flex-wrap">
                                    {data.tools.map((tool, index) => {
                                        return (
                                            <Badge key={index}
                                                   className="text-[15px] 2xl:text-[13px] bg-zinc-700 hover:bg-zinc-700 text-zinc-300 rounded m-0.5">{tool}</Badge>
                                        );
                                    })}
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

export default Content_Project_Detail_Info;