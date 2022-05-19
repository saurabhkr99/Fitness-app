import React from 'react'
import './App.css'

const Navbar = () => {
  return (
    <div className='flex flex-row items-center justify-between px-20 bg-blue-300'>
      <div className='uppercase font-black'>
        logo
      </div>
      <div className='nav'>
        <ul className='space-x-4'>
          <li><a href='#'>Live</a></li>
          <li><a href='#'>Membership</a></li>
          <li><a href='#'>Plans</a></li>
          <li><a href='#'>More</a></li>
        </ul>
      </div>
      <div className='font-bold'>
        Login
      </div>
    </div>
  )
}

export default Navbar