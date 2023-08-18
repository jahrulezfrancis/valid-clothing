import { FormInputLabel, Grouped, Input } from "./form-input.style"

const FormInput = ({ label, ...inputProperties }) => {
    return (
        <Grouped>
            <Input className="form-input" {...inputProperties} />
            {label && (<FormInputLabel shrink={inputProperties.value.length}>{label}</FormInputLabel>)}
        </Grouped>
    )
}
export default FormInput;