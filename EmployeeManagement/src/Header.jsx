import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>

<Link  to='/' style={{marginRight:"100px"}}> Save</Link>
      <Link to='/update' style={{marginRight:"100px"}}>Updata</Link>
      <Link to='/delete'  style={{marginRight:"100px"}}>Delete</Link>
      <Link to='/getAll'  style={{marginRight:"100px"}}>GetAll</Link>


      
     
    </div>



  )
}

export default Header