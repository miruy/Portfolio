'use client'

import {ModalContext, ModalTypes} from "@/context/ModalContext";
import {useContext, useEffect, useRef, useState} from "react";
import {
    Dialog,
    DialogContent, DialogTitle,
} from "@/components/ui/dialog";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";

const Content_Project_Detail_Image_Expansion_Modal = () => {

    const {modalState, closeModal} = useContext(ModalContext)
    const {key, imageSrcs} = modalState[ModalTypes.CONTENT_PROJECT_IMAGE_EXPANSION].data
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
                closeModal({name: ModalTypes.CONTENT_PROJECT_IMAGE_EXPANSION});
            }
        };

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
                className="flex flex-col flex-1 p-0 min-w-[90%] sm:min-w-[70%] w-[70%] h-[30%] sm:h-[50%] lg:h-[70%] bg-secondary rounded sm:rounded border-0 outline-0">
                <VisuallyHidden><DialogTitle/></VisuallyHidden>
                <Carousel className="w-full h-full">
                    <CarouselContent>
                        {key === "memocode" && imageSrcs.map((src, index) => {
                            return (
                                <CarouselItem key={index}>
                                    <img
                                        key={index} src={src} alt={`memocode_expansion_image_${index}`}
                                        className="w-full h-full"/>
                                </CarouselItem>
                            )
                        })}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10 bg-zinc-600 hover:bg-zinc-500"/>
                    <CarouselNext className="w-10 h-10 bg-zinc-600 hover:bg-zinc-500"/>
                </Carousel>
            </DialogContent>
        </Dialog>
    )
}

export default Content_Project_Detail_Image_Expansion_Modal;