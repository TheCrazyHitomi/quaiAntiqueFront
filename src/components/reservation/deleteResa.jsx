
import React from "react";
import { Button, Modal } from "react-bootstrap";


const DeleteResa = ( { showDeleteResaModal, handleCloseDeleteResaModal } ) => {

    return (
        <div>
            <Modal className="bg-primary bg-opacity-25" show={showDeleteResaModal} onHide={handleCloseDeleteResaModal} centered >
                <Modal.Header closeButton>
                    <Modal.Title >Êtes vous sûr de vouloir annuler cette réservation ?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDeleteResaModal}>
                        Annuler
                    </Button>
                    <Button variant="primary" onClick={handleCloseDeleteResaModal}>
                        Supprimer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default DeleteResa;
