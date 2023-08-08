import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../Utils/Firebase/firebase-.utils";
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
        <div className="group">
            <h2>Sign up form</h2>
            <form onSubmit={handleSubmit}>
                <label className="form-input-label" >Display Name</label>
                <input className="form-input" name="displayName" type="text" onChange={handleChange} value={displayName} />

                <label className="form-input-label" htmlFor="email">Email Address</label>
                <input className="form-input" onChange={handleChange} name="email" type="email" value={email} />

                <label className="form-input-label" htmlFor="password">Password</label>
                <input className="form-input" onChange={handleChange} name="password" type="password" value={password} />

                <label className="form-input-label" htmlFor="confirmPassword">Confirm Password</label>
                <input className="form-input" onChange={handleChange} name="confirmPassword" type="password" value={confirmPassword} />

                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;