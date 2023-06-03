import { useState } from "react";
import { form_label } from "../../../styling/form.module.sass";

export function BaseInput({
    name,
    type,
    placeholder,
    onChange,
    value,
}) {
    const [checkPassword, setCheckPassword] = useState(false);

    return (
        <label htmlFor={name} className={form_label}>
            
            <input
                type={!checkPassword ? type : "text"}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                minLength="1"
                required
            />
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
