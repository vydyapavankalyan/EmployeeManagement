import React, { useEffect, useState } from "react";
const App14=()=>{

    const [array,setArray]=useState([ ])

useEffect( ()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((respones)=>respones.json())
    .then((json)=>{
        setArray(json)
    })

},[])
    return(
        <>
        <ul>
       {
        array.map((eachItem)=>{
            const{id,userId,title,body}=eachItem;
            return(
                <li key={id}>
                    <div>{userId}</div>
                    <div>{title}</div>
                    <div>{body}</div>

                </li>
            )
        })
       }
    </ul>
      
        </>
    )
}
export default App14