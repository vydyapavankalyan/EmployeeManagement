import React, { useState ,useEffect} from "react";

const App6=()=>{
    const [count,setCount]=useState(0);
     useEffect(()=> console.log("clickme"),[count])
    return(
        <>
        <div>
            <p>you Click{count} times</p>
            <button onClick={()=> setCount(count+1)}>ClickMe</button>
        </div>
        
        </>
    )
}
export default App6