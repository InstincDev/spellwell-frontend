// user type button (teacher, student, parent)
// input user name
// input user password
// confirm password
// class id

import { useState } from "react";
import {create_test_form, form_head, form_label, form_submit} from '../../../styling/form.module.sass'

export function CreateUserForm(){
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        console.log("Submitted");
    }
    
    function handleInput(e){
        const {name, value} = e.target
        switch(name){
            case "userName": setUserName(value)
                break;
            case "userEmail": setUserEmail(value)
                break;
            case "userPassword": setUserPassword(value)
                break;
            case "confirmPassword": setConfirmPassword(value)
                break;
            default: console.log("handle input error");
        }
    }



    return(
        <form onSubmit={handleSubmit} className={create_test_form}>
            <h3 className={form_head}>User Login</h3>
            <div>
                <label htmlFor="userName" className={form_label}>
                    Full Name:
                    <input type="text" name="userName" placeholder="Full Name" onChange={handleInput} value={userName}/>
                </label>
                <label htmlFor="userEmail" className={form_label}>
                    Email:
                    <input type="email" name="userEmail" id="email" placeholder="Email" onChange={handleInput} value={userEmail}/>
                </label>
                <label htmlFor="userPassword" className={form_label}>
                    Password:
                    <input type="text" name="userPassword" placeholder="Password" onChange={handleInput} value={userPassword} />
                </label>
                <label htmlFor="confirmPassword" className={form_label}>
                    <input type="text" name="confirmPassword" placeholder="Confirm Password" onChange={handleInput} value={confirmPassword}/>
                </label>
                <label htmlFor="classNum" className={form_label}>
                    Class Id: 
                    <input type="text" name="classNum" placeholder="Class Id"/>
                </label>
            </div>
            <button type="submit" className={form_submit}>Login</button>
        </form>
    )
}