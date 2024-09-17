import React, { useRef, useState } from "react";
const Login=()=>{

    const ref1= useRef(null)
    const ref2= useRef(null)
    const [msg,setMsg]=useState("");
    const login=()=>{
        ref1.current.value=="pavan" && ref2.current.value=="pavan123" ?setMsg("Login Success"):setMsg("Login Fail")
    }

    return(
        <>
        <div>
        <h1 style={{color:"aqu"}}>Welcom to Login Page</h1><p></p>
        <input type="text" name="uname" placeholder="Usear Name" ref={ref1}/><p></p>
        <input type="password" name="password" placeholder="password" ref={ref2}/><p></p>
       <button onClick={login} style={{color:"red"}}>Login</button><br></br>
       <h1>{msg}</h1>

        </div>

        </>
    )
}
export default Login