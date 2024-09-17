import React, { useState } from "react";

const App4 =()=>{
    const [name,setName]=useState("Sathya Tech");
  const [count,setCount]= useState(0);

    return(
        <>
        <h2>{name}</h2>
        <button onClick={()=> setName("pavankalyan")}>Change</button>

        <h2>{count}</h2>
        <button onClick={()=>setCount(count+1)}> Change</button>

        </>
    )
}
export default App4