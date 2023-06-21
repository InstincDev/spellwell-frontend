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

export function CreateUserForm() {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // const [userClassId, setUserClassId] = useState("")
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

    function handleInput(e) {
        const { name, value } = e.target;
        switch (name) {
            case userInputEnums.USER_NAME:
                setUserName(value);
                break;
            case userInputEnums.USER_EMAIL:
                setUserEmail(value);
                break;
            case userInputEnums.USER_PASSWORD:
                setUserPassword(value);
                break;
            case userInputEnums.USER_CONFIRM_PASSWORD:
                setConfirmPassword(value);
                break;
            case userInputEnums.USER_TYPE:
                setUserType(value);
                break;
            default:
                console.log("handle input error");
        }
    }

    return (
        <form onSubmit={handleSubmit} className={create_test_form}>
            <h3 className={form_head}>User Login</h3>

            <div className="user_login_type">
                <select
                    name={userInputEnums.USER_TYPE}
                    id=""
                    onChange={handleInput}
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
                    onChange={handleInput}
                    value={userName}
                />
                <BaseInput
                    className={form_label}
                    type="email"
                    name={userInputEnums.USER_EMAIL}
                    placeholder="Email"
                    onChange={handleInput}
                    value={userEmail}
                />
                <BaseInput
                    className={form_label}
                    type="password"
                    name={userInputEnums.USER_PASSWORD}
                    placeholder="Password"
                    onChange={handleInput}
                    value={userPassword}
                />

                <BaseInput
                    className={form_label}
                    type="password"
                    name={userInputEnums.USER_CONFIRM_PASSWORD}
                    placeholder="Confirm Password"
                    onChange={handleInput}
                    value={confirmPassword}
                />
                {/* <BaseInput
                    className={form_label}
                    type="text"
                    name={userInputEnums.USER_CLASS_ID}
                    placeholder="Class ID"
                    onChange={handleInput} value={userClassId}
                /> */}
            </div>

            <button type="submit" className={form_button}>
                Login
            </button>
        </form>
    );
}
