import EditPasswordForm from "../../components/editPassword/editPasswordForm";
import AccountTitle from "../../components/Title/accountTitle";

const EditPasswordPage = () => {
    return (
        <div>
            <AccountTitle />
            <div className="d-flex justify-content-center my-5">
                <EditPasswordForm />
            </div>
        </div>
    );
}

export default EditPasswordPage;
