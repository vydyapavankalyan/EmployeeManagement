import React, { useEffect, useState } from 'react'

const AppUseEffect1 = () => {

    const[count,setCount]=useState(0);
    const [mul,setMul]=useState(0)


    const increase=(e)=>{
        setCount(count+1)
    }

   useEffect( ()=>{
        //setMul(count*2)
        if(count===20)
        {
            setCount(0)

        }

        
    },[count] )

  return (
    <div>
        <h1>you Counter Value:{count} Times</h1>
        <button onClick={increase}> + </button>
        <h3>Multiplication Value:{mul} :Times</h3>

    </div>
  )
}

export default AppUseEffect1