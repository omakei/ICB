import React, { useState, useRef } from 'react';


export default ({ className, name, label, accept, errors = [], onChange }) => {
  const fileInput = useRef();
  const [file, setFile] = useState(null);

  function handleFileChange(e) {
    const file = e.target.files[0];
    setFile(file);
    onChange(file);
  }

  return (
    <div className={`form-group ${className}  ${errors.length?'is-invalid':''}`}>
        <label  htmlFor={name}>
          {label}
        </label>
    <div className="custom-file pl-2">
        <input
          id={name}
          name={name}
          ref={fileInput}
          accept={accept}
          type="file"
          data-toggle="custom-file-input"
          className="custom-file-input js-custom-file-input-enabled"
          onChange={handleFileChange}
        />
        {label && (
        <label className="custom-file-label" htmlFor={name}>
          {label}
        </label>
      )}

      {errors && <div id={name+'-error'} className=" invalid-feedback animated fadeInDown">{errors[0]}</div>}
    </div>
    </div>
  );
};
