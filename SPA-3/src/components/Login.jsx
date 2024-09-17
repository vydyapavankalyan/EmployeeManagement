import React from "react";
const Login=()=>{
    return(
        <>
        <div>
            <h1>Login Form</h1>
            <form>
                <table border={1}>

                    <tr>
                    
                        <td>Name:</td>
                    <td><input type="text" name="uname"  placeholder=" Enter Name" required="uname"/> </td>   
                    </tr>


                     
                    <tr>
                    
                        <td>Password:</td>
                    <td><input type="password" name="password"  placeholder="Password" required="password"/> </td>  
                    </tr>

                </table>
            </form>
        </div>
        </>
    )
}
export default Login