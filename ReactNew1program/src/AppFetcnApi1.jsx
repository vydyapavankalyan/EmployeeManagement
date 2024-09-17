import React, { useEffect, useState } from "react";


const AppFetcnApi1 = () => {
    const[array,setArray]=useState([])
    
    useEffect( ()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((respones)=>respones.json())
        .then((json)=>{
            setArray(json)
        })
        
    },[])

  return (
    <div>
        {
            array.map((items,index)=>{
                const{title,id}=items;
                return(
                    <li key={index}>
                        <div>{id}</div>
                        <div>{title}</div>


                    </li>
                )
            })
        }

    </div>
  )
}
export default AppFetcnApi1