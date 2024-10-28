import Logo from '../assets/icons/ChadLogo.svg';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { useRegistration } from '../context/RegistrationContext';
import { useNavigate } from 'react-router-dom';
import { Steps } from '../utils/steps';
import classNames from 'classnames';

const Header = () => {
  const { registrationStep, setRegistrationStep } = useRegistration();
  const navigate = useNavigate();

  console.log(registrationStep);

  const onPrevClick = () => {
    navigate(Steps[registrationStep - 2]);
    setRegistrationStep(registrationStep - 1);
  };

  return (
    <header>
      <div className="flex mb-4">
        <img src={Logo} alt="ChadLogo" />
        <p className="font-eudoxus text-2xl font-bold leading-[32px] tracking-tight text-left text-customBlue">
          Chad
        </p>
      </div>

      <p className="font-inter text-[12px] font-normal leading-[18px] tracking-[-0.01em] text-left text-mainText block lg:hidden">
        Step {registrationStep} of 4
      </p>

      <div className="w-full h-2 bg-white rounded border border-[#C9D3E0] mt-2 block lg:hidden">
        <div
          className={classNames('h-full rounded bg-[#C9D3E0]', {
            'w-1/4': registrationStep === 1,
            'w-2/4': registrationStep === 2,
            'w-3/4': registrationStep === 3,
            'w-full': registrationStep === 4,
          })}
        ></div>
      </div>
      {registrationStep >= 2 && (
        <div className="flex justify-between px-3 mt-2 block lg:hidden">
          <button
            onClick={onPrevClick}
            className="text-mainText flex items-center font-inter text-xs font-normal leading-5 tracking-tight text-left bg-transparent border-none hover:text-blue-600 transition duration-300"
          >
            <IoChevronBackOutline size={12} />
            Prev
          </button>
          <button
            disabled={true}
            className="text-[#C3CAD5] flex items-center font-inter text-xs font-normal leading-5 tracking-tight text-left bg-transparent border-none hover:text-blue-600 transition duration-300"
          >
            <IoChevronForwardOutline size={12} />
            Next
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
