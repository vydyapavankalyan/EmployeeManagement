import React from "react";
import { Link } from "react-router-dom";
const Headder=()=>{
    return(
        <>
        <div>
            <h2>Sathya Technologies Pvt Ltd</h2>
        </div><p></p>
        <div className="p1">
    <Link to='/' style={{marginRight:100}}>Home</Link>
    <Link to='/about' style={{marginRight:100}}>About</Link>
    <Link to='/contact' style={{marginRight:100}}>Contact</Link>
    <Link to='/login' style={{marginRight:100}}>Login</Link>
    <Link to='/register' style={{marginRight:100}}>Register</Link>
        </div>
        </>
    )
}
export default Headder