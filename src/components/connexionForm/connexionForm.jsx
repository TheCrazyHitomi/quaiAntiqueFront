import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ConnexionForm() {
    return (
        <Form className='border rounded p-4'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Adresse email</Form.Label>
            <Form.Control type="email" placeholder="Entrez votre email" />
            <Form.Text className="text-muted">
            Nous ne partagerons jamais votre email avec qui que ce soit.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control type="password" placeholder="Mot de passe" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Se souvenir de moi" />
        </Form.Group>
        <div className="text-center">
            <Button variant="danger" type="submit">
                Se connecter
            </Button>
            <div className="mt-3">
                <p>Vous n'avez pas de compte ? <a href="/inscription">Inscrivez-vous</a></p>
            </div>
        </div>
        </Form>
    );
}

export default ConnexionForm;