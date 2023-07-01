import { useState } from "react";
import { form_label } from "../../../styling/form.module.sass";
import userInputEnums from "../../../utils/userInputEnums";

export function BaseInput({ name, type, placeholder }) {
    const [inputValue, setInputValue] = useState("");
    const [checkPassword, setCheckPassword] = useState(false);

    return (
        <label htmlFor={name} className={form_label}>
            <input
                type={!checkPassword ? type : "text"}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                minLength={
                    name == userInputEnums.USER_PASSWORD ||
                    name == userInputEnums.USER_CONFIRM_PASSWORD
                        ? "8"
                        : "5"
                }
                required
            />

            {type == "password" && (
                <button
                    onClick={() => {
                        setCheckPassword(!checkPassword);
                    }}
                >
                    {checkPassword === true ? "Hide Password" : "Show Password"}
                </button>
            )}
        </label>
    );
}
