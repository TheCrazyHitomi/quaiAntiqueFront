import { Button } from "react-bootstrap";

const ReservationButton = () => {
    return (
        <div className="bg-danger">
            <div className="text-center py-5">
                <Button href="/reserver" className="btn btn-light px-5">Réserver</Button>
            </div>
        </div>
    );
}

export default ReservationButton;
