import React from 'react';
import Select from 'react-select'

export default ({
  label,
  name,
  options,
  className,
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
        <Select
          closeMenuOnSelect={false}
          isMulti
          name={name}
          {...props}
          className={` ${errors.length ? 'error' : ''}`}
          aria-invalid={errors.length?'true':''}
          aria-describedby={errors.length?name+'-error':''}
          options={options}
          isSearchable={true}
        />
      {errors && <div id={name+'-error'} className="invalid-feedback animated fadeInDown">{errors[0]}</div>}
    </div>
  );
};
