import React, { useState } from 'react';
import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [doesUserExist, setDoesUserExist] = useState({
    email: '',
    password: '',
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const navigate = useNavigate();
  let errors = [];

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDoesUserExist((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const validateForm = () => {
    const { email, password } = doesUserExist;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errors.push('Please enter a valid email address.');
    }

    if (password.length <= 4) {
      errors.push('Password must be more than 4 characters.');
    }

    return errors;
  };

  const validateUser = () => {
    if (localStorage.getItem('email') !== doesUserExist.email) {
      errors.push('Email of this user does not exist');
    }

    if (localStorage.getItem('password') !== doesUserExist.password) {
      errors.push('Wrong password');
    }

    return errors;
  };

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors = validateForm();
    const authUser = validateUser();

    if (errors.length > 0 || authUser.length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors([]);

      navigate('/login-success');
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
          value={doesUserExist.email}
          onChange={onChange}
          className="font-inter block w-full pl-4 pr-2 mt-2 py-[10px] bg-[#F8F9FC] border-none rounded-[4px] shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          required
        />
      </div>

      <div className={formErrors.length > 0 ? 'mb-4' : 'mb-8'}>
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
            value={doesUserExist.password}
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
        Login
      </button>
    </form>
  );
};

export default LoginForm;
