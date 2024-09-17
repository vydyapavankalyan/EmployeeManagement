import React from 'react'
import ReactDOM from 'react-dom/client'
import Person from './Person'
import PersonC from './PersonC'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Person address={"hyd"}/><br></br><hr></hr>
    <PersonC address={"Sec"}/>
  </React.StrictMode>,
)
