import { useState } from "react";

export function BaseInput({
    name,
    ClassName,
    type,
    placeholder,
    onChange,
    value,
}) {
    const [checkPassword, setCheckPassword] = useState(false);

    return (
        <label htmlFor={name} className={ClassName}>
            {placeholder}:
            <input
                type={!checkPassword ? type : "text"}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            {type == "password" && (
                <button
                    onClick={() => {
                        setCheckPassword(!checkPassword);
                    }}
                >
                    Show Password
                </button>
            )}
        </label>
    );
}

// if input type is password
// run button rendering logic
// onClick change checkPassword == type text