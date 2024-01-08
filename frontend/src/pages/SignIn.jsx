import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dataCheck = async () => {
    const data = {
      emailId: emailId,
      password: password,
    };
    setLoading(true);

    axios.post('http://localhost:3500/signin', data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        setError('Username or password is invalid !');
        console.log(error);
      });
  };


  return (
    <div className='justify-between items-center'>
      <div className='flex flex-col items-center mt-48 bg-[#8ecae6] ml-9 max-w-xl md:max-w-3xl md:ml-32 rounded-lg p-8 gap-9'>
        <h1 className='text-2xl font-semibold text-[#023047]'>Sign In</h1>
        <input
          type='text'
          onChange={(e) => setEmailId(e.target.value)}
          placeholder='EmailId'
          className='py-4 bg-slate-100 font-sm text-lg border-4 border-spacing-2 rounded-lg p-2 px-16'
        />
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          className='py-4 bg-slate-100 font-sm text-lg border-4 border-spacing-2 rounded-lg p-2 px-16'
        />
        <button
          onClick={dataCheck}
          className='bg-blue-500 hover:bg-blue-700 p-3 px-12 rounded-xl text-white font-medium'
          type='submit'
        >
          SignIn
        </button>
        <p className='text-[#d22b2b] text-md font-semibold'>{error}</p>
       
      </div>
    </div>
  );
};

export default SignIn;
