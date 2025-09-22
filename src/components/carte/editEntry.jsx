
import React from "react";
import { Button, Modal } from "react-bootstrap";
import EditButton from "../crudButtons/editButton";
import { useModal } from '../../context/ModalContext';


const EditEntry = ( ) => {
    const { activeModal, closeModal } = useModal();

    return (

        <div className="container ">

            <Modal 
                className="bg-primary bg-opacity-25" 
                show={activeModal === "editEntry"} 
                onHide={closeModal} 
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edition du plat</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* composant formulaire prérempli pour éditer un plat de la carte = <EditEntryForm /> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={closeModal}>
                        Enregistrer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default EditEntry;
