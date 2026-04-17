import React from 'react';
import { RiPlantFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-inner'>
        <div className='footer-logo'>
          <RiPlantFill className='footer-plant-icon' />
          <span>AgriSmart IoT</span>
        </div>
        <p className='footer-copy'>© 2025 Smart Crop System | Developed by Vijay</p>
      </div>
    </footer>
  );
};

export default Footer;