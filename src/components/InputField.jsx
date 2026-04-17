import React from 'react';

const InputField = ({ label, unit, icon, value, onChange, placeholder }) => {
  return (
    <div className='input-field-wrapper'>
      <div className='input-field-header'>
        <div>
          <p className='input-label'>{label}</p>
          <p className='input-unit'>{unit}</p>
        </div>
        <span className='input-icon'>{icon}</span>
      </div>
      <input
        type='number'
        className='input-box'
        value={value}
        onChange={onChange}
        placeholder={placeholder || '0'}
      />
    </div>
  );
};

export default InputField;