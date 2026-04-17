import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaThermometerHalf, FaSeedling, FaWifi } from 'react-icons/fa';
import { GiChemicalDrop } from 'react-icons/gi';
import { MdArrowForward } from 'react-icons/md';
import agriImg from "../assets/images/AgiCulture_Land.avif"
import '../styles/home.css';

const features = [
  {
    icon: <FaThermometerHalf />,
    title: 'Real-time Monitoring',
    desc: 'Track soil data instantly using IoT sensors.',
    color: 'feat-blue',
  },
  {
    icon: <GiChemicalDrop />,
    title: 'NPK Analysis',
    desc: 'Measure Nitrogen, Phosphorus, and Potassium levels.',
    color: 'feat-purple',
  },
  {
    icon: <FaSeedling />,
    title: 'Crop Suggestions',
    desc: 'Get smart recommendations based on soil data.',
    color: 'feat-green',
  },
  {
    icon: <FaWifi />,
    title: 'IoT Integration',
    desc: 'Automated data collection from field sensors.',
    color: 'feat-orange',
  },
];

const steps = [
  'Collect data via sensors',
  'Process data in system',
  'Analyze nutrients (NPK, pH)',
  'Get crop recommendation',
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='home-page'>

      {/* HERO SECTION */}
      <section className='hero-section'>
        <div className='hero-text'>
          <h1 className='hero-title'>Analyze Soil.<br />Grow Smart.</h1>
          <p className='hero-subtitle'>
            Analyze soil nutrients in real-time and get crop recommendations instantly.
          </p>
          <button className='hero-btn' onClick={() => navigate('/dashboard')}>
            Get Started
          </button>
        </div>

        <div className='hero-image'>
  <div className='hero-illustration'>
    <img
      src={agriImg}
      alt='Agriculture Land'
      className='hero-agri-img'
    />
  </div>
</div>
        
      </section>

      {/* FEATURES */}
      <section className='features-section'>
        <h2 className='section-title'>Features</h2>
        <div className='features-grid'>
          {features.map((f, i) => (
            <div className={`feature-card ${f.color}`} key={i}>
              <span className='feature-icon'>{f.icon}</span>
              <div>
                <h3 className='feature-title'>{f.title}</h3>
                <p className='feature-desc'>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className='how-section'>
        <h2 className='section-title'>How It Works</h2>
        <div className='steps-row'>
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div className='step-box'>
                <span className='step-num'>{i + 1}.</span>
                <span className='step-text'>{step}</span>
              </div>
              {i < steps.length - 1 && (
                <MdArrowForward className='step-arrow' />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;