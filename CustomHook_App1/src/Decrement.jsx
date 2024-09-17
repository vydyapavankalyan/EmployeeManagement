import React, { useState } from "react";

function useCustom()
{
    const[count,setCount]=useState(100);

    const decrement=()=>{
        setCount(count -1)
    
    }
    return{
        count,
        decrement
    }
}
export default useCustom