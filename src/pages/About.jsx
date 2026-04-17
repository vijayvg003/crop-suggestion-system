import React from 'react';
import { FaLightbulb, FaMicrochip, FaUserTie } from 'react-icons/fa';
import { MdOutlineWarning } from 'react-icons/md';
import { GiProcessor } from 'react-icons/gi';
import { WiCloud } from 'react-icons/wi';
import { MdSensors, MdDashboard } from 'react-icons/md';
import testImg from '../assets/images/soil_test_image.webp'
import '../styles/about.css';

const systemFlow = [
  { icon: <MdSensors />, label: 'Sensor node' },
  { icon: <GiProcessor />, label: 'Arduino UNO' },
  { icon: <FaMicrochip />, label: 'Wi-Fi' },
  { icon: <WiCloud />, label: 'Cloud' },
  { icon: <MdDashboard />, label: 'User Dashboard UI' },
];

const About = () => {
  return (
    <div className='about-page'>
      <div className='about-grid'>

        {/* LEFT — Image */}
        <div className='about-left'>
          <h2 className='about-main-title'>About the Project</h2>
          <div className='about-image-box'>
            <img
              src={testImg}
              alt='IoT Soil Sensor'
              className='about-img'
            />
          </div>
        </div>

        {/* RIGHT — Documentation */}
        <div className='about-right'>
          <h2 className='about-doc-title'>System Documentation</h2>

          {/* Challenge */}
          <div className='doc-card'>
            <div className='doc-card-title'>
              <MdOutlineWarning className='doc-icon warning' />
              <span>The Challenge</span>
            </div>
            <p>Farmers often lack knowledge about the nutrient levels in their soil, leading to improper fertilization, poor crop yields, and unsustainable farming practices.</p>
          </div>

          {/* Solution */}
          <div className='doc-card'>
            <div className='doc-card-title'>
              <FaLightbulb className='doc-icon lightbulb' />
              <span>The AgriSmart Solution</span>
            </div>
            <p>Our Smart Crop System provides an IoT-based real-time soil monitoring system. It uses sensors in the field to collect data on soil nutrients, moisture, and temperature. This system offers personalized crop recommendations based on real-time fertilization and irrigation practices.</p>
          </div>

          {/* System Overview */}
          <div className='doc-card'>
            <div className='doc-card-title-row'>
              <span className='doc-card-title-text'>System Overview</span>
              {/* <span className='last-7'>Last 7 Days ▾</span> */}
            </div>
            <div className='system-flow'>
              {systemFlow.map((item, i) => (
                <React.Fragment key={i}>
                  <div className='flow-step'>
                    <span className='flow-icon'>{item.icon}</span>
                    <span className='flow-label'>{item.label}</span>
                  </div>
                  {i < systemFlow.length - 1 && <span className='flow-arrow'>→</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Tech + Role */}
          <div className='doc-two-col'>
            <div className='doc-card'>
              <div className='doc-card-title'>
                <FaMicrochip className='doc-icon chip' />
                <span>Technologies Used</span>
              </div>
              <p>IoT sensors in the field collect data on soil conditions, which is processed and analyzed using cloud computing techniques to provide actionable insights.</p>
            </div>
            <div className='doc-card'>
              <div className='doc-card-title'>
                <FaUserTie className='doc-icon user' />
                <span>Your Role</span>
              </div>
              <p>I was responsible for developing and integrating the IoT soil monitoring system, building the cloud and data analytics features.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;