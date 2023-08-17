import { BaseButton, GoogleSignInButton, InvertedButton } from "./button.style";


export const Button_Types = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
}

const GetButton = (buttonType = Button_Types.base) => (
    {
        [Button_Types.base]: BaseButton,
        [Button_Types.google]: GoogleSignInButton,
        [Button_Types.inverted]: InvertedButton,

    }[buttonType]
)

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = GetButton(buttonType)
    return (
        <CustomButton {...otherProps}> {children}</CustomButton >
    )
}

export default Button;