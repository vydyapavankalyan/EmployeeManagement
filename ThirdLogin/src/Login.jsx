import React from "react";
const Login=()=>{
    return(
        <>
        <div>
            <h1>New Usear Login Form</h1><br /><hr />
            Usear Name:<input type="text" name="uname"></input><p></p>
            Usear Password:<input type="password" name="password"></input><p></p>
            <input type="submit" value="Login"></input>


        </div>
        </>
    )

}
export default Login;