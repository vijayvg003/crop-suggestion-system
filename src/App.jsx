import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loader from './components/Loader';

import MainLayout from './layouts/MainLayout';
import DashBoardLayout from './layouts/DashBoardLayout';
import Home from './pages/Home';
import DashBoard from './pages/DashBoard';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
    ],
  },
  {
    path: '/dashboard',
    element: <DashBoardLayout />,
    children: [
      { index: true, element: <DashBoard /> },
    ],
  },
]);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return <RouterProvider router={router} />;
};

export default App;