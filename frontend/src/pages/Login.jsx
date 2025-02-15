import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import {toast} from 'react-toastify'


const Login = () => {
  
  const {token,setToken,backendUrl,navigate}=useContext(AppContext);

  const [currentState, setCurrentState] = useState('Login');

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const onSubmitHandler=async(event)=>{
    event.preventDefault();
    try {
      if (currentState==='Sign Up') {
        
        const response=await axios.post(backendUrl+'/api/student/register',{name,email,password,mobile,city,country});
        
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token',response.data.token);
          toast.success("Registration Successfull");
        }else{
          toast.error(response.data.message);
        }

      }else{
        
        const response=await axios.post(backendUrl+'/api/student/login',{email,password});
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token',response.data.token);
        }else{
          toast.error(response.data.message);
        }
        
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
  useEffect(()=>{
    if(token){
      navigate('/');
    }
  },[token]);

  return (
    <div className='h-[80vh] md:flex-1'>
      <form onSubmit={onSubmitHandler} className='w-full h-full flex flex-col items-center justify-center gap-6' action="">
        <h1 className='text-4xl font-semibold text-violet-500'>{currentState}</h1>
        <div className='w-4/6 md:w-1/2'>
          {currentState==='Sign Up'?
            <input onChange={(e) => setName(e.target.value)} value={name} name='name' className='w-full border border-gray-200 rounded-full px-4 py-2 shadow-sm' type="text" placeholder='Full Name' required />:
            <input onChange={(e) => setEmail(e.target.value)} value={email} name='email' className='w-full border border-gray-200 rounded-full px-4 py-2 shadow-sm' type="email" placeholder='Email' required />
          }
        </div>
        {currentState==='Sign Up'?<div className='w-4/6 md:w-1/2'>
          <input onChange={(e) => setMobile(e.target.value)} value={mobile} name='mobile' className='w-full border border-gray-200 rounded-full px-4 py-2 shadow-sm' type="number" placeholder='Mobile Number' required />
        </div>:''}
        {currentState==='Sign Up'?
        <div className='w-4/6 md:w-1/2'>
          <input onChange={(e) => setEmail(e.target.value)} value={email} name='email' className='w-full border border-gray-200 rounded-full px-4 py-2 shadow-sm' type="email" placeholder='Email' required />
        </div>:''}
        <div className='w-4/6 md:w-1/2'>
          <input onChange={(e) => setPassword(e.target.value)} value={password} name='password' className='w-full border border-gray-200 rounded-full px-4 py-2 shadow-sm' type="password" placeholder='Password' required />
        </div>
        {currentState==='Sign Up'?
        <div className='w-4/6 md:w-1/2'>
          <div className='flex flex-col md:flex-row gap-6'>
            <input onChange={(e) => setCity(e.target.value)} value={city} name='city' className='md:w-1/2 w-full border border-gray-200 rounded-full px-4 py-2 shadow-sm' type="text" placeholder='City' required />
            <input onChange={(e) => setCountry(e.target.value)} value={country} name='country' className='md:w-1/2 w-full border border-gray-200 rounded-full px-4 py-2 shadow-sm' type="text" placeholder='Country' required />
          </div>
        </div>:''}
        <div className='text-violet-500 md:w-1/2 w-4/6 text-right text-sm cursor-pointer'>{currentState === 'Login' ? <p onClick={() => setCurrentState('Sign Up')}>Don't Have Account?</p> : <p onClick={() => setCurrentState('Login')}>Already Have Account?</p>}</div>
        <button className='text-white w-4/6 md:w-1/2 bg-violet-500 border border-violet-500 py-1 rounded-full hover:bg-white hover:text-violet-500 shadow-md'>{currentState}</button>
      </form>
    </div>
  )
}

export default Login
