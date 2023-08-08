import SignUpForm from "../../Sign-up/sign-up-form.component";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../Utils/Firebase/firebase-.utils";

const Signin = () => {
    const GoogleSignIn = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };


    return (
        <div className="sign-in-container">
            <button onClick={GoogleSignIn} style={{
                padding: "7px", outline: 'none', cursor: "pointer",
                borderRadius: "5px", border: '.1px solid grey'
            }}>
                Sign in with Popup
            </button>
            <SignUpForm />
        </div>
    )
}

export default Signin;