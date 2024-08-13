'use client'

import 'animate.css';

export default function Home() {
    return (
        <>
            <div className="fixed z-10 top-0 bottom-0 right-0 left-0 flex bg-blue-500">
                <div
                    className="relative flex flex-1 justify-center items-center bg-red-400">
                    <video
                        autoPlay
                        loop
                        muted
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/video_bg.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>

                    <div className="absolute top-[340px] flex flex-col justify-center items-center">
                        <div className="text-[20px] text-background animate__animated animate__fadeIn">
                            비 온 뒤의 땅이 단단해지듯
                        </div>
                        <div className="text-[20px] text-background animate__animated animate__fadeIn">
                            도전과 실패를 바탕으로 견고한 성과를 만들어내는
                        </div>
                        <div className="text-[60px] font-bold text-background animate__animated animate__fadeInUp">
                            프론트엔드 개발자 김유림입니다.
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-screen relative flex">
                <div className="absolute z-50 top-[100vh] bottom-0 right-0 left-0 flex h-full bg-red-500">
                    <div className="">이게 덮어지는거지</div>
                </div>
            </div>
        </>
    );
}
