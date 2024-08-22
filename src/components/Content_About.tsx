import memocode_images from "@/data/memocode_images";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {BellRing} from "lucide-react";
import {useEffect, useRef, useState} from "react";

const ContentAbout = () => {

    const divRef = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        const div = divRef.current;
        if (div) {
            // ResizeObserver 인스턴스 생성
            const resizeObserver = new ResizeObserver(entries => {
                const {width} = entries[0].contentRect;
                setWidth(width);
            });

            // 관찰 시작
            resizeObserver.observe(div);

            // 컴포넌트가 언마운트 될 때 관찰 중단
            return () => resizeObserver.unobserve(div);
        }
    }, []);

    console.log("width", width)

    return (
        <div className="flex flex-col flex-1 items-center space-y-20" ref={divRef}>
            <div className="bg-zinc-900 w-52 h-52"></div>

            <div className="flex flex-col w-full h-fit">
                <div className="border-b border-zinc-600 text-foreground text-2xl font-semibold tracking-wider pb-5">
                    Education & License
                </div>

                <div className="flex space-x-5 overflow-x-auto py-6 w-[100vh]">
                    {memocode_images.map((data, index) => {
                        return (
                            <Card className="border-zinc-900 bg-zinc-900 w-[500px] rounded">
                                <CardHeader>
                                    <CardTitle>Notifications</CardTitle>
                                    <CardDescription>You have 3 unread messages.</CardDescription>
                                </CardHeader>
                                <CardContent className="grid gap-4">
                                    <div className=" flex items-center space-x-4 rounded-md border p-4">
                                        <BellRing/>
                                        <div className="flex-1 space-y-1">
                                            <p className="text-sm font-medium leading-none">
                                                Push Notifications
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                Send notifications to device.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>

            About page

            사진
            이름
            짧은 소개글
            교육
            자격
            스킬앤툴(프로그래밍언어, 툴, 프레임워크)

            {/*<div className="w-52 h-96 bg-pink-500"></div>*/}
            {/*<div className="w-50 h-50 bg-pink-500"></div>*/}
            {/*<div className="w-52 h-96 bg-pink-500"></div>*/}
            {/*<div className="w-52 h-96 bg-pink-500"></div>*/}
        </div>
    )
}

export default ContentAbout;