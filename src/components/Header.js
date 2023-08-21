import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  }
  return (

    <header className='bg-black text-white flex justify-between px-5 py-1'>
      <div>
        <NavLink to='/'><h1 className='text-2xl'>Sample Logo</h1></NavLink>
        {show && <nav className='space-x-5 text-lg'>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact' >Contact</NavLink>
        </nav>
        }
      </div>
      <div>
        <nav className='space-x-5 text-lg sm:hidden'>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact' >Contact</NavLink>
        </nav>
        {show ? <button onClick={() => toggle()}><i class="fa-solid fa-xmark"></i></button> : <button className='hidden sm:flex items-end' onClick={() => toggle()}><i class="fa-solid fa-bars fa-md"></i></button>
        }




      </div>
    </header>


  )
}

export default Header