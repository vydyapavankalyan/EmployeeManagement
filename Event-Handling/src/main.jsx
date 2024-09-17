import React from 'react'
import ReactDOM from 'react-dom/client'
import Event from './Event'
import Product from './ProductUpdate'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Event />
    <Product company_name={"Realme"}/>
  </React.StrictMode>,
)
