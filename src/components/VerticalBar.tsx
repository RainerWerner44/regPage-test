import { useRegistration } from '../context/RegistrationContext';
import { useEffect, useState } from 'react';
import Checkmark from '../assets/icons/Checkmark.svg';
import { Steps } from '../utils/steps';
import { useNavigate } from 'react-router-dom';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

const VerticalBar = () => {
  const { registrationStep, setRegistrationStep } = useRegistration();
  const navigate = useNavigate();

  const [paddingLeft, setPaddingLeft] = useState(
    `${(window.innerWidth / 3 - 331) / 2}px`
  );
  const currentURL = window.location.href;

  useEffect(() => {
    const handleResize = () => {
      const vw = window.innerWidth;
      setPaddingLeft(`${(vw / 3 - 331) / 2}px`);
    };

    const updatePaddingLeft = () => {
      const vw = window.innerWidth;
      setPaddingLeft(`${(vw / 3 - 331) / 2}px`);
    };

    window.addEventListener('resize', handleResize);
    updatePaddingLeft();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentURL]);

  const onPrevClick = () => {
    navigate(Steps[registrationStep - 2]);
    setRegistrationStep(registrationStep - 1);
  };

  return (
    <>
      <div
        className="w-[331px] grid justify-start"
        style={{ marginInline: paddingLeft }}
      >
        <div className="flex flex-col items-center pt-[204px]">
          <div className="flex items-center">
            <div
              className="w-8 h-8 rounded-full border-2 relative"
              style={{
                borderColor: registrationStep >= 1 ? '#32ABF2' : '#5D7FA3',
                backgroundColor:
                  registrationStep >= 2 ? '#32ABF2' : 'transparent',
                backgroundImage:
                  registrationStep >= 2 ? `url(${Checkmark})` : '',
                backgroundPosition: registrationStep >= 2 ? 'center' : '',
                backgroundRepeat: registrationStep >= 2 ? 'no-repeat' : '',
              }}
            />
            <span className="ml-12 text-base absolute font-inter font-medium text-[16px] leading-[24px] tracking-[-0.01em] text-left text-white">
              Welcome
            </span>
          </div>

          <div
            className="w-0 h-12 border-2"
            style={{
              borderColor: registrationStep >= 2 ? '#32ABF2' : '#5D7FA3',
            }}
          />

          <div className="flex items-center">
            <div
              className="w-8 h-8 rounded-full border-2 relative"
              style={{
                borderColor: registrationStep >= 2 ? '#32ABF2' : '#5D7FA3',
                backgroundColor:
                  registrationStep >= 3 ||
                  currentURL.includes('/shopify-success')
                    ? '#32ABF2'
                    : 'transparent',
                backgroundImage:
                  registrationStep >= 3 ||
                  currentURL.includes('/shopify-success')
                    ? `url(${Checkmark})`
                    : '',
                backgroundPosition:
                  registrationStep >= 3 ||
                  currentURL.includes('/shopify-success')
                    ? 'center'
                    : '',
                backgroundRepeat:
                  registrationStep >= 3 ||
                  currentURL.includes('/shopify-success')
                    ? 'no-repeat'
                    : '',
              }}
            />
            <span className="ml-12 text-base absolute font-inter font-medium text-[16px] leading-[24px] tracking-[-0.01em] text-left text-white">
              Connect your Shopify store
            </span>
          </div>

          <div
            className="w-0 h-12 border-2"
            style={{
              borderColor: registrationStep >= 3 ? '#32ABF2' : '#5D7FA3',
            }}
          />

          <div className="flex items-center">
            <div
              className="w-8 h-8 bg-transparent rounded-full border-2 relative"
              style={{
                borderColor: registrationStep >= 3 ? '#32ABF2' : '#5D7FA3',
              }}
            />
            <span className="ml-12 text-base absolute font-inter font-medium text-[16px] leading-[24px] tracking-[-0.01em] text-left text-white">
              Connect your customer support email
            </span>
          </div>

          <div
            className="w-0 h-12 border-2"
            style={{
              borderColor: '#5D7FA3',
            }}
          />

          <div className="flex items-center">
            <div
              className="w-8 h-8 bg-transparent rounded-full border-2 relative"
              style={{
                borderColor: '#5D7FA3',
              }}
            />
            <span className="ml-12 text-base absolute font-inter font-medium text-[16px] leading-[24px] tracking-[-0.01em] text-left text-white">
              Done
            </span>
          </div>
        </div>
      </div>

      {registrationStep >= 2 && (
        <div className="flex justify-between">
          <button
            onClick={onPrevClick}
            style={{
              fontFamily: 'Inter',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '21px',
              letterSpacing: '-0.01em',
              textAlign: 'left',
              marginLeft: paddingLeft,
            }}
            className="mt-4 flex items-center bg-[#134267] text-[#93A8C1] font-inter text-xs font-normal leading-5 tracking-tight text-left border-none hover:bg-[#3C6E98] transition duration-300 py-[6px] px-[12px] gap-[8px]"
          >
            <IoChevronBackOutline size={16} />
            Back
          </button>
          <button
            disabled={true}
            style={{
              fontFamily: 'Inter',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '21px',
              letterSpacing: '-0.01em',
              textAlign: 'left',
              marginRight: paddingLeft,
            }}
            className="mt-4 flex items-center  text-[#93A8C1] font-inter text-xs font-normal leading-5 tracking-tight text-left border-none hover:bg-[#3C6E98] transition duration-300 py-[6px] px-[12px] gap-[8px]"
          >
            <IoChevronForwardOutline size={16} />
            Next
          </button>
        </div>
      )}

      <div className="fixed bottom-0 left-0 w-1/3 h-[100px] mb-14">
        <div
          className="bg-[#134267] p-4 flex items-center gap-4 rounded-[8px]"
          style={{ marginLeft: paddingLeft, marginRight: paddingLeft }}
        >
          <p
            className="text-[32px] font-bold leading-[32px] text-left text-[#96CAF7]"
            style={{ fontFamily: 'Eudoxus Sans' }}
          >
            5X
          </p>
          <p
            className="text-[14px] font-normal text-[#96CAF7] leading-[21px] tracking-[-0.01em] text-left"
            style={{ fontFamily: 'Inter' }}
          >
            Acquiring a new customer is 5x more costly than making an unhappy
            customer happy
          </p>
        </div>

        <div
          className="flex gap-3 justify-center mt-4"
          style={{ marginLeft: paddingLeft, marginRight: paddingLeft }}
        >
          <div className="w-2 h-2 bg-[#96CAF7] rounded-full"></div>
          <div className="w-2 h-2 bg-[#134267] rounded-full"></div>
          <div className="w-2 h-2 bg-[#134267] rounded-full"></div>
          <div className="w-2 h-2 bg-[#134267] rounded-full"></div>
          <div className="w-2 h-2 bg-[#134267] rounded-full"></div>
        </div>
      </div>
    </>
  );
};

export default VerticalBar;
