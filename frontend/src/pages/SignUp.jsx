import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [emailId, setEmailId] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [Loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const saveData = () => {
    const data = {
      userName: userName,
      emailId: emailId,
      password: password
    };

    setLoading(true);

    axios.post('http://localhost:3500/signup', data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }

  return (
    <div className='justify-between items-center'>
      <div className='flex flex-col items-center  mt-48 bg-[#8ecae6] ml-9 max-w-xl md:max-w-3xl md:ml-32 rounded-lg p-8 gap-9'>
        <h1 className='text-2xl font-semibold text-[#023047]'>Sign Up</h1>
        <input type='text' placeholder='Username' onChange={(e) => setUserName(e.target.value)} className=' py-4 bg-slate-100 font-sm text-lg  border-spacing-2 border-4 rounded-lg p-2 px-16 ' />
        <input type='text' placeholder='EmailId' onChange={(e) => setEmailId(e.target.value)} className=' py-4 bg-slate-100 font-sm text-lg border-4 border-spacing-2 rounded-lg p-2 px-16' />
        <input type='text' placeholder='Password' onChange={(e) => setPassword(e.target.value)} className=' py-4 bg-slate-100 font-sm text-lg border-4 border-spacing-2 rounded-lg p-2 px-16' />
        <button onClick={saveData} className='bg-blue-500 hover:bg-blue-700 p-3 px-12 rounded-xl text-white font-medium' type='submit'>SignUp</button>
      </div>
    </div>
  );
}

export default SignUp;
