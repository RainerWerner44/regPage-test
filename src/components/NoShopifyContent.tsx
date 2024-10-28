import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select, { SingleValue } from 'react-select';
import { useRegistration } from '../context/RegistrationContext';

const options = [
  { value: 'woocommerce', label: 'WooCommerce' },
  { value: 'bigcommerce', label: 'BigCommerce' },
  { value: 'wix', label: 'Wix eCommerce' },
];

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: '#F8F9FC',
    padding: '8px 4px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: '#134267',
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: '#C3CAD5',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};

type Props = {
  setConnectShopify: (state: boolean) => void;
};

const NoShopifyContent: React.FC<Props> = ({ setConnectShopify }) => {
  const [selectedOption, setSelectedOption] =
    useState<SingleValue<{ value: string; label: string }>>(null);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedOption) {
      navigate('/shopify-response');
    }
  };

  return (
    <div className="mt-8">
      <h2 className="font-inter text-2xl font-semibold leading-7 tracking-tight text-left text-[#134267]">
        Don’t use Shopify?
      </h2>
      <p className="mt-2 text-mainText font-inter text-sm font-normal leading-5 tracking-tight text-left">
        Chad Beta is currently only available on Shopify. We’ll send you an
        email when Chad becomes available on your platform.
      </p>

      <form onSubmit={handleSubmit} className="mt-8">
        <label
          htmlFor="platform"
          className="text-mainText font-inter text-[12px] font-bold leading-[18px] tracking[-0.01em] text-left"
        >
          Platform
        </label>
        <div className="mt-2">
          <Select
            options={options}
            styles={customStyles}
            placeholder="Select platform"
            isSearchable={false}
            onChange={(option) => setSelectedOption(option)}
          />
        </div>

        <button
          type="submit"
          disabled={!selectedOption}
          className={`mt-8 w-full py-3 px-4 rounded-md font-inter text-[14px] font-[500] leading-[21px] tracking-[-0.01em] text-center transition duration-300 ease-out ${
            selectedOption
              ? 'bg-[#32ABF2] hover:bg-blue-600 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Submit
        </button>
      </form>

      <div className="mt-4 flex justify-center">
        <button
          type="button"
          onClick={() => setConnectShopify(true)}
          className="text-center text-[#4F637D] font-inter text-[12px] font-[400] leading-[18px] tracking[-0.01em] bg-transparent border-none cursor-pointer"
        >
          Actually use Shopify? <span className="text-[#32ABF2]">Connect</span>
        </button>
      </div>
    </div>
  );
};

export default NoShopifyContent;
