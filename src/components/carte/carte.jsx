import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateEntry from './createEntry';
import { AuthContext } from "../../context/AuthContext";
import { useModal } from '../../context/ModalContext';
import EditEntry from './editEntry';
import DeleteEntry from './deleteEntry';



const carte = [
    { id: 1, name: "Œuf parfait à la truffe noire, espuma de parmesan", catégorie: "entrées", prix: 14 },
    { id: 2, name: "Tartare de bar et agrumes, huile d’olive vierge", catégorie: "entrées", prix: 16 },
    { id: 3, name: "Velouté de potimarron et éclats de châtaignes", catégorie: "entrées", prix: 12 },
    { id: 4, name: "Croustillant de chèvre, miel et noix", catégorie: "entrées", prix: 15 },
    { id: 5, name: "Foie gras de canard maison, chutney de figues, brioche toastée", catégorie: "entrées", prix: 22 },
    { id: 6, name: "Carpaccio de Saint-Jacques, vinaigrette aux fruits de la passion", catégorie: "entrées", prix: 18 },
    { id: 7, name: "Salade tiède de poulpe grillé, tomates confites et roquette", catégorie: "entrées", prix: 16 },
    { id: 8, name: "Filet de bœuf maturé, sauce bordelaise, purée de pommes de terre truffée", catégorie: "plats", sousCatégorie: "viandes", prix: 32 },
    { id: 9, name: "Magret de canard rôti, réduction balsamique et miel, gratin dauphinois", catégorie: "plats", sousCatégorie: "viandes", prix: 28 },
    { id: 10, name: "Carré d’agneau en croûte d’herbes, légumes de saison glacés", catégorie: "plats", sousCatégorie: "viandes", prix: 30 },
    { id: 11, name: "Volaille fermière façon demi-deuil, jus corsé", catégorie: "plats", sousCatégorie: "viandes", prix: 26 },
    { id: 12, name: "Pavé de bar rôti, mousseline de céleri, émulsion citronnée", catégorie: "plats", sousCatégorie: "poissons", prix: 28 },
    { id: 13, name: "Filet de sole meunière, beurre noisette, pommes vapeur", catégorie: "plats", sousCatégorie: "poissons", prix: 30 },
    { id: 14, name: "Saumon confit basse température, crème d’aneth et asperges vertes", catégorie: "plats", sousCatégorie: "poissons", prix: 32 },
    { id: 15, name: "Risotto crémeux aux cèpes et copeaux de parmesan", catégorie: "plats", sousCatégorie: "végétarien", prix: 24 },
    { id: 16, name: "Ravioles de ricotta et épinards, beurre de sauge", catégorie: "plats", sousCatégorie: "végétarien", prix: 26 },
    { id: 17, name: "Tian de légumes du soleil, coulis de basilic", catégorie: "plats", sousCatégorie: "végétarien", prix: 22 },
    { id: 18, name: "Assiette de fromages affinés sélectionnés par notre maître fromager", catégorie: "fromages", prix: 18 },
    { id: 19, name: "Brie truffé maison accompagné de pain aux noix", catégorie: "fromages", prix: 16 },
    { id: 20, name: "Moelleux au chocolat grand cru, cœur coulant au praliné", catégorie: "desserts", prix: 10 },
    { id: 21, name: "Tarte fine aux pommes caramélisées, glace vanille bourbon", catégorie: "desserts", prix: 12 },
    { id: 22, name: "Mille-feuille à la vanille de Madagascar", catégorie: "desserts", prix: 14 },
    { id: 23, name: "Crème brûlée à la fève tonka", catégorie: "desserts", prix: 12 },
    { id: 24, name: "Soufflé au Grand Marnier", catégorie: "desserts", prix: 14 },
    { id: 25, name: "Assiette de fruits frais exotiques", catégorie: "desserts", prix: 10 }
];

const entrées = carte.filter(item => item.catégorie === "entrées");
const plats = carte.filter(item => item.catégorie === "plats").reduce((acc, plat) => {
    let category = acc.find(cat => cat.sousCatégorie === plat.sousCatégorie);
    if (!category) {
        category = { sousCatégorie: plat.sousCatégorie, items: [] };
        acc.push(category);
    }
    category.items.push(plat);
    return acc;
}, []);
const fromages = carte.filter(item => item.catégorie === "fromages");
const desserts = carte.filter(item => item.catégorie === "desserts");

const Carte = () => {

    const { role } = useContext(AuthContext);
    const { activeModal, closeModal, openModal } = useModal();

    return (
        <div className="container my-5">
            <div className='text-end'>
                {role === "admin" && (
                    <CreateEntry showModal={activeModal === "createEntry"} openModal={openModal} closeModal={closeModal} />
                )}
            </div>
            <h1 className='text-center text-primary mt-4'>entrées</h1>
            <hr className='mb-5'/>
            <ul>
                {entrées.map((entrée) => (
                    <li className='d-flex justify-content-between align-items-center my-3' key={entrée.id}>
                        <div className='d-flex justify-content-between align-items-center w-100'>
                            {entrée.name}
                            <div className="d-flex ">
                                {role === "admin" && (
                                    <div className='d-flex'>
                                        <EditEntry showModal={activeModal === "editEntry"} openModal={openModal} closeModal={closeModal} />
                                        <DeleteEntry showModal={activeModal === "deleteEntry"} openModal={openModal} closeModal={closeModal} />
                                    </div>
                                )}
                            </div>
                            
                        </div>
                    </li>
                ))}
            </ul>
            <h1 className='text-center text-primary mt-5'>plats</h1>
            <hr className='mb-5'/>
            <ul>
                {plats.map((plat) => (
                    <React.Fragment key={plat.id}>
                        <li className='text-primary fw-bold fs-5 my-4'>{plat.sousCatégorie}</li>
                        <ul>
                            {plat.items.map((item) => (
                                <li className='my-3' key={item.id}>{item.name}</li>
                            ))}
                        </ul>
                    </React.Fragment>
                ))}
            </ul>
            <h1 className='text-center text-primary mt-5'>fromages</h1>
            <hr className='mb-5'/>
            <ul>
                {fromages.map((fromage) => (
                    <li className='my-3' key={fromage.id}>{fromage.name}</li>
                ))}
            </ul>
            <h1 className='text-center text-primary mt-5'>desserts</h1>
            <hr className='mb-5'/>
            <ul>
                {desserts.map((dessert) => (
                    <li className='my-3' key={dessert.id}>{dessert.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Carte;
