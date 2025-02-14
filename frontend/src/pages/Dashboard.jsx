import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets';
import axios from 'axios';


const Dashboard = () => {

  const [student, setStudent] = useState('');
  const { token, backendUrl } = useContext(AppContext);

  const studentData = async () => {
    const student = await axios.get(backendUrl + '/api/student', { headers: { token } });
    setStudent(student.data.student);
  }

  useEffect(()=>{
    studentData();
  },[])


  return (
    <div className='flex flex-col gap-4'>
      <div className='bg-violet-500 rounded-md flex justify-between'>

        <div className='text-white px-4 py-8 flex flex-col gap-1'>
          <p className='lg:text-4xl text-xl'>Welcome, John!</p>
          <p className='lg:text-sm text-xs'>"The beautiful thing about learning is that no one can take it away from you." – B.B. King</p>
        </div>
        <img className='lg:w-30 w-25' src={assets.student} alt="" />
      </div>
      <div className='flex flex-col md:flex-row justify-around'>
        <div className='md:w-1/2 w-full p-4'>
          <p className='text-xl font-semibold underline'>Personal Details</p>
          <div className='text-gray-600 mt-1'>
            <p>Name: {student.name}</p>
            <p>Email: {student.email}</p>
            <p>Mobile No: {student.mobile}</p>
          </div>
        </div>
        <div className='md:w-1/2 w-full p-4'>
          <p className='text-xl font-semibold underline'>Address Information</p>
          <div className='text-gray-600 mt-1'>
            <p>City: {student.city}</p>
            <p>Country: {student.country}</p>
          </div>
        </div>
      </div>
      <div className='p-4 flex-1 text-xl font-semibold underline'>
        <p>Course Details</p>
      </div>
    </div>
  )
}

export default Dashboard
