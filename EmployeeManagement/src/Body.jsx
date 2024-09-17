import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Save from './Save'

import GetAll from './GetAll'
import Delete from './Delete'
import Update from './Update1'


const Body = () => {
  return (
    <div>

<Routes>
            <Route path='/' element={<Save/>}></Route>
            <Route path='/update' element={< Update/>}></Route>
            <Route path='/delete' element={<Delete/>}></Route>
            <Route path='/getAll' element={<GetAll/>}></Route>
        </Routes>
    </div>
  )
}

export default Body