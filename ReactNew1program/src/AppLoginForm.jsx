import React, { useState } from "react";
const App12=()=>{

    const [data,setData]=useState(
        {
            username:"",
            password:""

        } );
        const{username,password}=data;

        const ChangeHandle=e=>{
            setData({...data,[e.target.name]:[e.target.value]})
        };
        const submitHandle=e=>{
            e.preventDefault();
            console.log(data)
        }


    return(
        <>
        <center>
        <form onSubmit={submitHandle}>
      
        <input type="text"  name="username"  value={username}   onChange={ChangeHandle}  placeholder="UserName"/><br></br>
        <input type="password"  name="password"  value={password}   onChange={ChangeHandle} placeholder="Password"/><br></br>
        <button>Submit</button>
        </form>
        </center>
    
        </>
    )
}
export default App12