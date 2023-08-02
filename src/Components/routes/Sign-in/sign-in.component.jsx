import { SignInWithGooglePopup } from "../../Utils/Firebase/firebase-.utils";

const Signin = () => {
    const GoogleSignIn = async () => {
        const response = await SignInWithGooglePopup();
        console.log(response);
    }
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