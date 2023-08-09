import React from 'react';
export const Input = ({ label,onChange, value, type, id, placeholder, name }) => {
  return (
    <div className="input-container">
       <div>
          <label htmlFor={id}>
            {label}
          </label>
       </div>
         <input
           id={id}
           type={type}
           name={name}
           placeholder={placeholder}
           value={value}
           onChange={onChange}
         />
  </div>
    )
}
export default Input;
