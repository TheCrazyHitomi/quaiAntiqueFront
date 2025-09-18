import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const AccountInfoForm = () => {
    return (
        <Form className='border rounded p-4'>

            <Form.Group className="mb-3" >
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" id="NomInput" placeholder="Entrez votre nom" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Prénom</Form.Label>
                <Form.Control type="text" id="PrenomInput" placeholder="Entrez votre prénom" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Allergies</Form.Label>
                <Form.Control type="text" id="AllergiesInput" placeholder="Entrez vos allergies" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Nombre de convives habituels</Form.Label>
                <Form.Control type="number" id= "nbConvivesInput" placeholder="Nombre de convives" />
            </Form.Group>

            <div className="text-center mt-4">
                <Button className="me-2" variant="secondary" type="submit">
                    Modifier vos informations
                </Button>

                <Button className="me-2"  variant="danger" type="button">
                    Supprimer mon compte
                </Button>

                <div className="mt-3">
                    <p>cliquez ici pour <Link to="/editPassword">Modifier votre mot de passe</Link></p>
                </div>
            </div>
        
        </Form>
    );
}

export default AccountInfoForm;