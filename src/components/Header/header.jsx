import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
    <Navbar expand="lg" className="row justify-content-around bg-secondary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/" className='ms-2 ms-md-5'>
            <img src="public/images/logo.png" alt="Quai Antique Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-2 me-md-5'/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto me-5">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/galerie">Galerie</Nav.Link>
            <Nav.Link href="/">Notre Carte</Nav.Link>
            <Nav.Link href="/">Réservation</Nav.Link>
            <Nav.Link href="/">Mon Compte</Nav.Link>
            <Nav.Link className="text-info" href="/">Connexion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;