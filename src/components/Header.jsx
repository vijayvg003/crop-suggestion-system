import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className='header'>

        {/* LOGO */}
        <div className='logo'>
          <span className='plant-icon'><RiPlantFill /></span>
          <span className='logo-text'>AgriSmart IoT</span>
        </div>

        {/* DESKTOP NAV */}
        <nav className='nav-links'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Live Dashboard</NavLink>
          <NavLink to="/about">About Project</NavLink>
        </nav>

        {/* RIGHT SIDE: Profile + Launch Button + Hamburger */}
        <div className='header-right'>
          <NavLink to="/dashboard" className='launch-btn'>Launch Dashboard</NavLink>

          <div className='profile'>
            <span className='pro-icon'><FaUser /></span>
            <span className='pro-name'>Vijay</span>
          </div>

          <div className='menu-icon' onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX /> : <HiMenu />}
          </div>
        </div>

      </header>

      {/* OVERLAY */}
      <div
        className={`overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* MOBILE DRAWER */}
      <nav className={`drawer ${menuOpen ? "open" : ""}`}>
        <div className='drawer-logo'>
          <span className='plant-icon'><RiPlantFill /></span>
          <span>AgriSmart IoT</span>
        </div>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/dashboard" onClick={() => setMenuOpen(false)}>Live Dashboard</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About Project</NavLink>
        <NavLink to="/dashboard" className='launch-btn-drawer' onClick={() => setMenuOpen(false)}>
          Launch Dashboard
        </NavLink>
      </nav>
    </>
  );
};

export default Header;