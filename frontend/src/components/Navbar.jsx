import React from 'react'
import { NavLink } from 'react-router-dom'
import {assets} from '../assets/assets.js'

const Navbar = () => {
  return (
    <div className='flex flex-col gap-6 font-medium md:bg-violet-500 md:text-white h-[100vh] md:h-[95vh] rounded-md py-4 xl:px-16 md:px-10'>
      <NavLink to={'/'}>
        <img className='w-20' src={assets.study} alt="" />
      </NavLink>
      <NavLink to={'/'}>
        <p className='hover:text-violet-500 hover:bg-white rounded-md'>Dashboard</p>
      </NavLink>
      <NavLink>
        <p className='hover:text-violet-500 hover:bg-white rounded-md'>Courses</p>
      </NavLink>
      <NavLink>
        <p className='hover:text-violet-500 hover:bg-white rounded-md'>Attendence</p>
      </NavLink>
      <NavLink>
        <p className='hover:text-violet-500 hover:bg-white rounded-md'>Fee</p>
      </NavLink>
    </div>
  )
}

export default Navbar
