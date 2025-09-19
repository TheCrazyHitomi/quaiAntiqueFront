import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ProgressBar } from 'react-bootstrap';
import { validatePassword, getStrengthLabel, getStrengthVariant } from '../../helpers/validatePassword';


function SignupForm() {

        const [isValidated, setIsValidated] = useState(false);

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [validatedPassword, setValidatedPassword] = useState('');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const {strength, conditions} = validatePassword(password);

        const handleValidateForm = (event) => {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }

            if (!emailRegex.test(email) || password !== validatedPassword) {
                event.preventDefault();
                event.stopPropagation();
            }
            setIsValidated(true);
        };

    return (
        <Form className='border rounded p-4' noValidate onSubmit={handleValidateForm}>

            <Form.Group className="mb-3" >
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" id="NomInput" placeholder="Entrez votre nom" required />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Prénom</Form.Label>
                <Form.Control type="text" id="PrenomInput" placeholder="Entrez votre prénom" required/>
                <Form.Control.Feedback>Yummy!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Adresse email</Form.Label>
                <Form.Control 
                        type="email" 
                        id="EmailInput" 
                        placeholder="Entrez votre email" 
                        onChange={(e) => setEmail(e.target.value)} 
                        isInvalid={isValidated && !emailRegex.test(email)}
                        required
                />
                <Form.Text className="text-muted">
                Nous ne partagerons jamais votre email avec qui que ce soit.
                </Form.Text>
                <Form.Control.Feedback type='invalid'>Adresse email invalide</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control 
                        type="password" 
                        id= "PasswordInput" 
                        value={password}
                        placeholder="Mot de passe" 
                        onChange={(e) => setPassword(e.target.value)} 
                        isInvalid={isValidated && strength < 3}
                        isValid={isValidated && strength >= 3} 
                        required />
                <ProgressBar className='mt-3' now={strength * 20} variant={getStrengthVariant(strength)} />
                <Form.Text className={`fw-bold text-${getStrengthVariant(strength)}`}>
                    Force du mot de passe: {getStrengthLabel(strength)}
                </Form.Text>
                <ul className="mt-2">
                    <li className={conditions.length ? 'text-success' : 'text-danger'}>Au moins 6 caractères</li>
                    <li className={conditions.uppercase ? 'text-success' : 'text-danger'}>Au moins une lettre majuscule</li>
                    <li className={conditions.lowercase ? 'text-success' : 'text-danger'}>Au moins une lettre minuscule</li>
                    <li className={conditions.number ? 'text-success' : 'text-danger'}>Au moins un chiffre</li>
                    <li className={conditions.special ? 'text-success' : 'text-danger'}>Au moins un caractère spécial (!@#$%^&*)</li>
                </ul>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Validez votre mot de passe</Form.Label>
                <Form.Control 
                        type="password" 
                        id= "validatedPasswordInput" 
                        value={validatedPassword}
                        placeholder="Mot de passe" 
                        onChange={(e) => setValidatedPassword(e.target.value)} 
                        isInvalid={isValidated && validatedPassword !== password}
                        isValid={isValidated && validatedPassword === password && password === validatedPassword}
                        required />
                <Form.Control.Feedback type='invalid'>Les mots de passe ne correspondent pas</Form.Control.Feedback>
            </Form.Group>

            <div className="text-center">
                <Button variant="danger mt-5" type="submit">
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