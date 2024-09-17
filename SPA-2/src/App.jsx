import React from "react";
import{Link,Routes,Route} from 'react-router-dom';
import Dell from "./compount.jsx/Dell";
import Hp from "./compount.jsx/Hp";
import Lenovo from "./compount.jsx/Lenovo";

import Iphone from "./compount.jsx/Iphone";
import Vivo from "./compount.jsx/Vivo";
import Samsung from "./compount.jsx/Samsung";

import Mobile from "./compount.jsx/Mobile";
import Electronices from "./compount.jsx/Electronices";
import './App.css'

const App=()=>{
    
    return(
        <>
        <h1>Welcom To Home Page</h1>

        <Link to="/" style={{marginRight:100}}>Electrones</Link>  
        <Link to="/mobile" style={{marginRight:100}}>Mobile</Link>
        <p></p>
        <div className="p1"> 
        <Routes>
            <Route path="/" element={<Electronices/>}></Route>
            <Route path="/electronices/dell" element={<Dell/>}></Route>
            <Route path="/electronices/hp" element={<Hp/>}></Route>
            <Route path="/electronices/lenovo" element={<Lenovo/>}></Route>

            <Route path="/mobile" element={<Mobile/>}></Route>
            <Route path="/iphone" element={<Iphone/>}></Route>
            <Route path="/vivo" element={<Vivo/>}></Route>
            <Route path="/samsung" element={<Samsung/>}></Route>
        
            
        </Routes>
        </div>
        </>
    )

}
export default App
