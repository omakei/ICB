import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
// import classNames from 'classnames';
import Icon from '@/Shared/Icon';

export default ({ icon, link, text }) => {
  const isActive = route().current(link + '*');


  return (
    <li>
      <InertiaLink href={route(link)} className={ isActive? 'active': ''}>
        <Icon className={iconClasses} />
        <span class="sidebar-mini-hide">{text}</span>
      </InertiaLink>
    </li>
  );
};
