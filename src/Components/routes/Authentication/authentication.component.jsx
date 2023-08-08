import SingInForm from "../../Forms/Sign-in/sign-in-form.component";
import SignUpForm from "../../Forms/Sign-up/sign-up-form.component";
import "./authentication.style.scss"

const Authentication = () => {

    return (
        <div className="auth-container">
            <SingInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;