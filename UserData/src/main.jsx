import React from 'react'
import ReactDOM from 'react-dom/client'
import UsearData from './UserData'
import UsearDataForm from './UsearDataForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsearData /><hr></hr><br></br>
    < UsearDataForm />
  </React.StrictMode>,
)
