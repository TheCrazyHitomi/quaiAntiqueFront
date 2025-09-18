
import React from "react";
import { Button, Modal } from "react-bootstrap";


const DeleteResa = ( { showDeleteResaModal, onCloseDeleteResaModal, setFormData } ) => {

    const confirmCancel = () => {
        setFormData({
      allergies: "",
      nbConvives: "",
      date: "",
      service: "midi",
      horaire: ""
    });
        onCloseDeleteResaModal();
    }

    return (
        <div>
            <Modal className="bg-primary bg-opacity-25" show={showDeleteResaModal} onHide={onCloseDeleteResaModal} centered >
                <Modal.Header closeButton>
                    <Modal.Title >Êtes vous sûr de vouloir annuler cette réservation ?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => onCloseDeleteResaModal(false)}>
                        Annuler
                    </Button>
                    <Button variant="primary" type="button" onClick={confirmCancel}>
                        Supprimer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default DeleteResa;
