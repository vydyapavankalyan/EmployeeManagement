import React from "react";
import UseCustomerCounter from "./custom";
import useCustom from "./Decrement";
function App()
{
    const data=UseCustomerCounter();
    const data1=UseCustomerCounter();
    const data2=useCustom();
    const data3=useCustom();
   return(
    <>
    <div>
        <p>{data.count}</p>
        <button onClick={data.increment}>Increment</button>
    </div>

    <div>
        <p>{data1.count}</p>
        <button onClick={data1.increment}>Increment</button>
    </div>

    <div>
        <p>{data2.count}</p>
        <button onClick={data2.decrement}>Decrement</button>
    </div>

    <div>
        <p>{data3.count}</p>
        <button onClick={data3.decrement}>Decrement</button>
    </div>

    </>
   ) 

}
export default App