import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
    <Navbar expand="lg" className="row justify-content-around bg-dark" data-bs-theme="dark" >
      <Container>
        <Navbar.Brand href="/" className='ms-2 ms-md-5'>
            <img src="public/images/logo.png" alt="Quai Antique Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='z-3 position-relative me-2 me-md-5 p-2 border-0'/>
        <Navbar.Collapse id="basic-navbar-nav" className='z-1 position-absolute top-0 end-0 bg-dark rounded-bottom-3 mw-30 me-0 mt-10 p-2'>
          <Nav className="d-flex ms-auto me-5 align-items-end">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/galerie">Galerie</Nav.Link>
            <Nav.Link href="/">Notre Carte</Nav.Link>
            <Nav.Link href="/">Réservation</Nav.Link>
            <Nav.Link href="/">Mon Compte</Nav.Link>
            <Nav.Link className="text-light" href="/">Connexion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;