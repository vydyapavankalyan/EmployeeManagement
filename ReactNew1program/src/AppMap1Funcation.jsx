import React from "react";
const App9=()=>{
    const arr=["java","python","javaScript","ReactJs","NodeJs"]
    return(
        <>
        {
            arr.map(
                (value,index)=><li key={index}>{value}</li>
            )
        }
        
        </>
    )
}
export default App9
