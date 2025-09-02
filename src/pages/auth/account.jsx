import AccountInfoForm from "../../components/account/accountForm";
import AccountTitle from "../../components/Title/accountTitle";

const AccountPage = () => {
    return (
        <div>
            <AccountTitle />
            <div className="d-flex justify-content-center my-5">
                <AccountInfoForm />
            </div>
        </div>
    );
}

export default AccountPage;
