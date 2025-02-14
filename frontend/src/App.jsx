import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import MainNavbar from './components/MainNavbar'
import Dashboard from './pages/Dashboard'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify'
import { AppContext } from './context/AppContext'

const App = () => {

  const {token}=useContext(AppContext);

  return (
    <div className='flex p-4 gap-4 justify-between'>
      <div className='hidden md:block'>
        <Navbar />
      </div>
      <div className='flex flex-col gap-1 flex-1'>
        <MainNavbar />
        <ToastContainer/>
        <Routes>
          <Route path='/' element={token?<Dashboard />:<Navigate to={'/login'} />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
