import { useState } from "react";
import { form_label } from "../../../styling/form.module.sass";

// TODO: Should the component take a prop to set if required or not?
// TODO: Create validation patterns for inputs. They should be passed in through props probably.
// TODO: Remove WordInput component and all its references after adding patterns.

export function BaseInput({ 
  name,
  type,
  placeholder,
  value,
  setValue,
}) {
  if (type === "password") return passwordInput(name,placeholder,value,setValue) 
  else return basicInput(name, type, placeholder, value, setValue) 
}

const passwordInput = (name, placeholder, value, setValue,) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <label htmlFor={name} className={form_label}>
      <input 
        type={showPassword ? "text" : "password"}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={(e)=> setValue(e.target.value)}
        minLength="8"
      />

      <button
        onClick={() => setShowPassword(!checkPassword)}
      >
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </label>
  )
}

// Just a catch all for any input types that wont have specific behaviours.
const basicInput = (name, type, placeholder, value, setValue) => {
  return (
    <label htmlFor={name} className={form_label}>
      <input 
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={(e)=> setValue(e.target.value)}
        minLength="2"
      />
    </label>
  )
}


