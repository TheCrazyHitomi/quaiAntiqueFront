import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignupForm() {
    return (
        <Form className='border rounded p-4'>

            <Form.Group className="mb-3" controlId="formBasicNom">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" id="NomInput" placeholder="Entrez votre nom" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrenom">
                <Form.Label>Prénom</Form.Label>
                <Form.Control type="text" id="PrenomInput" placeholder="Entrez votre prénom" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Adresse email</Form.Label>
                <Form.Control type="email" id="EmailInput" placeholder="Entrez votre email" />
                <Form.Text className="text-muted">
                Nous ne partagerons jamais votre email avec qui que ce soit.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control type="password" id= "validatedPasswordInput" placeholder="Mot de passe" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Se souvenir de moi" />
            </Form.Group>

            <div className="text-center">
                <Button variant="danger" type="submit">
                    S'inscrire
                </Button>
                <div className="mt-3">
                    <p>Vous avez déjà un compte ? <a href="/connexion">Connectez-vous</a></p>
                </div>
            </div>
        
        </Form>
    );
}

export default SignupForm;