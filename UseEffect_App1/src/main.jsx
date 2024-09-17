import React from 'react'
import ReactDOM from 'react-dom/client'
import Effect from './EffectApp1'
import UsingState from './UseStateApp2'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Effect /><hr></hr><hr></hr>
    <UsingState />
  </React.StrictMode>,
)
