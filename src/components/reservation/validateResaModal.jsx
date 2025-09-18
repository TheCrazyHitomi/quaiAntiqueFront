import React from 'react';
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

export const ValidateResaModal = ( { showValidateResaModal, onCloseValidateResaModal } ) => {

    const navigate = useNavigate();

    const validatedResa = () => {
        // Logique de validation de la réservation
        navigate('/reservations'); // Redirection vers la page des réservations
        onCloseValidateResaModal();
    }
    
    return (
        <div>
            <Modal className="bg-primary bg-opacity-25" show={showValidateResaModal} onHide={onCloseValidateResaModal} centered >
                <Modal.Header closeButton>
                    <Modal.Title >Votre réservation a bien été prise en compte !</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="primary" onClick={validatedResa}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ValidateResaModal;