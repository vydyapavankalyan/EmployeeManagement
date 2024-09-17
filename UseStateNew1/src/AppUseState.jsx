import React, { useEffect, useState } from "react";
const Index=()=>{

    const[count,setCount]=useState(0);

   useEffect(()=> console.log(count),[count])

    const Change=()=>{
        setCount(count +1)
    }

    

    return(
        <>
        <h1>{count}</h1>
        <button onClick={Change}>Button</button>
        </>
    )
}
export default Index