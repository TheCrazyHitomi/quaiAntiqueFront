import React, { useState } from "react";

import AddPics from "../../components/addPics/addPics";
import DeletePics from "../../components/deletePics/deletePics";
import Galerie from "../../components/galerie/galerie";
import Reservation from "../../components/reservation/reservation";
import TitleGalerie from "../../components/Title/title-galerie";


const GaleriePage = () => {


    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleOpenModal = () => setShowModal(true);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleOpenDeleteModal = () => setShowDeleteModal(true);

    return (
        <div>
            <TitleGalerie />
            <AddPics showModal={showModal} handleCloseModal={handleCloseModal} handleOpenModal={handleOpenModal} />
            <DeletePics showDeleteModal={showDeleteModal} handleCloseDeleteModal={handleCloseDeleteModal} />
            <Galerie handleCloseModal={handleCloseModal} handleOpenModal={handleOpenModal}  handleOpenDeleteModal={handleOpenDeleteModal}  />
            <Reservation />
        </div>
    )
}

export default GaleriePage;