import React, { useContext, useState } from 'react'
import Search from './Search'
import {assets} from '../assets/assets.js'
import {NavLink} from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const MainNavbar = () => {

    const {token,setToken,navigate} =useContext(AppContext);
    const [visible, setVisible] = useState(false);

    const logout=()=>{
        localStorage.removeItem('token')
        setToken('')
        navigate('/login');
      }

    return (
        <>
            <div className='h-12 md:rounded-md px-4 py-2 flex items-center justify-between'>
                <div onClick={() => { setVisible(true) }} className='md:hidden block text-lg shadow-2xl'>
                    {visible?'':<i className="fa-solid fa-bars text-violet-500"></i>}
                </div>

                <div className='hidden md:block shadow-2xl border border-gray-200 rounded-full'>
                    <Search />
                </div>
                <div onClick={()=>logout()} className='text-lg group relative border-2 border-gray-200 py-1 px-2.5 rounded-full shadow-2xl'>
                    <i className="fa-solid fa-user text-gray-200"></i>
                    {token&&<div className='group-hover:block bg-gray-50 hidden absolute right-4 w-30 px-4 py-1 border-gray-200 rounded-md shadow-2xl text-gray-500'>
                        <p>My Profile</p>
                        <p className='cursor-pointer' onClick={()=>logout()}>Logout</p>
                    </div>}
                </div>
            </div>
            {/* -----------------------sidebar---------------------------------- */}

            <div className={`md:hidden flex flex-col gap-6 font-medium text-violet-500 bg-white h-[100vh] rounded-md py-4 px-6 border absolute w-1/2 ${visible?'left-[0px]':'left-[-500px]'} transition-all duration-300 `}>
                <div className='text-right text-lg'>
                    <button onClick={()=>setVisible(false)}><i className="fa-solid fa-xmark text-violet-500"></i></button>
                </div>
                <NavLink to={'/'}>
                    <img className='w-20' src={assets.study} alt="" />
                </NavLink>
                <NavLink>
                    <p>Dashboard</p>
                </NavLink>
                <NavLink>
                    <p>Courses</p>
                </NavLink>
                <NavLink>
                    <p>Attendence</p>
                </NavLink>
                <NavLink>
                    <p>Fee</p>
                </NavLink>
            </div>
        </>
    )
}

export default MainNavbar
