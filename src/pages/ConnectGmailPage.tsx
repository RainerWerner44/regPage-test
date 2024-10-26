import React, { useEffect, useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import Loader from '../components/Loader';
import GoogleIcon from '../assets/icons/GoogleIcon.svg';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from '../context/RegistrationContext';

const ConnectGmailPage = () => {
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

  const onConnectGmailClick = () => {
    navigate('/onboard-complete');
    setRegistrationStep(0);
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mt-8">
          <h2 className="font-inter text-2xl font-semibold leading-7 tracking-tight text-left text-[#134267]">
            Connect to customer support email{' '}
          </h2>
          <p className="mt-2 text-mainText font-inter text-sm font-normal leading-5 tracking-tight text-left">
            Allows Chad to send automated responses on your behalf from your
            usual support mailbox
          </p>

          <div className="mt-8 mb-8 bg-[#F8F9FC] w-full rounded-lg p-4">
            <ul className="space-y-4">
              <li className="flex flex-col items-start space-x-2">
                <div className="flex items-center gap-2 mb-1">
                  <FcCheckmark size={20} />
                  <h3 className="font-inter text-[14px] font-medium leading-[21px] tracking[-0.01em] text-left text-[#134267]">
                    Contextual responses
                  </h3>
                </div>
                <p className="pl-5 text-mainText font-inter text-[14px] font-normal leading-[21px] tracking[-0.01em] text-left">
                  Custom responses to any support situation from “where’s my
                  stuff?” to “I want a refund”
                </p>
              </li>

              <li className="flex flex-col items-start space-x-2">
                <div className="flex items-center gap-2 mb-1">
                  <FcCheckmark size={20} />
                  <h3 className="font-inter text-[14px] font-medium leading-[21px] tracking[-0.01em] text-left text-[#134267]">
                    Reply from anywhere
                  </h3>
                </div>
                <p className="pl-5 text-mainText font-inter text-[14px] font-normal leading-[21px] tracking[-0.01em] text-left">
                  Respond to your customers via email or Chad chat—it’s all
                  saved in the same thread
                </p>
              </li>

              <li className="flex flex-col items-start space-x-2">
                <div className="flex items-center gap-2 mb-1">
                  <FcCheckmark size={20} />
                  <h3 className="font-inter text-[14px] font-medium leading-[21px] tracking[-0.01em] text-left text-[#134267]">
                    Categorical inbox tags
                  </h3>
                </div>
                <p className="pl-5 text-mainText font-inter text-[14px] font-normal leading-[21px] tracking[-0.01em] text-left">
                  Tags your emails by category so you know what to expect before
                  even opening an email
                </p>
              </li>
            </ul>
          </div>

          <button
            type="button"
            className="flex w-full cursor-pointer rounded-[2px]"
            onClick={onConnectGmailClick}
          >
            <div className="bg-white p-4">
              <img src={GoogleIcon} alt="GoogleIcon" />
            </div>
            <div className="w-full bg-[#5383EC] h-[50px] flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-[#3f7cbb]">
              <p className="font-inter text-white text-[14px] font-[500] leading-[21px] tracking-[-0.01em] text-left">
                Connect Gmail account
              </p>
            </div>
          </button>

          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={() => navigate('/gmail-empty')}
              className="text-center text-[#4F637D] font-inter text-[12px] font-[400] leading-[18px] tracking[-0.01em] bg-transparent border-none cursor-pointer"
            >
              I don’t use Gmail
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ConnectGmailPage;
