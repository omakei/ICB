import React from 'react';
import MainMenuItem from '@/Shared/MainMenuItem';

export default () => {
  return (
    <ul className="nav-main">
      <MainMenuItem text="Dashboard" link="dashboard" icon="si si-cup" />
    </ul>
  );
};
