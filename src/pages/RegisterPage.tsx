import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import { useRegistration } from '../context/RegistrationContext';
import Header from '../components/Header';

const RegisterPage = () => {
  const navigate = useNavigate();

  return (    
    <section>
      <Header />
      <h1 className="font-inter text-xl font-semibold leading-[28.8px] tracking-[-0.02em] text-left text-[#134267] mt-8 mb-2 lg:mt-6">
        Welcome to Chad
      </h1>
      <p className="font-inter text-sm font-normal leading-[21px] tracking-[-0.01em] text-left text-[#4F637D]">
        Go live in 10 minutes! Our self-service widget empowers your customers
        to manage orders and track shipments 24/7 without driving you crazy.
      </p>

      <RegisterForm />

      <div className='flex justify-center'>
        <button 
        onClick={() => {
          navigate('/login');
        }}
        className="mt-4 text-center text-[#4F637D] font-inter text-[12px] font-[400] leading-[18px] tracking[-0.01em] bg-transparent border-none cursor-pointer">
          Already have an account? <span className="text-[#32ABF2]">Login</span>
        </button>
      </div>
    </section>
  );
};

export default RegisterPage;
