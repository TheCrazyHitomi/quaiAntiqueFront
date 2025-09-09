import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ReservationForm = ( { service, setService, horaire, setHoraire,handleOpenDeleteResaModal } ) => {

     // Fonction pour générer les créneaux
    const generateHoraires = (start, end, interval) => {
        const horaires = [];
        let current = new Date(start);

        while (current <= end) {
        let hours = current.getHours().toString().padStart(2, "0");
        let minutes = current.getMinutes().toString().padStart(2, "0");
        horaires.push(`${hours}:${minutes}`);
        current.setMinutes(current.getMinutes() + interval);
        }

        return horaires;
    };

    // Créneaux selon le service
    const horairesMidi = generateHoraires(
        new Date(2025, 0, 1, 12, 0), // 12h00
        new Date(2025, 0, 1, 14, 0), // 14h00
        15
    );

    const horairesSoir = generateHoraires(
        new Date(2025, 0, 1, 19, 0), // 19h00
        new Date(2025, 0, 1, 21, 0), // 21h00
        15
    );

    const horaires = service === "midi" ? horairesMidi : horairesSoir;

    return (
        <div className='container mb-5'>
            <Form className='border rounded p-4'>

                <div className='row d-flex justify-content-between'>
                    <Form.Group className="mb-3 w-50" controlId="formBasicNom">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control type="text" id="NomInput" value="Sebastien" disabled/>
                    </Form.Group>

                    <Form.Group className="mb-3 w-50" controlId="formBasicPrenom">
                        <Form.Label>Prénom</Form.Label>
                        <Form.Control type="text" id="PrenomInput" value="Patoch'" disabled/>
                    </Form.Group>
                </div>

                <Form.Group className="mb-3" controlId="formBasicAllergies">
                    <Form.Label>Allergies</Form.Label>
                    <Form.Control type="text" id="AllergiesInput" placeholder="Entrez vos allergies" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNbConvives">
                    <Form.Label>Nombre de convives habituels</Form.Label>
                    <Form.Control type="number" id= "nbConvivesInput" placeholder="Nombre de convives" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Date de réservation</Form.Label>
                    <Form.Control type="date" id="DateInput" />
                </Form.Group>


                <div className='row d-flex justify-content-between align-items-center'>
                <Form.Group className="mb-3 w-50" controlId="formBasicHeure">
                    <Form.Label>Heure de réservation</Form.Label>
                    <Form.Check type="radio" name="service" id="midi" value="midi" label="Midi" checked={service === "midi"} onChange={(e) => setService(e.target.value)} />
                    <Form.Check type="radio" name="service" id="soir" value="soir" label="Soir" checked={service === "soir"} onChange={(e) => setService(e.target.value)} />
                </Form.Group>

                <Form.Select className='w-50 h-100' aria-label="Default select example" value={horaire} onChange={(e) => setHoraire(e.target.value)}>
                    <option>Heure de réservation</option> // a modifier plus tard
                    {horaires.map((h, index) => (
                        <option key={index} value={h}> 
                        {h} 
                        </option>
                    ))}
                </Form.Select>
                </div>

                <div className="text-center mt-4">
                    <Button className="me-2" variant="danger" type="submit" >
                        Réserver
                    </Button>

                    <Button className="me-2"  variant="primary" type="button" onClick={handleOpenDeleteResaModal}>
                        Annuler
                    </Button>
                </div>


            
            </Form>
        </div>
    );
}

export default ReservationForm;
