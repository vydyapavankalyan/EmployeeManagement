import React, { useState } from 'react'

 const App4 = () => {

   const [showdata,setShowdata]=useState(false);

   const handelchang=()=>{
    setShowdata( !showdata)

   }

  return (   
    <>
      <div>
        <button onClick={handelchang}>{showdata ? "hide" :"show"}</button>
        {
            showdata && (  
                <div className='content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quos
             cupiditate omnis autem fugiat 
            aut animi praesentium consequatur nostrum voluptates.
        </div> 
        
            )
            
        }
        
        

      </div>
    </>
  
  )
}
export default App4
