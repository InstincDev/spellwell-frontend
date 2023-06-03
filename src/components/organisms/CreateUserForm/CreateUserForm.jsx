// user type button (teacher, student, parent)
// input user name
// input user password
// confirm password
// class id

import { useState } from "react";
import {create_test_form, form_head, form_label, form_button, base_input_wrapper} from '../../../styling/form.module.sass'
import {BaseInput} from '../../'

const USER_NAME= "userName"
const USER_EMAIL= "userEmail"
const USER_PASSWORD= "userPassword"
const USER_CONFIRM_PASSWORD= "confirmPassword"
const USER_CLASS_ID= "userClassId"


export function CreateUserForm(){
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [userClassId, setUserClassId] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        console.log("Submitted");
    }
    
    function handleInput(e){
        const {name, value} = e.target
        switch(name){
            case USER_NAME: setUserName(value)
                break;
            case USER_EMAIL: setUserEmail(value)
                break;
            case USER_PASSWORD: setUserPassword(value)
                break;
            case USER_CONFIRM_PASSWORD: setConfirmPassword(value)
                break;
            default: console.log("handle input error");
        }
    }



    return(
        <form onSubmit={handleSubmit} className={create_test_form}>
            <h3 className={form_head}>
                User Login
            </h3>
            <div className={base_input_wrapper}>

            
                <BaseInput
                    className={form_label}
                    type="text"
                    name={USER_NAME}
                    placeholder="Full Name"
                    onChange={handleInput} value={userName}
                />
                <BaseInput
                    className={form_label}
                    type="email"
                    name={USER_EMAIL}
                    placeholder="Email"
                    onChange={handleInput} value={userEmail}
                />
                <BaseInput
                    className={form_label}
                    type="password"
                    name={USER_PASSWORD}
                    placeholder="Password"
                    onChange={handleInput} value={userPassword}
                />

                <BaseInput
                    className={form_label}
                    type="password"
                    name={USER_CONFIRM_PASSWORD}
                    placeholder="Confirm Password"
                    onChange={handleInput} value={confirmPassword}
                />
                <BaseInput
                    className={form_label}
                    type="text"
                    name={USER_CLASS_ID}
                    placeholder="Class ID"
                    onChange={handleInput} value={userClassId}
                />
            </div>
           
            <button type="submit" className={form_button}>Login</button>
        </form>
    )
}