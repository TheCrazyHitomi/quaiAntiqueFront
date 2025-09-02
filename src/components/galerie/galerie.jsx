const Galerie = () => {
    return (
        <div className="container">
            <div className="row row-cols-2 row-cols-lg-3">
                <div className="col my-4">
                    <div className="image-card text-center">
                        <img src="src/assets/images/rawfish.png" alt="Image 1" className="rounded w-100" />
                        <p className="titre-image">Titre</p>
                        <div className="image-overlay"></div>
                    </div>
                </div>
                <div className="col my-4">
                    <div className="image-card text-center">
                        <img src="src/assets/images/rawbeef.png" alt="Image 2" className="rounded w-100" />
                        <p className="titre-image">Titre</p>
                        <div className="image-overlay"></div>
                    </div>
                </div>
                <div className="col my-4">
                    <div className="image-card text-center">
                        <img src="src/assets/images/rawchicken.png" alt="Image 3" className="rounded w-100" />
                        <p className="titre-image">Titre</p>
                        <div className="image-overlay"></div>
                    </div>
                </div>
                <div className="col my-4">
                    <div className="image-card text-center">
                        <img src="src/assets/images/rawfish2.png" alt="Image 4" className="rounded w-100" />
                        <p className="titre-image">Titre</p>
                        <div className="image-overlay"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Galerie;
