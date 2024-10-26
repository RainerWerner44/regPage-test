import React, { useState } from 'react';
import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md';
import { useRegistration } from '../context/RegistrationContext';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [newUser, setNewUser] = useState({
    email: '',
    name: '',
    password: '',
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const { setRegistrationStep } = useRegistration();
  const navigate = useNavigate();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const validateForm = () => {
    const { email, name, password } = newUser;
    let errors = [];

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailPattern.test(email)) {
      errors.push("Please enter a valid email address.");
    }

    if (name.trim().length < 1) {
      errors.push("Name must be at least 1 character long.");
    }

    if (password.length <= 4) {
      errors.push("Password must be more than 4 characters.");
    }

    return errors;
  };

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    const errors = validateForm();

    if (errors.length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors([]);
      setRegistrationStep(2);

      localStorage.setItem('email', newUser.email);
      localStorage.setItem('name', newUser.name);
      localStorage.setItem('password', newUser.password);

      navigate('/shopify');
    }
  };

  return (
    <form className="max-w-md mx-auto mt-8" onSubmit={onSubmitForm}>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="font-inter text-[12px] font-medium leading-[18px] tracking[-0.01em] text-left text-mainText"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="megachad@trychad.com"
          value={newUser.email}
          onChange={onChange}
          className="font-inter block w-full pl-4 pr-2 mt-2 py-[10px] bg-[#F8F9FC] border-none rounded-[4px] shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          required
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="name"
          className="font-inter text-[12px] font-medium leading-[18px] tracking[-0.01em] text-left text-mainText"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Mega Chad"
          value={newUser.name}
          onChange={onChange}
          className="font-inter block w-full pl-4 pr-2 mt-2 py-[10px] bg-[#F8F9FC] border-none rounded-[4px] shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          required
        />
      </div>

      <div className={formErrors.length > 0 ? "mb-4" : "mb-8"}>
        <label
          htmlFor="password"
          className="font-inter text-[12px] font-medium leading-[18px] tracking[-0.01em] text-left text-mainText"
        >
          Password
        </label>
        <div className="relative mt-2">
          <input
            type={isPasswordVisible ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Enter password"
            value={newUser.password}
            onChange={onChange}
            className="font-inter block w-full pl-4 pr-10 py-[10px] bg-[#F8F9FC] border-none rounded-[4px] shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-0 bg-transparent border-none"
            onClick={() => {
              setIsPasswordVisible(!isPasswordVisible);
            }}
          >
            {!isPasswordVisible && (
              <MdOutlineVisibility className="text-gray-500" />
            )}
            {isPasswordVisible && (
              <MdOutlineVisibilityOff className="text-gray-500" />
            )}
          </button>
        </div>
      </div>

      {formErrors.length > 0 && (
        <div className="mb-4 text-red-600">
          {formErrors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}

      <button
        type="submit"
        className="w-full py-3 px-4 bg-[#32ABF2] text-white rounded-md hover:bg-blue-600 font-inter text-[14px] font-[500] leading-[21px] tracking[-0.01em] text-center transition duration-300 ease-out"
      >
        Create account
      </button>
    </form>
  );
};

export default RegisterForm;
