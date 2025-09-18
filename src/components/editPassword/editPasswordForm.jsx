import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditPasswordForm = () => {
    return (
        <Form className='border rounded p-4'>
            <Form.Group className="mb-3" >
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control type="password" id= "PasswordInput" placeholder="Mot de passe" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Validez votre mot de passe</Form.Label>
                <Form.Control type="password" id= "validatedPasswordInput" placeholder="Mot de passe" />
            </Form.Group>

            <div className="text-center mt-4">
                <Button variant="danger" type="submit">
                    Modifier votre mot de passe
                </Button>

                <div className="mt-3">
                    <p>cliquez ici pour <a href="/account">Modifier vos informations personnelles</a></p>
                </div>
            </div>
        </Form>
    );
}

export default EditPasswordForm;
