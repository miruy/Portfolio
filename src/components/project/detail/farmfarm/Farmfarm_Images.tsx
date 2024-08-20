import {CarouselItem} from "@/components/ui/carousel";
import {Image} from "@/model/image";

interface FarmfarmImagesProps {
    images: Image[];
}

const FarmfarmImages = ({images}: FarmfarmImagesProps) => {
    return (
        <>
            {images?.map((image, index) => {
                return (
                    <CarouselItem key={index}>
                        <img
                            src={image.src}
                            alt={`farmfarm_expansion_image_${image.id}`}
                            className="rounded"
                        />
                    </CarouselItem>
                )
            })}
        </>
    )
}

export default FarmfarmImages;