import React, { useEffect, useState } from "react";
const Effect=()=>{

    const[count,setCount]=useState(0);
    const[count2,setCount2]=useState(5);
    const[pagewidth,setPagewidth]=useState(window.innerWidth);

    const Increment=()=>{
        setCount(count +1)
    }

    const decrement=()=>{
        setCount2(count2 -1)
    }


    useEffect(()=>{
      const resizeHandler = ()=>{
        setPagewidth(window.innerWidth);
        };
        window.addEventListener('resize',resizeHandler);


        console.log("use Effect Runing");
        [count]

        return()=>{
            window.removeEventListener('resize',resizeHandler )
        }


    } )

    useEffect(()=>{
        console.log("Second  useEffect also Running");
        [count2]
    }   
    )
    return(
        <>
        <h1>PageWidth:={pagewidth}</h1><hr></hr>
        <h1>Use Effect Application</h1><hr></hr>
        <button onClick={Increment}>Count +</button>
        <h1>{count}</h1>

        <div>
        <button onClick={decrement}>Count -</button>
        <h1>{count2}</h1>
        </div>
      

        
        
        </>
    )
}
export default Effect