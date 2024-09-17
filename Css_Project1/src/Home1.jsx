import React from "react";

const Home=()=>{

    const btnStyle={
        color:"green",
        backgroundColor:"red"
    }
    const btnStyle1={
        color:"green",
        backgroundColor:"red"
    }
    const btnStyle2={
        color:"green",
        backgroundColor:"red"
    }
    const txt1={
        backgroundColor:"yellow",
        color:"blue"
    }


    return(
        <>
        <button style={btnStyle}>Register</button> 
        <button style={btnStyle1}>Register</button> 
        <button style={btnStyle2}>Register</button>
        <p style={{...txt1}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <p>
            </p>Natus rerum recusandae delectus 
            laboriosam quod error ullam voluptate dicta veritatis <p>
                </p>quas eum maiores,
             dolores suscipit hic iusto quia necessitatibus? 
             Necessitatibus, deserunt?</p> 
        </>
    )
}
export default Home