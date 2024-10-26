import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';
import Checkmark from '../assets/images/CheckMark.png';
import { useRegistration } from '../context/RegistrationContext';

const LoginSuccessPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setRegistrationStep } = useRegistration();

  useEffect(() => {
    setIsLoading(true);

    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  const onOkClick = () => {
    navigate('/');
    setRegistrationStep(1);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="mt-[112px]">
            <img src={Checkmark} alt="Checkmark" className="mx-auto" />
            <h2 className="text-[#134267] font-inter text-[16px] font-medium leading-[19.2px] tracking-[-0.02em] text-center">
              Use your desktop to access Chad{' '}
            </h2>
            <p className="mt-2 text-mainText font-inter text-sm font-normal leading-21 tracking-[-0.01em] text-center">
              Chad doesn’t support mobile browsers. To access your dashboard,
              login from your laptop or desktop computer.{' '}
            </p>
            <button
              type="submit"
              onClick={onOkClick}
              className="mt-4 w-full py-3 px-4 bg-[#32ABF2] text-white rounded-md hover:bg-blue-600 font-inter text-[14px] font-[500] leading-[21px] tracking[-0.01em] text-center transition duration-300 ease-out"
            >
              Ok
            </button>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => {
                navigate('/login');
                setRegistrationStep(0);
              }}
              className="mt-4 text-center text-[#4F637D] font-inter text-[12px] font-[400] leading-[18px] tracking[-0.01em] bg-transparent border-none cursor-pointer"
            >
              Not xyz@triceps.com? {' '}
              <span className="text-[#32ABF2]">Logout</span>
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default LoginSuccessPage;
