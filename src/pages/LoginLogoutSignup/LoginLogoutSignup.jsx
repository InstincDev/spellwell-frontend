// user type button (teacher, student, parent)
// input user name
// input user password
// confirm password
// class id

import { useState } from "react";


export function LoginLogoutSignup(){
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
        <form onSubmit={handleSubmit} style={{
            display:"flex",
            flexDirection: "column",
            gap: "1rem",
            placeItems: "center"
        }}>
            <h3>User Login</h3>
            <label htmlFor="userName">
                Full Name:
                <input type="text" name="userName" placeholder="Full Name" onChange={handleInput} value={userName}/>
            </label>
            <label htmlFor="userEmail">
                Email:
                <input type="email" name="userEmail" id="email" placeholder="Email" onChange={handleInput} value={userEmail}/>
            </label>
            <label htmlFor="userPassword" style={{
                display:"flex",
                flexDirection:"inherit",
            }}>
                Password:
                <input type="text" name="userPassword" placeholder="Password" onChange={handleInput} value={userPassword} />
            </label>
            <label htmlFor="confirmPassword">
                <input type="text" name="confirmPassword" placeholder="Confirm Password" onChange={handleInput} value={confirmPassword}/>
            </label>
            <label htmlFor="classNum">
                Class Id: 
                <input type="text" name="classNum" placeholder="Class Id"/>
            </label>

            <button type="submit">Login</button>
        </form>
    )
}