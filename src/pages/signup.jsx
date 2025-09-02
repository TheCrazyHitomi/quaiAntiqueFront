import SignupForm from "../components/signupForm/signupForm";
import SignupTitle from "../components/Title/titre-inscription";

const Signup = () => {
    return (
        <div className="my-5">
            <SignupTitle/>
            <div className="d-flex justify-content-center my-5">
                <SignupForm />
            </div>
        </div>
    );
}

export default Signup;
