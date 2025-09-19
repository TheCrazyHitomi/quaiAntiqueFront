
import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useModal } from '../../context/ModalContext';


const EditPics = () => {
    const { activeModal, closeModal } = useModal();

    return (
        <div>
            <Modal 
                className="bg-primary bg-opacity-25" 
                show={activeModal === "editPic"} 
                onHide={closeModal} 
                centered 
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edition de la Photo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* composant pour éditer une photo = <EditPicForm /> */}
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

export default EditPics;
