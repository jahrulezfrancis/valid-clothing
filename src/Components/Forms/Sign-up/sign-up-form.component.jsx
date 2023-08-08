import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../Utils/Firebase/firebase-.utils";
import Button from "../../Button/buttton.component";
import FormInput from "../../Input/form-input.component";
import "./sign-up-form.style.scss"

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const clearFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword)
            return;

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, { displayName });
            clearFormFields()

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert(`An accoun with ${email} already exist, please sign in with username and password`)
                return;
            }
            console.error(`There was a problem creating new user ${error}`);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value })
        console.log(formFields);
    }

    return (
        <div className="sign-up-form-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' onChange={handleChange} required name="displayName" type="text" value={displayName} />

                <FormInput label='Email Address' onChange={handleChange} required name="email" type="email" value={email} />

                <FormInput label='Password' onChange={handleChange} required name="password" type="password" value={password} />

                <FormInput label='Confirm Password' onChange={handleChange} required name="confirmPassword" type="password" value={confirmPassword} />

                <Button type='submit' buttonType='inverted' children="Sign Up" />
            </form>
        </div>
    )
}

export default SignUpForm;