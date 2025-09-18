import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { AuthContext } from '../../context/AuthContext';
import { users } from '../../utils/users';

function ConnexionForm() {

    const { login } = useContext(AuthContext);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isValidated, setIsValidated] = useState(false);
    const [loginError, setLoginError] = useState(false);



    // -- Vérification des identifiants --
    const checkCredentials = (event) => {
        event.preventDefault(); // Empêche le rechargement de la page
        setIsValidated(true);

        // On "cherche" l'utilisateur dans notre tableau
    const userFound = users.find(
        (u) => u.email === email && u.password === password
    );

    if (userFound) {
        console.log("Appel de login avec :", userFound.token, userFound.role);
        login(userFound.token, userFound.role, rememberMe); // Met à jour le contexte global

        // Redirection
            window.location.replace("/");
        } else {
            console.log("Identifiants invalides");
            setLoginError(true);
        }
    };

    return (
        <Form className='border rounded p-4' noValidate onSubmit={checkCredentials}>

        {/* Email Form */}
        <Form.Group className="mb-3" >
            <Form.Label>Adresse email</Form.Label>
            <Form.Control 
                type="email" 
                placeholder="Entrez votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={isValidated && loginError}
                required
            />
            <Form.Text className="text-muted">
            Nous ne partagerons jamais votre email avec qui que ce soit.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
                Adresse email incorrecte
            </Form.Control.Feedback>
        </Form.Group>


        {/* Password Form */}
        <Form.Group className="mb-3">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Mot de passe" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={isValidated && loginError}
            required
            />
            <Form.Control.Feedback type="invalid">
                Mot de passe incorrect
            </Form.Control.Feedback>
        </Form.Group>

        {/* Remember Me Checkbox */}
        <Form.Group className="mb-3">
            <Form.Check 
            type="checkbox" 
            label="Se souvenir de moi" 
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            />
        </Form.Group>

        {/* Submit Button */}
        <div className="text-center">
            <Button variant="danger" type="submit" id="btnSignin" >
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