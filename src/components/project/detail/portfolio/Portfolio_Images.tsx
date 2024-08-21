import {CarouselItem} from "@/components/ui/carousel";
import {Image} from "@/model/image";

interface PortfolioImagesProps {
    images: Image[];
}

const Portfolio_Images = ({images}: PortfolioImagesProps) => {
    return (
        <>
            {images?.map((image, index) => {
                return (
                    <CarouselItem key={index}>
                        <img
                            src={image.src}
                            alt={`portfolio_expansion_image_${image.id}`}
                            className="rounded"
                        />
                    </CarouselItem>
                )
            })}
        </>
    )
}

export default Portfolio_Images;