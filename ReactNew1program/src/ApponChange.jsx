import React, { useState } from "react";
const App7=()=>{

    const [user,setUser]=useState("");

     const handler=e=>{
        setUser(e.target.value)

     }

    return(
        <>
        <input type="text" name="user" placeholder="usearname" value={user} onChange={handler}  /><br></br>
           <h1>{user}</h1>
        
        </>
    )
}
export default App7