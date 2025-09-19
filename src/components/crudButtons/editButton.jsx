import React from "react";
import { Button } from "react-bootstrap";

const EditButton = ( { onClick } ) => {
    return (
        <Button type="button"  className="editDeleteBtn fs-1" onClick={onClick}><i className="bi bi-pencil-fill"></i></Button>
    );
}

export default EditButton;