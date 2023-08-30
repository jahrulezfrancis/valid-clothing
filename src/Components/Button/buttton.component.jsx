import { BaseButton, GoogleSignInButton, InvertedButton, StyledSpinner } from "./button.style";


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

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
    const CustomButton = GetButton(buttonType)
    return (
        <CustomButton disabled={isLoading} {...otherProps}> {isLoading ? <StyledSpinner /> : children}</CustomButton >
    )
}

export default Button;