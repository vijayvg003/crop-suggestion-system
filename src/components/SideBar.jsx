import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdDashboard, MdInfoOutline } from 'react-icons/md';
import { FaHome, FaSeedling } from 'react-icons/fa';

const SideBar = () => {
  return (
    <aside className='sidebar'>
      <div className='sidebar-title'>
        <FaSeedling className='sidebar-title-icon' />
        <span>Menu</span>
      </div>

      <nav className='sidebar-nav'>
        <NavLink to='/' className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
          <FaHome className='sidebar-icon' />
          <span>Home</span>
        </NavLink>

        <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
          <MdDashboard className='sidebar-icon' />
          <span>Live Dashboard</span>
        </NavLink>

        <NavLink to='/about' className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
          <MdInfoOutline className='sidebar-icon' />
          <span>About Project</span>
        </NavLink>
      </nav>

      <div className='sidebar-status'>
        <div className='status-dot'></div>
        <span>Sensor Online</span>
      </div>
    </aside>
  );
};

export default SideBar;