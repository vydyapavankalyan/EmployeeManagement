import React, { useState } from "react";

const Login=()=>{

    const [data,setData]=useState({
        Usearname:'',
        Password:'',
    });

    const {Usearname,Password}=data;

    const changeHandel= e=>{
        setData({...data, [e.target.name]:[e.target.value]})
    }

    const submitHandel= e=>{
        e.preventDefault()
        console.log(data)
    }

    return(
        <>
        <center>
        <form onSubmit={submitHandel}>
        <input type="text" name="Usearname" value={Usearname}  onChange={changeHandel} ></input><br></br>
        <input type="password" name="Password" value={Password} onChange={changeHandel}></input><br></br>
        <input type="submit" name="submit"></input>
        </form>
        </center>
        </>
    )
}
export default Login;