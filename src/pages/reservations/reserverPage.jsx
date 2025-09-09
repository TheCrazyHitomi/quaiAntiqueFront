import React, { useState } from "react";

import DeleteResa from "../../components/reservation/deleteResa";
import ReservationForm from "../../components/reservation/reservationForm";
import ReserverTitle from "../../components/Title/reserverTitle";


const ReserverPage = () => {

    const [service, setService] = useState("midi");
    const [horaire, setHoraire] = useState("");

    const [showDeleteResaModal, setShowDeleteResaModal] = useState(false);
    const handleCloseDeleteResaModal = () => setShowDeleteResaModal(false);
    const handleOpenDeleteResaModal = () => setShowDeleteResaModal(true);

    return (
        <div>
            <ReserverTitle />
            <ReservationForm service={service} setService={setService} horaire={horaire} setHoraire={setHoraire} handleOpenDeleteResaModal={handleOpenDeleteResaModal} />
            <DeleteResa showDeleteResaModal={showDeleteResaModal} handleCloseDeleteResaModal={handleCloseDeleteResaModal}  />
        </div>
    );
}

export default ReserverPage;
