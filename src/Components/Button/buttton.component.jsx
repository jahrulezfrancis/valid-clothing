import "./button.style.scss";


const Button_Types = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button className={`button-container ${Button_Types[buttonType]}`} {...otherProps}> {children}</button >
    )
}

export default Button;