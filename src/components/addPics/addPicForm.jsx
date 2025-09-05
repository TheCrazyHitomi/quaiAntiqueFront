import Form from 'react-bootstrap/Form';

const AddPicForm = () => {
    return (
        <Form>
            <Form.Group controlId="pictureFile" className="mb-3">
                <Form.Label>Photo</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            <Form.Group controlId="pictureDescription" className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form>
    );
}

export default AddPicForm;
