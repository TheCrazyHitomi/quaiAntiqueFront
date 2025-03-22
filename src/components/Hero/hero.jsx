import CarouselMobileComponent from "../../components/Carousel/carouselMobile"
import Title from "../../components/Title/title";
import CarouselComponent from "../Carousel/Carousel";

const Hero = () => {
    return (
        <div>
            <CarouselComponent />
            <CarouselMobileComponent />
            <Title />
        </div>
    )
    }

export default Hero;