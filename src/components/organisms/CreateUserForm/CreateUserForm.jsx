// user type button (teacher, student, parent)
// input user name
// input user password
// confirm password
// class id

import { useState } from "react";
import {
    create_test_form,
    form_head,
    form_label,
    form_button,
    base_input_wrapper,
} from "../../../styling/form.module.sass";
import { BaseInput } from "../../";
import userInputEnums from "../../../utils/userInputEnums";

// ToDo
// refactor other form inputs
// replace inputs with BaseInput components
// remove and replace ToolTip components

// Add ClassId input for users

export function CreateUserForm() {
    const [userType, setUserType] = useState("select");

    function handleSubmit(e) {
        e.preventDefault();
        // Smile
        // state error handling
        // all exist
        // package state values
        // fetch to backend with data

        console.log("Submitted");
    }


    return (
        <form onSubmit={handleSubmit} className={create_test_form}>
            <h3 className={form_head}>User Login</h3>

            <div className="user_login_type">
                <select
                    name={userInputEnums.USER_TYPE}
                    id=""
                    onChange={(e)=> setUserType(e.target.value)}
                    value={userType}
                >
                    <option value="select" aria-disabled hidden>
                        Select
                    </option>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                    <option value="parent">Parent</option>
                </select>
            </div>
            
            <div className={base_input_wrapper}>
                <BaseInput
                    className={form_label}
                    type="text"
                    name={userInputEnums.USER_NAME}
                    placeholder="Full Name"    
                />

                <BaseInput
                    className={form_label}
                    type="email"
                    name={userInputEnums.USER_EMAIL}
                    placeholder="Email" 
                />

                <BaseInput
                    className={form_label}
                    type="password"
                    name={userInputEnums.USER_PASSWORD}
                    placeholder="Password"
                />

                <BaseInput
                    className={form_label}
                    type="password"
                    name={userInputEnums.USER_CONFIRM_PASSWORD}
                    placeholder="Confirm Password"  
                />

                {/* <BaseInput
                    className={form_label}
                    type="text"
                    name={userInputEnums.USER_CLASS_ID}
                    placeholder="Class ID"
                /> */}
            </div>

            <button type="submit" className={form_button}>
                Login
            </button>
        </form>
    );
}
