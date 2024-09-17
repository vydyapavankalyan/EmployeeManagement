import React, { useState } from "react";
const App13=()=>{
    const[username,setUsername]=useState("");
    const [error,setError]=useState("");


    const UpdataHandle=(e)=>{
    
        setUsername(e.target.value)
    }


    const ValidateName=(e)=>{
        if(username === "" || username === null)
        {
            setError("name should not be blank")
           
        }
        else if(username.length<4)
        {
            setError("username must be more than 4 Characters")
        }
        else if(username.length>8)
        {
            setError("username should be 4 to Characters")
        }
        else
        {
            setError("good name")
        }
    }
  



    return(
        <>
        <label htmlFor="username">UsearName</label>
        <input type="text" name="username"  value={username}  onChange={UpdataHandle}    placeholder="EnterName" />
        <span style={{color:"red"}} >{error}</span><br></br><br></br>
        <button onClick={ValidateName}>ValidateName</button>
        </>

    )
}
export default App13