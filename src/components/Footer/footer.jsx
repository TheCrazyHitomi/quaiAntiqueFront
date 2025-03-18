const Footer = () => {

    return (
        <footer className="d-flex bg-secondary text-black text-center p-2 p-lg-4 w-100 justify-content-evenly align-content-center font-monospace">
        <div className="row align-items-center justify-content-center  w-auto">
            <div className="col-5 col-lg-4 text-end w-auto">
                <p className="responsive-text">12 Boulevard Robert Barrier <br /> 
                73100 Aix-les-Bains<br/>
                <br/>
                quai-antique@contact.fr</p>
            </div>
            <div className="col-2 vr w-3 p-0 m-1 bg-danger opacity-100 rounded-1 "></div>
            <div className="col-5 col-lg-4 ps-md-2  pe-md-2  text-start w-auto">
                <p className="responsive-text">Ouvert <br />
                du Mardi au Dimanche <br />
                service de <br />
                12h-14h & 19h30-21h30
                </p>
        </div>
            </div>
            <div className="d-none d-lg-block col-lg-4 text-end w-auto">
            <nav className="nav flex-column  ">
                <a className="responsive-text text-decoration-none text-black" href="/">Accueil</a>
                <a className="responsive-text text-decoration-none text-black" href="/galerie">Galerie</a>
                <a className="responsive-text text-decoration-none text-black" href="/">Notre Carte</a>
                <a className="responsive-text text-decoration-none text-black" href="/">Réservation</a>
                <a className="responsive-text text-decoration-none text-black" href="/">Mon Compte</a>
                <a className="responsive-text text-decoration-none text-light" href="/">Connexion</a>
            </nav>
            </div>
    </footer>
    )
    }

export default Footer