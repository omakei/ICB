import React from 'react';
import MainMenuItem from '@/Shared/MainMenuItem';
import MultiLinkMainMenuItem from '@/Shared/MultiLinkMainMenuItem';

export default () => {
  return (
    <ul className="nav-main">
      <MainMenuItem text="Dashboard" link="dashboard" icon="si si-speedometer" />
      <MainMenuItem text="Organization Stracture" link="organizations.index" icon="si si-layers" />
      <MultiLinkMainMenuItem text="User Managment" link="userdetails.index" icon="si si-users" >
        <ul>
          <MainMenuItem text="System Users" link="userdetails.index" icon="" />
          <MainMenuItem text="Board Registrations" link="boardregistrations.index" icon="" />
          <MainMenuItem text="Education Cetificates" link="educationcertificates.index" icon="" />
        </ul>
      </MultiLinkMainMenuItem>
      <MultiLinkMainMenuItem text="Project Managment" link="projects.index" icon="si si-folder-alt" >
        <ul>
          <MainMenuItem text="Clients" link="clients.index" icon="" />
          <MainMenuItem text="Projects" link="projects.index" icon="" />
          <MainMenuItem text="Loans" link="loans.index" icon="" />
        </ul>
      </MultiLinkMainMenuItem>
    </ul>
  );
};
