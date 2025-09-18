import React, { useState } from "react";

import DeleteResa from "../../components/reservation/deleteResa";
import ReservationForm from "../../components/reservation/reservationForm";
import ReserverTitle from "../../components/Title/reserverTitle";
import ValidateResaModal from "../../components/reservation/validateResaModal";


const ReserverPage = () => {




    const [showValidateResaModal, setShowValidateResaModal] = useState(false);
    // const handleCloseValidateResaModal = () => setShowValidateResaModal(false);
    // const handleOpenValidateResaModal = () => setShowValidateResaModal(true);

    const [showDeleteResaModal, setShowDeleteResaModal] = useState(false);
    // const handleCloseDeleteResaModal = () => setShowDeleteResaModal(false);
    // const handleOpenDeleteResaModal = () => setShowDeleteResaModal(true);

    const [formData, setFormData] = useState({
        allergies: "",
        nbConvives: "",
        date: "",
        service: "midi",
        horaire: ""
    });

    return (
        <div>
            <ReserverTitle />
            <ReservationForm 
                formData={formData}
                setFormData={setFormData}
                handleOpenDeleteResaModal={() => setShowDeleteResaModal(true)}
                handleOpenValidateResaModal={() => setShowValidateResaModal(true)}
            />

            <ValidateResaModal 
                setFormData={setFormData}
                showValidateResaModal={showValidateResaModal} 
                onCloseValidateResaModal={() => setShowValidateResaModal(false)} 
            />
            
            <DeleteResa 
                showDeleteResaModal={showDeleteResaModal} 
                onCloseDeleteResaModal={() => setShowDeleteResaModal(false)} 
                setFormData={setFormData}
            />
        </div>
    );
}

export default ReserverPage;
