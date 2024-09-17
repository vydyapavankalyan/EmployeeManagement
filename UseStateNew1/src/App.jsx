import { useState } from 'react'

const App=()=>{
  const [count,setCount]=useState(0);

/*const increment=()=>{
  setCount(count+1)
}*/


 const increment=()=>{
    setCount((precount)=>{
      return precount+1;

    })
    setCount((precount)=>{
      return precount+1;
    })
  
  }


  const Decrement=()=>{
    setCount(count-1)
  }

  return (
    <>
     <div>
      <button onClick={Decrement}>-</button>
      <span>Count:{count}</span>
      <button onClick={increment}>+</button>
     </div>
    </>
  )
}

export default App
