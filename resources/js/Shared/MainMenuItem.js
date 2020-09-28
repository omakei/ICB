import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import Icon from '@/Shared/Icon';

export default ({ icon, link, text }) => {
  const isActive = route().current(link + '*');


  return (
    <li className={ isActive? 'open': ''}>
      <InertiaLink href={route(link)} className={ isActive? 'active': ''}>
        <Icon className={icon} />
        <span class="sidebar-mini-hide">{text}</span>
      </InertiaLink>
    </li>
  );
};
