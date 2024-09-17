import React from "react";
import {Link,Outlet} from 'react-router-dom'

const Mobile=()=>{
    return(
        <>
        <h1>Welcom To Mobile world</h1>
        <Link to='/iphone' style={{marginRight:100}}>Iphone</Link>
        <Link to='/vivo' style={{marginRight:100}}>Vivo</Link>
        <Link to='/samsung' style={{marginRight:100}}>Samsung</Link>
        <br></br>
        <Outlet></Outlet>
        

        </>
    )
}
export default Mobile