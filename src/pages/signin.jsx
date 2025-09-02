import ConnexionForm from "../components/connexionForm/connexionForm";
import ConnexionTitle from "../components/Title/title-connexion";

const Signin = () => {
    return (
        <div  className="my-5">
            <ConnexionTitle />
            <div className="d-flex justify-content-center my-5">
                <ConnexionForm />
            </div>
        </div>
    );
}

export default Signin;
