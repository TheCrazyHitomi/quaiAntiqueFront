import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Carte = () => {

        const entrées = [
            { id: 1, name: "Œuf parfait à la truffe noire, espuma de parmesan" },
            { id: 2, name: "Tartare de bar et agrumes, huile d’olive vierge" },
            { id: 3, name: "Velouté de potimarron et éclats de châtaignes" },
            { id: 4, name: "Croustillant de chèvre, miel et noix" },
            { id: 5, name: "Foie gras de canard maison, chutney de figues, brioche toastée" },
            { id: 6, name: "Carpaccio de Saint-Jacques, vinaigrette aux fruits de la passion" },
            { id: 7, name: "Salade tiède de poulpe grillé, tomates confites et roquette" }
        ];
        
        const plats = [
            { id: 1, name: "viandes", items: [
                { id: 1, name: "Filet de bœuf maturé, sauce bordelaise, purée de pommes de terre truffée" },
                { id: 2, name: "Magret de canard rôti, réduction balsamique et miel, gratin dauphinois" },
                { id: 3, name: "Carré d’agneau en croûte d’herbes, légumes de saison glacés" },
                { id: 4, name: "Volaille fermière façon demi-deuil, jus corsé" }
            ]},
            { id: 2, name: "poissons", items: [
                { id: 1, name: "Pavé de bar rôti, mousseline de céleri, émulsion citronnée" },
                { id: 2, name: "Filet de sole meunière, beurre noisette, pommes vapeur" },
                { id: 3, name: "Saumon confit basse température, crème d’aneth et asperges vertes" }
            ]},
            { id: 3, name: "vegan", items: [
                { id: 1, name: "Risotto crémeux aux cèpes et copeaux de parmesan" },
                { id: 2, name: "Ravioles de ricotta et épinards, beurre de sauge" },
                { id: 3, name: "Tian de légumes du soleil, coulis de basilic" }
            ]}
        ];

        const fromages = [
            { id: 1, name: "Assiette de fromages affinés sélectionnés par notre maître fromager" },
            { id: 2, name: "Brie truffé maison accompagné de pain aux noix" },
        ];

        const desserts = [
            { id: 1, name: "Moelleux au chocolat grand cru, cœur coulant au praliné" },
            { id: 2, name: "Tarte fine aux pommes caramélisées, glace vanille bourbon" },
            { id: 3, name: "Mille-feuille à la vanille de Madagascar" },
            { id: 4, name: "Crème brûlée à la fève tonka" },
            { id: 5, name: "Soufflé au Grand Marnier" },
            { id: 6, name: "Assiette de fruits frais exotiques" }
        ];

    return (
        <div className="container my-5">
            <h1 className='text-center text-primary mt-4'>entrées</h1>
            <hr className='mb-5'/>
            <ul>
                {entrées.map((entrée) => (
                    <li className='my-3' key={entrée.id}>{entrée.name}</li>
                ))}
            </ul>
            <h1 className='text-center text-primary mt-5'>plats</h1>
            <hr className='mb-5'/>
            <ul>
                {plats.map((plat) => (
                    <React.Fragment key={plat.id}>
                        <li className='text-primary fw-bold fs-5 my-4'>{plat.name}</li>
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
