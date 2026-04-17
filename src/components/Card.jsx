import React from 'react';

const Card = ({ title, value, unit, icon, colorClass }) => {
  return (
    <div className={`card ${colorClass || ''}`}>
      <div className='card-header'>
        <span className='card-title'>{title}</span>
        <span className='card-icon'>{icon}</span>
      </div>
      <div className='card-unit'>{unit}</div>
      <div className='card-value'>{value}</div>
    </div>
  );
};

export default Card;