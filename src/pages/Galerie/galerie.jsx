import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import AddPics from "../../components/addPics/addPics";
import DeletePics from "../../components/deletePics/deletePics";
import Galerie from "../../components/galerie/galerie";
import TitleGalerie from "../../components/Title/title-galerie";
import ReservationButton from "../../components/reservation/reservationButton";


const GaleriePage = () => {

    const { role } = useContext(AuthContext);
    console.log("🎯 ROLE dans GaleriePage:", role);

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleOpenModal = () => setShowModal(true);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleOpenDeleteModal = () => setShowDeleteModal(true);

    return (
        <div>
            <TitleGalerie />

              {/* ✅ Visible seulement si admin */}
            {role === "admin" && (
                <AddPics
                    showModal={showModal}
                    handleCloseModal={handleCloseModal}
                    handleOpenModal={handleOpenModal}
                />
            )}

            {/* ✅ Visible seulement si admin */}
            {role === "admin" && (
                <DeletePics
                    showDeleteModal={showDeleteModal}
                    handleCloseDeleteModal={handleCloseDeleteModal}
                />
            )}

            {/* La galerie reste publique */}
            <Galerie 
                handleCloseModal={handleCloseModal} 
                handleOpenModal={handleOpenModal}  
                handleOpenDeleteModal={handleOpenDeleteModal}  
            />
            
            <ReservationButton />
        </div>
    )
}

export default GaleriePage;