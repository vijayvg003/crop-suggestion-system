import React from 'react';

const Button = ({ label, onClick, icon, variant, type }) => {
  return (
    <button
      className={`btn ${variant === 'outline' ? 'btn-outline' : 'btn-primary'}`}
      onClick={onClick}
      type={type || 'button'}
    >
      {icon && <span className='btn-icon'>{icon}</span>}
      {label}
    </button>
  );
};

export default Button;