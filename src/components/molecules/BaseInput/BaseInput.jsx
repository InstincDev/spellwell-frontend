import { useState } from "react";
import { form_label } from "../../../styling/form.module.sass";
import userInputEnums from "../../../utils/userInputEnums";
import { InputToolTip } from "../../atoms";

// ToDo
    // reset tooltip state when user corrects errors
    //  refactor other form inputs


export function BaseInput({ name, type, placeholder, onChange, value }) {
    const [checkPassword, setCheckPassword] = useState(false);
    const [isValid, setIsValid] = useState(true)
    const [toolTipMessage, setToolTipMessage] = useState(null)

    const handleInvalid = (e) => {
        const input = e.target
        
        // disable customValidity tooltip
            // input.setCustomValidity("Nope")

        setIsValid(input.validity.valid)
        console.log(isValid);
        setToolTipMessage(input.validationMessage)
    };

    return (
        <label htmlFor={name} className={form_label}>
            <input
                type={!checkPassword ? type : "text"}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                minLength={
                    name == userInputEnums.USER_PASSWORD ||
                    name == userInputEnums.USER_CONFIRM_PASSWORD
                        ? "8"
                        : "5"
                }
                required
                onInvalid={handleInvalid}

            />

            {isValid !==true && <InputToolTip message={toolTipMessage}/>}
            {/* {type == "password" && (
                <button
                    onClick={() => {
                        setCheckPassword(!checkPassword);
                    }}
                >
                    Show Password
                </button>
            )} */}
        </label>
    );
}

// if input type is password
// run button rendering logic
// onClick change checkPassword == type text
