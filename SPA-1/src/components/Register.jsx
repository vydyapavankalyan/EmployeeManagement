import React from "react";
const Register=()=>{
    return(
        <>
        <div>
        <h1>Welcom to Register Page</h1><p></p>
        <input type="text" name="uname" placeholder="Usear Name"/><p></p>
        <input type="password" name="password" placeholder="password"/><p></p>
        <input type="text" name="email" placeholder="Email"/><p></p>
        <input type="text" name="address" placeholder="Address"/><p></p>
        <input type="submit" value="Register"/>
        </div>

        </>
    )
}
export default Register