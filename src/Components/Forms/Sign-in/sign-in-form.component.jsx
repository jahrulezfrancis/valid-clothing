import { Fragment, useState } from "react"
import { loginAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from "../../Utils/Firebase/firebase-.utils";
import Button from "../../Button/buttton.component";
import FormInput from "../../Input/form-input.component";
import "./sign-in-form.style.scss"

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const clearFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const GoogleSignIn = async () => {
        const { user } = await signInWithGooglePopup();

        await createUserDocumentFromAuth(user);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()


        try {
            const response = await loginAuthUserWithEmailAndPassword(email, password)
            console.log(response);
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password, please try again')
                    break;
                case 'auth/user-not-found':
                    alert('user not found, please check your email and try again')
                    break;

                default:
                    console.log(error);
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value })
        console.log(formFields);
    }

    return (
        <div className="sign-in-form-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password or google account</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email Address' onChange={handleChange} required name="email" type="email" value={email} />

                <FormInput label='Password' onChange={handleChange} required name="password" type="password" value={password} />

                <div className="buttons-container">
                    <Button type='submit' buttonType='inverted' children="Sign in" />
                    <Button type='button' onClick={GoogleSignIn} buttonType='google' children="Google sign in" />
                </div>
            </form>
        </div>
    )
}

export default SignInForm;