import ConnexionTitle from "../../components/Title/title-connexion"
import ConnexionForm from "../../components/connexionForm/connexionForm";

const Signin = () => {
    return (
        <div>
            <ConnexionTitle />
            <div className="d-flex justify-content-center my-5">
                <ConnexionForm />
            </div>
        </div>
    );
}

export default Signin;
