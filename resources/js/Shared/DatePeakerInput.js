import React, {useState} from 'react';
import DatePicker from 'react-date-picker'
import Icon from './Icon'

export default ({ label, name, className, errors = [], onChange, ...props }) => {
  const [startDate, setStartDate] = useState(new Date);

  return (
    <div className={`form-group ${className} ${errors.length?'is-invalid':''}`}>
      {label && (
        <label htmlFor={name}>
          {label}
        </label>
      )}
      <DatePicker
        onChange={onChange}
        id={name}
        name={name}
        {...props}
        format="dd-MM-yyyy"
        calendarIcon={<Icon className='si si-calendar'/>}
        clearIcon={<Icon className='si si-close'/>}
        className={`form-input js-datepicker  js-datepicker-enabled form-control ${errors.length ? 'error' : ''}`}
        aria-invalid={errors.length?'true':''}
        aria-describedby={errors.length?name+'-error':''}
      />
      {errors && <div id={name+'-error'} className="invalid-feedback animated fadeInDown">{errors[0]}</div>}
    </div>
  );
};
