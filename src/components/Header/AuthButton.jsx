import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { AuthContext } from "../../context/AuthContext";



function AuthNavLink() {
    const {isLoggedIn, logout} = useContext(AuthContext);


    return isLoggedIn ? (
        <Nav.Link className="text-light fw-medium" href="/deconnexion" onClick={logout}>
            Déconnexion
        </Nav.Link>
    ) : (
        <Nav.Link className="text-light fw-medium" href="/connexion">
            Connexion
        </Nav.Link>
    );
}

export default AuthNavLink;