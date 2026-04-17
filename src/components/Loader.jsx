import React from 'react';
import {PulseLoader} from 'react-spinners'

const Loader = () => {
  return (
    <div className='loader-screen'>
      <div className='loader-box'>
        <PulseLoader color="#2e7d52" size={15} />
        <p className='loader-text'>AgriSmart IoT</p>
        <p className='loader-sub'>Let's analyze your soil data...</p>
      </div>
    </div>
  );
};

export default Loader;