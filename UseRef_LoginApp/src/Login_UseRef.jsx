import React, { useRef, useState } from "react";

const Login=()=>{

    const userName=useRef();
    const Password=useRef();
    const[msg,setMsg]=useState();

    const loginPage=()=>{
        if(userName.current.value=="pavan" &&Password.current.value=="pavan123")
        {
            setMsg("Your Logined Successfully");
        }
        else{
            setMsg("Please Insert Valid User name and Passeord");
        }

    }
    return(<>
<div>
    User Name:<input type="text" ref={userName}/><p></p>
    Passwod:<input type="text" ref={Password}/><p></p>
    <input type="submit" value="Login" onClick={loginPage}/><p></p>
</div>
<di>{msg}</di>

    </>)

    }
    export default Login