import "./form-input.style.scss"

const FormInput = ({ label, ...inputProperties }) => {
    return (
        <div className="group">
            <input className="form-input" {...inputProperties} />
            {label && (<label className={`${inputProperties.value.length > 0 ? 'shrink' : ''} form-input-label`}>{label}</label>)}
        </div>
    )
}
export default FormInput;