import React, { useState } from "react";
const App2=()=>{

    const CssStyling={
        color:"red",
        backgroundColor:"lightblue",
         textAlign:"center",
         padding:"50px",
         margin:"30px"

    }
    const [name, setName]=useState("sathya tech!!!!")
    return(
        <>
        <h1 style={CssStyling}> hello pk1{name}</h1>
        </>
    )
}
export default App2