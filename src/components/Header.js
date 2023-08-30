import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SearchCompo from './SearchCompo';

const Header = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  }
  return (

    <header className='bg-black text-white flex justify-between px-5 py-1'>
      <div>
        <NavLink to='/'><h1 className='text-2xl'>My Movie App</h1></NavLink>
        {show && <nav className='space-x-5 text-lg'>
          <NavLink to='/about'>Add</NavLink>

        </nav>
        }
      </div>
      <div className='flex gap-3'>
        <div>
          <nav className='space-x-5 text-lg sm:hidden'>
            <NavLink to='/movie/popular'>Popular</NavLink>
            <NavLink to='/movie/top_rated'>Top Rated</NavLink>
            <NavLink to='/movie/upcoming'>Upcoming</NavLink>

          </nav>
          {show ? <button onClick={() => toggle()}><i class="fa-solid fa-xmark"></i></button> : <button className='hidden sm:flex items-end' onClick={() => toggle()}><i class="fa-solid fa-bars fa-md"></i></button>
          }
        </div>
        <div>
          <SearchCompo />
        </div>
      </div>

    </header >


  )
}

export default Header