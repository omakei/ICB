import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import Icon from '@/Shared/Icon';

export default ({ icon, link, text, children }) => {
  let isActive = route().current(link + '*');

  function handleOnClick(e) {

    e.preventDefault()

    isActive = !isActive

    // console.log(isActive)
  }

  return (
    <li className={ isActive? 'open': ''}>
      <InertiaLink href="#" className={`nav-submenu ${isActive? 'active': ''}`} data-toggle="nav-submenu" onClick={handleOnClick}>
        <Icon className={icon} />
        <span class="sidebar-mini-hide">{text}</span>
      </InertiaLink>
      {children}
    </li>
  );
};
