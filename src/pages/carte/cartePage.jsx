import React from "react";
import { AuthContext } from "../../context/AuthContext";
import Carte from "../../components/carte/carte";
import ReservationButton from "../../components/reservation/reservationButton";
import CarteTitle from "../../components/Title/carteTitle";
import { useModal } from '../../context/ModalContext';

const CartePage = () => {

const { handleOpenModal, handleCloseModal, showModal } = useModal();

    

    return (
        <div>
            <CarteTitle />
            <Carte showModal={showModal} handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal} />
            <ReservationButton />
        </div>
    );
}

export default CartePage;
