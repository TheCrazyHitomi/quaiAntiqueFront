import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ConnexionForm() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
     const [isValidated, setIsValidated] = useState(false);

    const checkCredentials = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    setIsValidated(true);

    // Ici, normalement → appel API avec fetch/axios
    if (email === "pipoudou@test.com" && password === "pachiderme") {
      const token =
        "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";

      // Simule setToken()
      localStorage.setItem("token", token);

      // Simule setCookie()
      document.cookie = `RoleCookieName=admin; max-age=${7 * 24 * 60 * 60}; path=/`;

      // Redirection
      window.location.replace("/");
    } else {
      // Les feedbacks invalides s’afficheront grâce à isInvalid
    }
  };

    return (
        <Form className='border rounded p-4' noValidate onSubmit={checkCredentials}>

        {/* Email Form */}
        <Form.Group className="mb-3" controlId="EmailInput">
            <Form.Label>Adresse email</Form.Label>
            <Form.Control 
                type="email" 
                placeholder="Entrez votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={isValidated && email !== "pipoudou@test.com"}
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
        <Form.Group className="mb-3" controlId="PasswordInput">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Mot de passe" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={isValidated && password !== "pachiderme"}
            required
            />
            <Form.Control.Feedback type="invalid">
              Mot de passe incorrect
            </Form.Control.Feedback>
        </Form.Group>

        {/* Remember Me Checkbox */}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Se souvenir de moi" />
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