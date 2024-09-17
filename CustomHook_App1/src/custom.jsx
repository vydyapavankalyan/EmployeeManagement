import React, { useState } from "react";

function UseCustomerCounter()
{
    const[count,setCount]=useState(0);

    const increment=()=>{
        setCount(count +1);
    }
    return{
        count,
        increment
    }

}
export default UseCustomerCounter;