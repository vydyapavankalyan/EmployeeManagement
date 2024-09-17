import React from "react";
import {Link,Outlet} from 'react-router-dom'
const Electronices=()=>{
    return(
        <>
        <h1>Welcom To Electronices world</h1>
        <Link to='electronices/dell' style={{marginRight:100}}>Dell</Link>
        <Link to='electronices/hp' style={{marginRight:100}}>Hp</Link>
        <Link to='electronices/lenovo' style={{marginRight:100}}>Lenovo</Link>
        <br></br>
        <Outlet></Outlet>
        

        

        </>
    )
}
export default Electronices