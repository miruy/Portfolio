export default function Home() {
    return (
        <div>
            <div className="flex flex-1 h-screen spotlight-container items-center justify-center">
                <div className="spotlight relative left-[280%] inline-block text-[100px] font-bold">
                    <span className="spotlight_kim">김</span>
                    <span className="spotlight_yu">유</span>
                    <span className="spotlight_rim">림</span>
                </div>
            </div>

            <div className="h-screen bg-blue-400 flex justify-center items-center">
                <div>김유림</div>
            </div>
        </div>
    );
}
