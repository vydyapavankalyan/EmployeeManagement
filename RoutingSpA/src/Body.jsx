import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Save1 from './Save1'
import Delete1 from './Delete1'
import GetAll1 from './GetAll1'
import Update from './Update'



const Body = () => {
  return (
    <div>

        <Routes>
            <Route path='/' element={<Save1/>}></Route>
            <Route path='/update' element={<Update />}></Route>
            <Route path='/delete' element={<Delete1/>}></Route>
            <Route path='/getAll' element={<GetAll1/>}></Route>
        </Routes>
    </div>
  )
}

export default Body