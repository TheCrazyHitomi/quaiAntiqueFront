import ReservationButton from "../../components/reservation/reservationButton";
import ReservationCard from "../../components/reservation/reservationCards";
import ReservationTitle from "../../components/Title/reservationTitle";

const ReservationPage = () => {
    return (
        <div>
            <div className="container">
                <div className="row row-cols-2 row-cols-lg-3 ">

                    <ReservationTitle />
                    {/* Add your reservation components here */}
                    <ReservationCard />
                    <ReservationCard />
                    <ReservationCard />
                </div>
            </div>
            <ReservationButton />
        </div>
    );
}

export default ReservationPage;
