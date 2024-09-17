
import { useState } from "react";
const NameFull=()=>{
    const[data,setData]=useState({
        FirstName:"",
        LastName:""
      
    })
    const[FullName,setFullName]=useState("")
    const{FirstName,LastName}=data

    const change=(e)=>{
        setData({...data,[e.target.name]: e.target.value})
        
    }

    const display=(e)=>{
        e.preventDefault();
        setFullName("Welcome To Hello "+FirstName+ " " +LastName)

    }

    const funn=()=>{
        window.alert("successful")
    }

    return(
        <>
        <div>
            <form onSubmit={display}>
                EnterFirst:<input type="text" name="FirstName" value={FirstName} onChange={change} placeholder="EnterFirstName"/><p></p>
                EnterFirst:<input type="text"  name="LastName" value={LastName} onChange={change} placeholder="EnterLastName"/><p></p>
            
                <input type="submit"  onClick={funn} value="PrintFullName"/>

            </form>
        </div>
        <div>
            <h2>My First Name={FirstName}</h2>
            <h2>My First Name={LastName}</h2>
            <h2>My First Name={FullName}</h2>
        </div>
        </>
    )
}
export default NameFull