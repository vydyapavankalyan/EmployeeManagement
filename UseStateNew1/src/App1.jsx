import React, { useState } from 'react'

const App1 = () => {

    const initialonj={
        firstname:"pavan",
        lastname:"kalyan",
        age:23
    };
    const[data,setData]=useState(initialonj)
    
    const changeFirstName=()=>{
        setData({...data,
            firstname:"sai"
        })
    }
    const changeLastName=()=>{
        setData({...data,
            lastname:"Krishna"
        })
    }


  return (
    <>
    <h1>My Name is: {data.firstname}</h1>
    <button onClick={changeFirstName}>ChangeName</button>

    <h1> My Name is:{data.lastname}</h1>
    <button onClick={changeLastName}>ChangeLastName</button>
    <h1>My Age is:{data.age}</h1>

    </>
  )
}

export default App1