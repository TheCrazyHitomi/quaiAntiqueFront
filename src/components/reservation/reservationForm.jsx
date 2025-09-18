import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ReservationForm = ( { handleOpenDeleteResaModal, handleOpenValidateResaModal, formData, setFormData } ) => {

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

    const horaires = formData.service === "midi" ? horairesMidi : horairesSoir;

    const [isValidated, setIsValidated] = useState(false);

    const handleValidateForm = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false ||
            formData.nbConvives < 1 || formData.nbConvives > 20 || !formData.date || !formData.horaire) {
            event.preventDefault();
            setIsValidated(true);
            return
        }
        setIsValidated(true);
        event.preventDefault();
        event.stopPropagation();
        handleOpenValidateResaModal();
    }


    return (
        <div className='container mb-5'>
            <Form className='border rounded p-4' noValidate onSubmit={handleValidateForm}>

                <div className='row d-flex justify-content-between'>
                    <Form.Group className="mb-3 w-50" >
                        <Form.Label>Nom</Form.Label>
                        <Form.Control type="text" id="NomInput" value="Sebastien" disabled/>
                    </Form.Group>

                    <Form.Group className="mb-3 w-50" >
                        <Form.Label>Prénom</Form.Label>
                        <Form.Control type="text" id="PrenomInput" value="Patoch'" disabled/>
                    </Form.Group>
                </div>

                <Form.Group className="mb-3" >
                    <Form.Label>Allergies</Form.Label>
                    <Form.Control 
                        type="text" 
                        id="AllergiesInput" 
                        placeholder="Entrez vos allergies" 
                        value={formData.allergies}
                        onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Nombre de convives habituels</Form.Label>
                    <Form.Control
                        type="number"
                        id="nbConvivesInput"
                        placeholder="Nombre de convives"
                        value={formData.nbConvives}
                        onChange={(e) => setFormData({ ...formData, nbConvives: e.target.value })}
                        isInvalid={isValidated && (formData.nbConvives < 1 || formData.nbConvives > 20)}
                        required
                    />
                    <Form.Control.Feedback type="invalid">veuillez entrer un nombre de convives</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Date de réservation</Form.Label>
                    <Form.Control
                        type="date"
                        id="DateInput"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        isInvalid={isValidated && !formData.date}
                        required
                    />
                    <Form.Control.Feedback type="invalid">veuillez entrer une date</Form.Control.Feedback>
                </Form.Group>


                <div className='row d-flex justify-content-between align-items-center'>
                <Form.Group className="mb-3 w-50" >
                    <Form.Label>Heure de réservation</Form.Label>
                    <Form.Check
                        type="radio"
                        name="service"
                        id="midi"
                        value="midi"
                        label="Midi"
                        checked={formData.service === "midi"}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        required
                    />
                    
                    <Form.Check
                        type="radio"
                        name="service"
                        id="soir"
                        value="soir"
                        label="Soir"
                        checked={formData.service === "soir"}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        required
                    />
                </Form.Group>

                <Form.Select
                    className='w-50 h-100'
                    aria-label="Default select example"
                    value={formData.horaire}
                    onChange={(e) => setFormData({ ...formData, horaire: e.target.value })}
                    isInvalid={isValidated && !formData.horaire}
                    required
                >
                    <option>Heure de réservation</option> // a modifier plus tard
                    {horaires.map((h, index) => (
                        <option key={index} value={h}> 
                        {h} 
                        </option>
                    ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">veuillez entrer une horaire</Form.Control.Feedback>
                </div>

                <div className="text-center mt-4">
                    <Button className="me-2" variant="danger" type="submit">
                        Réserver
                    </Button>

                    <Button className="me-2"  variant="primary" type="button" onClick={handleOpenDeleteResaModal} >
                        Annuler
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default ReservationForm;
