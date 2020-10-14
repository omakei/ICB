import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import Icon from '@/Shared/Icon';

export default ({ icon, children }) => {
  let isActive = false

  function handleOnClick(e) {

    e.preventDefault()

    isActive = !isActive

    // console.log(isActive)
  }

  return (
    <>
      <button type="button" className="btn" data-toggle="dropdown" aria-haspopup="true" onClick={handleOnClick} aria-expanded={ isActive? "true": "false"}><Icon className={icon} /></button>

      <div className="dropdown-menu">
        {children}
      </div>
      
    </>
  );
};
