import React, { useState } from "react";
const App5=()=>{
    const[firstName,setFirstName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const changeFirstName=(e)=>{
        setFirstName(e.target.value);

    }
    const changeEmail=(e)=>{
        setEmail(e.target.value);

    }
    const changePassword=(e)=>{
        setPassword(e.target.value);

    }

    const handelSubmit= (e)=>{
        e.preventDefault();
        let userobj={
            firstName:firstName,
            email:email,
            password:password,
        }
        console.log(userobj)

    }
        

    return(
        <>
        <div><center>
            <form onSubmit={handelSubmit}> 
                <input type="text" name="fristname" id="firstname"  value={firstName} placeholder="Enter your Name" onChange={changeFirstName}></input><br></br>
                <input type="email" name="email" id="email"   value={email}  placeholder="Enter your Email" onChange={changeEmail} ></input><br></br>
                <input type="password" name="password" id="password" value={password}  placeholder="Enter your Password" onChange={changePassword} ></input><br></br>
                <button type="submit">Submit</button>
            </form>
            </center>
        </div>
        </>
    )
}
export default App5