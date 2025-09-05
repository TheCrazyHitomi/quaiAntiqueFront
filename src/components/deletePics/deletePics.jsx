
import React from "react";
import { Button, Modal } from "react-bootstrap";
import DeletePicForm from "./deletePicForm";

const DeletePics = ( { showDeleteModal, handleCloseDeleteModal } ) => {

    return (
        <div>
            <Modal className="bg-primary bg-opacity-25" show={showDeleteModal} onHide={handleCloseDeleteModal} centered >
                <Modal.Header closeButton>
                    <Modal.Title >Êtes vous sûr de vouloir supprimer cette photo ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DeletePicForm/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDeleteModal}>
                        Annuler
                    </Button>
                    <Button variant="primary" onClick={handleCloseDeleteModal}>
                        Supprimer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default DeletePics;
