import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import AddPics from "../../components/addPics/addPics";
import DeletePics from "../../components/deletePics/deletePics";
import EditPics from "../../components/editPics/editPics";
import Galerie from "../../components/galerie/galerie";
import TitleGalerie from "../../components/Title/title-galerie";
import ReservationButton from "../../components/reservation/reservationButton";



const GaleriePage = () => {

    const { role } = useContext(AuthContext);
    console.log("🎯 ROLE dans GaleriePage:", role);

    

    return (
        <div>
            <TitleGalerie />

              {/* ✅ Visible seulement si admin */}
            {role === "admin" && (
                <AddPics />
            )}

            {/* ✅ Visible seulement si admin */}
            {role === "admin" && (
                <DeletePics />
            )}
            {role === "admin" && (
                <EditPics />
            )}

            {/* La galerie reste publique */}
            <Galerie />
            
            <ReservationButton />
        </div>
    )
}

export default GaleriePage;