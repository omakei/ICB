import React from 'react';

export default ({ label, name, className, errors = [], ...props }) => {
  return (
    <div className={`form-group ${className} ${errors.length?'is-invalid':''}`}>
      {label && (
        <label htmlFor={name}>
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        {...props}
        className={`form-input form-control ${errors.length ? 'error' : ''}`}
        aria-invalid={errors.length?'true':''}
        aria-describedby={errors.length?name+'-error':''}
      />
      {errors && <div id={name+'-error'} className="invalid-feedback animated fadeInDown">{errors[0]}</div>}
    </div>
  );
};
