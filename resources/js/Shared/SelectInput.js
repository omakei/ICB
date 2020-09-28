import React from 'react';

export default ({
  label,
  name,
  className,
  children,
  errors = [],
  ...props
}) => {
  return (
    <div className={`form-group ${className} ${errors.length?'is-invalid':''}`}>
      {label && (
        <label htmlFor={name}>
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        {...props}
        className={`form-select form-control ${errors.length ? 'error' : ''}`}
        aria-invalid={errors.length?'true':''}
        aria-describedby={errors.length?name+'-error':''}
      >
        {children}
      </select>
      {errors && <div id={name+'-error'} className="invalid-feedback animated fadeInDown">{errors[0]}</div>}
    </div>
  );
};
