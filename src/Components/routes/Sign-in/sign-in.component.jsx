import Button from "../../Button/buttton.component";
import SignUpForm from "../../Sign-up/sign-up-form.component";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../Utils/Firebase/firebase-.utils";

const Signin = () => {
    const GoogleSignIn = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };


    return (
        <div className="sign-in-container">
            <Button onClick={GoogleSignIn} buttonType='google' children={'Sign in with Popup'} />
            <SignUpForm />
        </div>
    )
}

export default Signin;