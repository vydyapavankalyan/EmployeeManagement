import React from 'react'
import ReactDOM from 'react-dom/client'
import Student from './Student'
import Employee from './Employee'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < Student rollNo='120' name={"pavan"} arr={[400,200,900,400,900]}/>
    <Employee id='222' name={"Ajay"} salary={'9999.00'}/>
  </React.StrictMode>,
)
