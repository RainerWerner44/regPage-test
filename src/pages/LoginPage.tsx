import React, { useState } from 'react';
import Logo from '../assets/icons/ChadLogo.svg';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../context/RegistrationContext';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const { setRegistrationStep } = useRegistration();
  const navigate = useNavigate();

  return (
    <>
      <div className="flex mt-4">
        <img src={Logo} alt="ChadLogo" />
        <p className="font-eudoxus text-2xl font-bold leading-[32px] tracking-tight text-left text-customBlue">
          Chad
        </p>
      </div>

      <h1 className="font-inter text-xl font-semibold leading-[28.8px] tracking-[-0.02em] text-left text-[#134267] mt-6 mb-2">
        Welcome back
      </h1>
      <p className="font-inter text-sm font-normal leading-[21px] tracking-[-0.01em] text-left text-[#4F637D]">
        Feeling ready to take on the day? Chad is too!
      </p>

      <LoginForm />

      <div className='flex justify-center'>
        <button 
        onClick={() => {
          navigate('/');
          setRegistrationStep(1);
        }}
        className="mt-4 text-center text-[#4F637D] font-inter text-[12px] font-[400] leading-[18px] tracking[-0.01em] bg-transparent border-none cursor-pointer">
          Don’t have an account? <span className="text-[#32ABF2]">Join the waitlist</span>
        </button>
      </div>
    </>
  );
};

export default LoginPage;
