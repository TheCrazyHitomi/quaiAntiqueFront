import React from "react";
import { Button } from "react-bootstrap";

const DeleteButton = ( { onDelete } ) => {
    return (
        <Button type="button" className="editDeleteBtn fs-1 no-focus" onClick={onDelete}><i className="bi bi-trash-fill"></i></Button>
    );
}

export default DeleteButton;