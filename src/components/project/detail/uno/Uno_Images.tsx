import { CarouselItem } from "@/components/ui/carousel";
import { Image } from "@/model/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";

interface UnoImagesProps {
    images: Image[];
}

const UnoImages = ({ images }: UnoImagesProps) => {
    const [toggled, setToggled] = useState<boolean>(true);

    return (
        <>
            {images?.map((image, index) => {
                return (
                    <CarouselItem key={index} className="relative">
                        <img
                            src={image.src}
                            alt={`uno_expansion_image_${image.id}`}
                            className="rounded"
                        />

                        {image.descriptions && (
                            <div className="flex flex-col space-y-2 absolute bottom-3 top-5 right-1 sm:top-3 sm:right-3 w-[30%]">
                                {/* 버튼 */}
                                <div
                                    onClick={() => setToggled((prev) => !prev)}
                                    className="flex items-center justify-between cursor-pointer rounded h-10 p-2 bg-zinc-900 bg-opacity-80 shadow-xl"
                                >
                                    <div className="text-white text-[15px] tracking-wide">
                                        기능 설명
                                    </div>
                                    <IoMdArrowDropdown
                                        className={`h-6 w-6 shrink-0 transition-transform duration-200 text-white ${
                                            toggled ? "rotate-180" : ""
                                        }`}
                                    />
                                </div>

                                {/* 설명 */}
                                <div
                                    className={`${
                                        toggled
                                            ? "max-h-full opacity-100 transition-all duration-500 ease-in-out"
                                            : "max-h-0 opacity-0 transition-all duration-500 ease-in-out"
                                    } overflow-y-auto rounded p-2 bg-zinc-900 bg-opacity-80 shadow-xl`}
                                >
                                    <div className="text-white">
                                        {image.descriptions}
                                    </div>
                                </div>
                            </div>
                        )}
                    </CarouselItem>
                );
            })}
        </>
    );
};

export default UnoImages;
