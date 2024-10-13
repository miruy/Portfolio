import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Project} from "@/model/project";
import React from "react";

interface ContentProjectDetailInfo {
    data: Project;
}

const Content_Project_Detail_Info = ({data}: ContentProjectDetailInfo) => {
    return (

        <Table className="mx-auto w-full lg:w-[50%] mb-5">
            <TableHeader className="bg-zinc-200">
                <TableRow>
                    <TableHead className="w-auto px-5 text-[10px] sm:text-[12px] tracking-wide">개발기간</TableHead>
                    <TableHead className="w-auto px-5 text-[10px] sm:text-[12px] tracking-wide">개발인원</TableHead>
                    <TableHead className="w-auto px-5 text-[10px] sm:text-[12px] tracking-wide">
                        {data.id === "frety" ? "기여도" : "프론트엔드 기여도"}
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="h-[50px]">
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
    )
}

export default Content_Project_Detail_Info;