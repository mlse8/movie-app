import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import CarouselItem from "./CarouselItem";

export default function Carousel({ movies }) {
    return (
        <AliceCarousel
            autoPlay
            autoPlayInterval={5000}
            disableButtonsControls
            infinite
            items={movies.map((movie) => (
                <CarouselItem movie={movie} />
            ))}
        />
    );
};
