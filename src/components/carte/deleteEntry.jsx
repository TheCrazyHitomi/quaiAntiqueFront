
import React from "react";
import { Button, Modal } from "react-bootstrap";
import DeleteButton from "../crudButtons/deleteButton";
import { useModal } from '../../context/ModalContext';


const DeleteEntry = ( ) => {
    const { activeModal, closeModal, openModal } = useModal();

    return (

        <div className="container ">

            <div className='text-end mb-3'>
                <DeleteButton onDelete={() => openModal("deleteEntry")} />
            </div>
            <Modal 
                className="bg-primary bg-opacity-25" 
                show={activeModal === "deleteEntry"} 
                onHide={closeModal} 
                centered 
            >
                <Modal.Header closeButton>
                    <Modal.Title>Suppression de la Carte</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* composant formulaire prérempli pour supprimer un plat de la carte = <DeleteEntryForm /> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={closeModal}>
                        Supprimer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default DeleteEntry;
