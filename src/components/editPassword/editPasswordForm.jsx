import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

import { ProgressBar } from 'react-bootstrap';
import useValidatePassword from '../../hooks/validatePassword';

const EditPasswordForm = () => {

    const [isValidated, setIsValidated] = useState(false);
    const [password, setPassword] = useState('');

    const {strength, conditions, getStrengthLabel, getStrengthVariant} = useValidatePassword(password);

    const handleValidateEditForm = (event) => {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }

            if (strength < 3) {
                event.preventDefault();
                event.stopPropagation();
            }
            setIsValidated(true);
        };


    return (
        <Form className='border rounded p-4' noValidate onSubmit={handleValidateEditForm}>
            <Form.Group className="mb-3" >
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control type="password" id= "PasswordInput" placeholder="Mot de passe" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Validez votre mot de passe</Form.Label>
                <Form.Control 
                    type="password" 
                    id= "validatedPasswordInput" 
                    value={password} 
                    placeholder="Mot de passe" 
                    onChange={(e) => setPassword(e.target.value)} 
                        isInvalid={isValidated && strength < 3}
                        isValid={isValidated && strength >= 3} 
                        required />
                <ProgressBar className='mt-3' now={strength * 20} variant={getStrengthVariant()} />
                <Form.Text className={`fw-bold text-${getStrengthVariant()}`}>
                    Force du mot de passe: {getStrengthLabel()}
                </Form.Text>
                <ul className="mt-2">
                    <li className={conditions.length ? 'text-success' : 'text-danger'}>Au moins 6 caractères</li>
                    <li className={conditions.uppercase ? 'text-success' : 'text-danger'}>Au moins une lettre majuscule</li>
                    <li className={conditions.lowercase ? 'text-success' : 'text-danger'}>Au moins une lettre minuscule</li>
                    <li className={conditions.number ? 'text-success' : 'text-danger'}>Au moins un chiffre</li>
                    <li className={conditions.special ? 'text-success' : 'text-danger'}>Au moins un caractère spécial (!@#$%^&*)</li>
                </ul>
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
