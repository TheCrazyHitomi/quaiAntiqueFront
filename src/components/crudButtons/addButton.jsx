import { Button } from "react-bootstrap";


const AddButton = ({ onClick }) => {

    return (
        <Button type="button" className="btn btn-primary fs-1 px-3 py-0" onClick={onClick}>+</Button>
    );
}

export default AddButton;