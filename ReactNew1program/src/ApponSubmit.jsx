import React, { useState } from "react";
const App8=()=>{
    const [data,setData]=useState({
        usearname:"",
        password:""
    });

    const {usearname,password}=data;

    const OnChange=e=>{
        
        setData({...data,[e.target.name]:[e.target.value]});

    }
    const SubmitHandele=e=>{
        
        e.preventDefault();
     
        console.log(data)
    }


    return(
        <>
        <div>
            <form onSubmit={SubmitHandele}>
                <input type="text" name="usearname"   value={usearname} onChange={OnChange} placeholder="UsearName"/><br></br>
                <input type="password" name="password" value={password}   onChange={OnChange} placeholder="Password"/><br></br>
                <button>Submit</button>
            </form>
        </div>
        </>

    )
}
export default App8