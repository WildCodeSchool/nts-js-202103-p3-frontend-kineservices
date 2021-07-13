import React from 'react';
import './FormInput.css';

// eslint-disable-next-line react/prop-types
function FormInput({ label, name, type, value = {}, setValue }) {
  const handleChange = (event) => {
    setValue({
      ...value,
      [name]: event.target.value,
    });
  };

  return (
    <div className="form">
      <label htmlFor={name}>
        <span className="label">{label}:</span>
        <input
          type={type}
          name={name}
          id={name}
          value={value[name]} // value.title, value.description...
          onChange={handleChange}
          required
        />
      </label>
    </div>
  );
}

export default FormInput;
