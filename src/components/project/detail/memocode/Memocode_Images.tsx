import {CarouselItem} from "@/components/ui/carousel";
import {Image} from "@/model/image";

interface MemocodeImagesProps {
    images: Image[];
}

const MemocodeImages = ({images}: MemocodeImagesProps) => {
    return (
        <>
            {images?.map((image, index) => {
                return (
                    <CarouselItem key={index}>
                        <img
                            src={image.src}
                            alt={`memocode_expansion_image_${image.id}`}
                            className="rounded"
                        />
                    </CarouselItem>
                )
            })}
        </>
    )
}

export default MemocodeImages;