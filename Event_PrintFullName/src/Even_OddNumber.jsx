import React, { useState } from "react";
const Even_OddNumber=()=>{
    const [data,setdata]=useState({
        Number:""
    })
    const [result,setResult]=useState("");
    const{Number}=data;
    const change=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const display=(e)=>{
        e.preventDefault();
        if(Number%2==0){
            setResult("the Given Number is Even")
        }
        else{
            setResult("The given Number is Odd")
        }

    }
    return(
        <>
        <form onSubmit={display}>
        Enter Your Number:<input type="text" name="Number" value={Number} onChange={change} placeholder="EnterValue"/><p></p>
        <input type="submit" value="Check"/>
        </form>
        <h1>{result}</h1>
        </>
    )
}
export default Even_OddNumber