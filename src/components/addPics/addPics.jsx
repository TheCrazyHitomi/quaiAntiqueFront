
import React from "react";
import { Button, Modal } from "react-bootstrap";
import AddPicForm from "./addPicForm";

const AddPics = ( { showModal, handleCloseModal, handleOpenModal } ) => {

    return (
        <div className="container text-end">
            <Button className="btn btn-primary fs-1 px-3 py-0" onClick={handleOpenModal}>+</Button>


            {/* Formulaire d'ajout de photos */}

            <Modal className="bg-primary bg-opacity-25" show={showModal} onHide={handleCloseModal} centered >
                <Modal.Header closeButton>
                    <Modal.Title>Edition Photo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddPicForm />
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button> */}
                    <Button variant="primary" onClick={handleCloseModal}>
                        Ajouter
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AddPics;
