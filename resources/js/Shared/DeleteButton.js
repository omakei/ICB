import React from 'react';

export default ({ onDelete, children, className }) => (
  <button
    className={`btn btn-alt-danger ${className}`}
    tabIndex="-1"
    type="button"
    onClick={onDelete}
  >
    {children}
  </button>
);
