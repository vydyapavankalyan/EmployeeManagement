import React from 'react'
import Headder from './Headder'
import Body from './Body'
import './App.css'
import Footer from './Footer'

const App = () => {
  return (
    <div>

      <div id='div1'> <Headder/> </div>
      <div id='div2'> <Body/> </div>
      <div id='div3'> <Footer/></div>
    </div>
  )
}

export default App