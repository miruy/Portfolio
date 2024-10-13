'use client'

import {ModalContext, ModalTypes} from "@/context/ModalContext";
import {useContext, useEffect, useRef} from "react";
import {Dialog, DialogContent, DialogTitle} from "@/components/ui/dialog";
import {Carousel, CarouselContent, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";
import MemocodeImages from "@/components/project/detail/memocode/Memocode_Images";
import FarmfarmImages from "@/components/project/detail/farmfarm/Farmfarm_Images";
import Portfolio_Images from "@/components/project/detail/portfolio/Portfolio_Images";
import Uno_Images from "@/components/project/detail/uno/Uno_Images";

const Content_Project_Detail_Image_Expansion_Modal = () => {

    const {modalState, closeModal} = useContext(ModalContext)
    const {key, images, targetId} = modalState[ModalTypes.CONTENT_PROJECT_IMAGE_EXPANSION].data
    const contentRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
            closeModal({name: ModalTypes.CONTENT_PROJECT_IMAGE_EXPANSION});
        }
    };

    useEffect(() => {
        if (modalState[ModalTypes.CONTENT_PROJECT_IMAGE_EXPANSION].isVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [modalState, closeModal]);

    return (
        <Dialog open={modalState[ModalTypes.CONTENT_PROJECT_IMAGE_EXPANSION].isVisible}>
            <DialogContent
                ref={contentRef}
                className="flex flex-1 p-0 w-[90%] min-w-[90%] sm:min-w-[70%]">
                <VisuallyHidden><DialogTitle/></VisuallyHidden>

                {/* sm 이하 */}
                <Carousel
                    orientation="vertical"
                    opts={{
                        align: "start",
                        loop: true,
                        startIndex: targetId - 1
                    }}
                    className="flex sm:hidden h-[350px]">
                    <CarouselContent className="h-[330px]">
                        {key === "uno" && <Uno_Images images={images}/>}
                        {key === "frety" && <Uno_Images images={images}/>}
                        {key === "memocode" && <MemocodeImages images={images}/>}
                        {key === "farmfarm" && <FarmfarmImages images={images}/>}
                        {key === "portfolio" && <Portfolio_Images images={images}/>}
                    </CarouselContent>
                    <CarouselPrevious className="w-9 h-9"/>
                    <CarouselNext className="w-9 h-9"/>
                </Carousel>

                {/* sm 이상 */}
                <Carousel
                    orientation="horizontal"
                    opts={{
                        align: "start",
                        loop: true,
                        startIndex: targetId - 1
                    }}
                    className="hidden sm:flex w-full h-full">
                    <CarouselContent>
                        {key === "uno" && <Uno_Images images={images}/>}
                        {key === "frety" && <Uno_Images images={images}/>}
                        {key === "memocode" && <MemocodeImages images={images}/>}
                        {key === "farmfarm" && <FarmfarmImages images={images}/>}
                        {key === "portfolio" && <Portfolio_Images images={images}/>}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10"/>
                    <CarouselNext className="w-10 h-10"/>
                </Carousel>
            </DialogContent>
        </Dialog>
    )
}

export default Content_Project_Detail_Image_Expansion_Modal;