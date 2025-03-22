import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
    <Navbar expand="lg" className="row d-flex justify-content-around bg-dark p-4 m-0" data-bs-theme="dark" >
      <Container className="p-0">
        <Navbar.Brand href="/" className='ms-2 ms-md-5'>
            <img src="src/assets/images/logo.png" alt="Quai Antique Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='z-3 position-relative  me-md-5  border-0'/>
        <Navbar.Collapse id="basic-navbar-nav" className='z-1 position-absolute top-0 end-0 bg-dark rounded-bottom-3 mw-30 me-5 mt-3 p-2'>
          <Nav className="d-flex ms-auto align-items-end align-items-lg-center">
            <Nav.Link className="text-white fw-lighter" href="/">Accueil</Nav.Link>
            <Nav.Link className="text-white fw-lighter" href="/galerie">Galerie</Nav.Link>
            <Nav.Link className="text-white fw-lighter" href="/">Notre Carte</Nav.Link>
            <Nav.Link className="text-white fw-lighter" href="/">Réservation</Nav.Link>
            <Nav.Link className="text-white fw-lighter" href="/">Mon Compte</Nav.Link>
            <Nav.Link className="text-light fw-medium " href="/">Connexion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;