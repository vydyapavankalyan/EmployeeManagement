import React from 'react'
import ReactDOM from 'react-dom/client'
import Student from './Student'
import Employee from './Employee'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Student rollNo='100' name={"shashi"}/>
    <Employee id='444' name={"sunil"} salary={'8000.88'}/>
  </React.StrictMode>,
)
