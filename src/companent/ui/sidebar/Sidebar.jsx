import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
// import Cars from '../../cars/Cars'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <NavLink to="/main/cars" className='sidebar_link key'>
        <h1>Cars</h1>
      </NavLink>  <br />
      
      <NavLink className='sidebar_link ' to={'/main/brend'}><h1>Brend</h1></NavLink>
    </div>
  )
}

export default Sidebar