import CustomCarousel from "../../components/Carousel/Carousel"
import Title from "../../components/Title/title";

const Home = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
            <CustomCarousel />
            <Title />
        </div>
    )
    }

export default Home;