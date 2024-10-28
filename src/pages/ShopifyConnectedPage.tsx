import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import Avatar from '../assets/images/ShopifyAvatar.png';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../context/RegistrationContext';

const ShopifyConnectedPage = () => {
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

  const onWrongStoreClick = () => {
    navigate('/shopify');
    setRegistrationStep(2);
  }
  
  const onContinueClick = () => {
    navigate('/gmail');
    setRegistrationStep(3);
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className='mt-[112px] lg:mb-[112px]'>
            <img src={Avatar} alt="gigaChadLogo" className='mx-auto' />
            <h2 className='mt-9 text-[#134267] font-inter text-[16px] font-medium leading-[19.2px] tracking-[-0.02em] text-center'>[STORE-NAME] already connected</h2>
            <button
              type="submit"
              onClick={onContinueClick}
              className="mt-4 w-full py-3 px-4 bg-[#32ABF2] text-white rounded-md hover:bg-blue-600 font-inter text-[14px] font-[500] leading-[21px] tracking[-0.01em] text-center transition duration-300 ease-out"
            >
              Continue
            </button>

            <div className="mt-4 flex justify-center">
              <button
                type="button"
                onClick={onWrongStoreClick}
                className="text-[#4F637D] font-inter text-[12px] font-normal leading-[18px] tracking-[-0.01em] text-centercursor-pointer"
              >
                Wrong store? {' '}
                <span className='text-[#32ABF2]'>Connect another one</span>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ShopifyConnectedPage;
