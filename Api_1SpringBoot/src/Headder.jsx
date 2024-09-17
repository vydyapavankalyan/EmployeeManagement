import React from "react";
import {Link} from 'react-router-dom'
const Headder=()=>{
    return(
        <>
        <div>
            <h2>Electricity Current Bill</h2>
        </div><p></p>
        <div className="p1">
        <Link to='/' style={{marginRight:100}}>Save</Link>
        <Link to='/getone' style={{marginRight:100}}>GetOne</Link>
        <Link to='/getall' style={{marginRight:100}}>GetAll</Link>
        <Link to='/updata' style={{marginRight:100}}>Updata</Link>
        <Link to='/delete' style={{marginRight:100}}>Delete</Link>

        </div>
        </>
    )
}
export default Headder