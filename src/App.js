// import logo from './logo.svg';
import './App.css';
// import React from "react";
import Navbar from "./components/Navbar.js";
import Sidebar from './components/sidebar';
import Dashboard from './components/Dashboard';
import Uisettings from './components/Uisettings';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const App = () => {
  return (
    <div class="g-sidenav-show  bg-gray-100">
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
      <Navbar />
      <Dashboard />
      </main>
      <Uisettings />
    </div>
  );
};

export default App;
