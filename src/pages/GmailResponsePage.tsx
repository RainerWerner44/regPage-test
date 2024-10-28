import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';
import Checkmark from '../assets/images/CheckMark.png';
import { useRegistration } from '../context/RegistrationContext';

const GmailResponsePage = () => {
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

  const onDoneClick = () => {
    navigate('/');
    setRegistrationStep(1);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="mt-[112px] lg:mb-[112px]">
            <img src={Checkmark} alt="Checkmark" className="mx-auto" />
            <h2 className="text-[#134267] font-inter text-[16px] font-medium leading-[19.2px] tracking-[-0.02em] text-center">
              Response received
            </h2>
            <p className="mt-2 text-mainText font-inter text-sm font-normal leading-21 tracking-[-0.01em] text-center">
              Thank you for your interest in Chad! We’ll be hard at work
              building integrations to support your email client.
            </p>
            <button
              type="submit"
              onClick={onDoneClick}
              className="mt-4 w-full py-3 px-4 bg-[#32ABF2] text-white rounded-md hover:bg-blue-600 font-inter text-[14px] font-[500] leading-[21px] tracking[-0.01em] text-center transition duration-300 ease-out"
            >
              Done
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default GmailResponsePage;
