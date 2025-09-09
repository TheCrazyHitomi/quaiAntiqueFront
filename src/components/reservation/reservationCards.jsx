import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ReservationCard() {
    return (
        <div className="container mb-5">
            <Card className="text-center">
            <Card.Header>Réservation</Card.Header>
            <Card.Body>
                <Card.Title>10.09.2025</Card.Title>
                <Card.Text>
                5 personnes
                </Card.Text>
                <Card.Text>
                aucunes allergies
                </Card.Text>
                <div className='me-2'>
                <Button variant="primary mx-2">Modifier</Button>
                <Button variant="danger mx-2">Supprimer</Button>
                </div>
            </Card.Body>
            <Card.Footer className="text-muted">2 days left</Card.Footer>
            </Card>
        </div>
    );
}

export default ReservationCard;