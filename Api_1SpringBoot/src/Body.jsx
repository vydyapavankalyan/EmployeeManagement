import React from "react";
import {Route,Routes} from 'react-router-dom'
import Addsave from "./SaveEx3";
import Get1 from "./Get1";
import GetEx1 from "./GetEx1";
import Updata from "./Updata";
import DeleteEx2 from "./DeleteEx2";
const Body=()=>{
    return(
        <>
        <Routes>
            <Route path='/' element={<Addsave/>}></Route>
            <Route path='/getone' element={<Get1/>}></Route>
            <Route path='/getall' element={<GetEx1/>}></Route>
            <Route path='/updata' element={<Updata/>}></Route>
            <Route path='/delete' element={<DeleteEx2/>}></Route>
           

        </Routes>
        </>
    )
}
export default Body
