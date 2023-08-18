import SingInForm from "../../Forms/Sign-in/sign-in-form.component";
import SignUpForm from "../../Forms/Sign-up/sign-up-form.component";
import {AuthContainer} from "./authentication.style"

const Authentication = () => {

    return (
        <AuthContainer>
            <SingInForm />
            <SignUpForm />
        </AuthContainer>
    )
}

export default Authentication;