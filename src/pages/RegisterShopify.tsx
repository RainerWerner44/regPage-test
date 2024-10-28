import React, { useContext, useEffect, useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import Loader from '../components/Loader';
import NoShopifyContent from '../components/NoShopifyContent';
import ShopifyConnectedPage from './ShopifyConnectedPage';
import { useRegistration } from '../context/RegistrationContext';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const RegisterShopify = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [connectShopify, setConnectShopify] = useState(true);
  const [isShopifyConnected, setIsShopifyConnected] = useState(false);
  const naigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  const onConnectStore = () => {
    setIsShopifyConnected(true);
    naigate('/shopify-success');
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          {connectShopify && !isShopifyConnected && (
            <div className="mt-8">
              <h2 className="font-inter text-2xl font-semibold leading-7 tracking-tight text-left text-[#134267]">
                Connect to Shopify Store
              </h2>
              <p className="mt-2 text-mainText font-inter text-sm font-normal leading-5 tracking-tight text-left">
                Installs the Chad widget in your Shopify store and sets it up to
                display your customers’ order information and self-serve
                options.
              </p>

              <div className="mt-8 mb-8 bg-[#F8F9FC] w-full rounded-lg p-4">
                <ul className="space-y-4">
                  <li className="flex flex-col items-start space-x-2">
                    <div className="flex items-center gap-2 mb-1">
                      <FcCheckmark size={20} />
                      <h3 className="font-inter text-[14px] font-medium leading-[21px] tracking[-0.01em] text-left text-[#134267]">
                        Track orders and shipping
                      </h3>
                    </div>
                    <p className="pl-5 text-mainText font-inter text-[14px] font-normal leading-[21px] tracking[-0.01em] text-left">
                      Global coverage with 600+ couriers supported
                    </p>
                  </li>

                  <li className="flex flex-col items-start space-x-2">
                    <div className="flex items-center gap-2 mb-1">
                      <FcCheckmark size={20} />
                      <h3 className="font-inter text-[14px] font-medium leading-[21px] tracking[-0.01em] text-left text-[#134267]">
                        Manage orders
                      </h3>
                    </div>
                    <p className="pl-5 text-mainText font-inter text-[14px] font-normal leading-[21px] tracking[-0.01em] text-left">
                      Allow customers to track, return, exchange, or report
                      problems with their orders
                    </p>
                  </li>

                  <li className="flex flex-col items-start space-x-2">
                    <div className="flex items-center gap-2 mb-1">
                      <FcCheckmark size={20} />
                      <h3 className="font-inter text-[14px] font-medium leading-[21px] tracking[-0.01em] text-left text-[#134267]">
                        Process returns and exchanges
                      </h3>
                    </div>
                    <p className="pl-5 text-mainText font-inter text-[14px] font-normal leading-[21px] tracking[-0.01em] text-left">
                      Automatically checks your store policy and existing
                      inventory before resolving or escalating each request
                    </p>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={onConnectStore}
                className="w-full py-3 px-4 bg-[#32ABF2] text-white rounded-md hover:bg-blue-600 font-inter text-[14px] font-[500] leading-[21px] tracking[-0.01em] text-center transition duration-300 ease-out"
              >
                Connect store
              </button>

              <div className="mt-4 flex justify-center">
                <button
                  type="button"
                  onClick={() => {
                    setConnectShopify(false);
                  }}
                  className="text-center text-[#4F637D] font-inter text-[12px] font-[400] leading-[18px] tracking[-0.01em] bg-transparent border-none cursor-pointer"
                >
                  I don’t use Shopify
                </button>
              </div>
            </div>
          )}
          {!connectShopify && !isShopifyConnected && (
            <NoShopifyContent setConnectShopify={setConnectShopify} />
          )}

          {isShopifyConnected && <ShopifyConnectedPage />}
        </>
      )}
    </>
  );
};

export default RegisterShopify;
