// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Index from './Index';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidemenu from './components/Sidemenu';
import CrearJardin from './CrearJardin';
import './App.css';

function Layout() {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div id="wrapper" className="d-flex flex-column min-vh-100">
      <Header toggleSidebar={toggleSidebar} />
      <div id="main-content" className="d-flex flex-grow-1">
        {sidebarVisible && <Sidemenu />}
        <div id="page-content-wrapper" className={sidebarVisible ? 'sidebar-visible flex-grow-1' : 'sidebar-hidden flex-grow-1'}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/crear-jardin" element={<CrearJardin />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
