import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {Project} from "@/model/project";

interface ContentProjectDetailInfo {
    data: Project;
}

const Content_Project_Detail_Info = ({data}: ContentProjectDetailInfo) => {
    return (
        <>
            <Table className="mx-auto w-full lg:w-[50%] mb-1">
                <TableHeader className="bg-zinc-200">
                    <TableRow>
                        <TableHead className="w-auto px-5 text-[10px] sm:text-[12px] tracking-wide">개발기간</TableHead>
                        <TableHead className="w-auto px-5 text-[10px] sm:text-[12px] tracking-wide">개발인원</TableHead>
                        <TableHead className="w-auto px-5 text-[10px] sm:text-[12px] tracking-wide">프론트엔드
                            기여도</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="w-auto px-5 text-[10px] sm:text-[12px] text-center tracking-wide">
                            <div>{data.workingAt}</div>
                            {data.id === "uno" &&
                                <div className="leading-3">(유지보수 포함)</div>
                            }
                        </TableCell>
                        <TableCell
                            className="w-auto px-5 text-[10px] sm:text-[12px] text-center tracking-wide">{data.workers}</TableCell>
                        <TableCell
                            className="w-auto px-5 text-[10px] sm:text-[12px] text-center tracking-wide">
                            {data.contribution}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <div className="flex space-x-2">
                <Table className="mx-auto flex-1">
                    <TableHeader className="bg-zinc-200">
                        <TableRow>
                            <TableHead
                                className="w-auto px-5 text-[10px] sm:text-[12px] tracking-wide">Library</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="w-auto px-0 py-2 text-center tracking-wide">
                                <div className="flex flex-wrap">
                                    {data.librarys.map((library, index) => {
                                        return (
                                            <Badge key={index}
                                                   className="text-[10px] sm:text-[12px] bg-zinc-600 hover:bg-zinc-600/80 rounded m-0.5 cursor-default">{library}</Badge>
                                        );
                                    })}
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Table className="mx-auto flex-1">
                    <TableHeader className="bg-zinc-200">
                        <TableRow>
                            <TableHead
                                className="w-auto px-5 text-[10px] sm:text-[12px] tracking-wide">Tools</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="w-auto px-0 py-2 text-center tracking-wide">
                                <div className="flex flex-wrap">
                                    {data.tools.map((tool, index) => {
                                        return (
                                            <Badge key={index}
                                                   className="text-[10px] sm:text-[12px] bg-zinc-600 hover:bg-zinc-600/80 rounded m-0.5 cursor-default">{tool}</Badge>
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