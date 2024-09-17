import React from "react";
const Student=(props)=>{
    return(
        <>
        <h1>My RollNo is={props.rollNo}</h1>
        <h1>My Name is={props.name}</h1>
        <p>Array Value Are={props.arr}</p>
        </>
    )

}
export default Student