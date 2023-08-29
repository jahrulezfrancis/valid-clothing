import { useState } from "react"
import { Button_Types } from "../../Button/buttton.component"
import { loginAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from "../../Utils/Firebase/firebase.utils";
import Button from "../../Button/buttton.component";
import FormInput from "../../Input/form-input.component";
import { FormContainer, FormButtonsContainer } from "./sign-in-form.style"
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [isSubmiting, setIsSubmiting] = useState(false)
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const navigate = useNavigate()

    const GoogleSignIn = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
        setIsSubmiting(true)
        navigate("/shop")
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await loginAuthUserWithEmailAndPassword(email, password)
            setIsSubmiting(true)
            setTimeout(() => {
                navigate("/shop")
            }, 2000)
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password, please try again')
                    setIsSubmiting(false)
                    break;
                case 'auth/user-not-found':
                    alert('user not found, please check your email and try again')
                    setIsSubmiting(false)
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <FormContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password or google account</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email Address' onChange={handleChange} required name="email" type="email" value={email} />

                <FormInput label='Password' onChange={handleChange} required name="password" type="password" value={password} />

                <FormButtonsContainer>
                    <Button type='submit' buttonType={Button_Types.base} style={isSubmiting ? disabledButtonStyle : null} children={isSubmiting ? "Loading..." : "Sign in"} />
                    <Button type='button' onClick={GoogleSignIn} buttonType={Button_Types.google} style={isSubmiting ? disabledButtonStyle : null} children={"Google sign in"} />
                </FormButtonsContainer>
            </form>
        </FormContainer>
    )
}

export default SignInForm;


const disabledButtonStyle = {
    cursor: 'not-allowed',
    opacity: 0.6,
    pointerEvents: 'none',
    border: '1px solid #CCCCCC'
};