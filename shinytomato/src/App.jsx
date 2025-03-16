// Import react things
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';

// Import pages
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs.jsx';
import Donation from './Pages/Donation.jsx';
import HowWeOperate from './Pages/HowWeOperate.jsx';
import OurSanctuary from './Pages/OurSanctuary.jsx';
import { Container } from '@mui/material';


function App() {

  return (
    <Container maxWidth='x1'>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/supportus" element={<Donation />} />
        <Route path="/howweoperate" element={<HowWeOperate />} />
        <Route path="/oursanctuary" element={<OurSanctuary />} />

      </Routes>
    </Container>
  );
}

export default App;
