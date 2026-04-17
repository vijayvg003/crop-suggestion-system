import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';

const DashBoardLayout = () => {
  return (
    <>
      <Header />
      <div className='dashboard-wrapper'>
        <SideBar />
        <main className='dashboard-main'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default DashBoardLayout;