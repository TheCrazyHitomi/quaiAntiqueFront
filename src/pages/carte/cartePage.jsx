import Carte from "../../components/carte/carte";
import ReservationButton from "../../components/reservation/reservationButton";
import CarteTitle from "../../components/Title/carteTitle";

const CartePage = () => {
    return (
        <div>
            <CarteTitle />
            <Carte />
            <ReservationButton />
        </div>
    );
}

export default CartePage;
