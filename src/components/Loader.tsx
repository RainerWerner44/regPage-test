import React from 'react';
import { Hourglass } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='w-full h-[400px] flex justify-center items-center'>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#4F637D', '#20496C']}
      />
    </div>
  );
};

export default Loader;
