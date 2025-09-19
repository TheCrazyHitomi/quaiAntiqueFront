
import React from "react";
import { Button, Modal } from "react-bootstrap";
import AddButton from '../crudButtons/addButton';
import { useModal } from '../../context/ModalContext';


const CreateEntry = () => {
    const { activeModal, closeModal, openModal } = useModal();

    return (

        <div className="container ">
            <div className='text-end mb-3'>
                <AddButton onClick={() => openModal("createEntry")} />
            </div>

            <Modal 
                className="bg-primary bg-opacity-25" 
                show={activeModal === "createEntry"} 
                onHide={closeModal} 
                centered 
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edition de la Carte</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* composant pour ajouter un nouveau plat a la carte = <CreateEntryForm /> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={closeModal}>
                        Ajouter
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CreateEntry;
