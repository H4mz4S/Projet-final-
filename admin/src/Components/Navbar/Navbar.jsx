import React from 'react'
import './Navbar.css'
import navprofileIcon from '../Assets/nav-profile.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>HCSHOP ADMIN</h1>
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
