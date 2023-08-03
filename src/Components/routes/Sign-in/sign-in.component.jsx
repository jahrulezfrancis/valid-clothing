import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../Utils/Firebase/firebase-.utils";

const Signin = () => {
    const GoogleSignIn = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef);
    };
    return (
        <div className="sign-in-container">
            <button onClick={GoogleSignIn} style={{
                padding: "7px", outline: 'none', cursor: "pointer",
                borderRadius: "5px", border: '.1px solid grey'
            }}>
                Sign in with Google
            </button>
        </div>
    )
}

export default Signin;