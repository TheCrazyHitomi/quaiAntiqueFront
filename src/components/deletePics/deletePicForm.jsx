import Form from 'react-bootstrap/Form';

const DeletePicForm = () => {
    return (
        <Form>
            <Form.Group controlId="pictureFile" className="mb-3">
                <Form.Label>Photo</Form.Label>
                {/* provisoire */}
                <img src="src/assets/images/rawfish.png" alt="raw fish" className="rounded w-100" />
            </Form.Group>
            <Form.Group controlId="pictureDescription" className="mb-3">
                <Form.Label>Description</Form.Label>
                <p className='text-secondary'><em>Description de l'image</em></p>
            </Form.Group>
        </Form>
    );
}

export default DeletePicForm;
