import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Write from './pages/Write';
import Register from './pages/Register';
import Login from './pages/Login';
import Single from './pages/Single';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider, Route, Link, Outlet } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {

  return (
    <div className='app'>
      <div className="container">
        <h1 className='custom-logo-font'>
          Faith Chiri
        </h1>
        <RouterProvider router={router} />
      </div>
    </div>
  )
};

export default App
