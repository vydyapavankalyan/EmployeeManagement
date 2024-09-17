import React, { useState } from "react";
const App=()=>{

    const [data,setData]=useState({
        userName:'',
        email:'',
        password:'',
        confirmpassword:'',

    })
    const {userName,email,password,confirmpassword}=data;

    const changeHandler=e=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler=e=>{
        e.preventDefault();
        if(password===confirmpassword){
        window.alert(data+"Successful Login")
        }
        else{
            window.alert("password are not matching")
        }
        
    }

    return(
        <>
        <div>
          <center>
         <form onSubmit={submitHandler}>
         UserName: <input type="text" name="userName"  value={userName} onChange={changeHandler}/><br></br>
        Email:<input type="email" name="email" value={email} onChange={changeHandler}/><br></br>
        Password: <input type="password" name="password" value={password}  onChange={changeHandler}/><br></br>
        Confirmpassword:<input type="password" name="confirmpassword" value={confirmpassword} onChange={changeHandler}/><br></br>
        <input type="submit" name="submit" />
        </form>
        </center>
        </div>

        </>

    )
}
export default App