import React from 'react';
import DeleteModel from './DeleteModel'

export default ({ children, className, message, link, id }) => {

  let hash = Math.random().toString(36).slice(2,20)

  return(
    <>
  <button
    className={`btn btn-alt-danger ${className}`}
    tabIndex="-1"
    type="button"
    data-toggle="modal"
    data-target={`#modal-delete-${id}-${hash}`}
  >
    {children}
  </button>
  <DeleteModel message={message} link={link} id={id} hash={hash}/>
  </>
  )
  
  };
