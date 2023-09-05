import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import {GiMountains} from 'react-icons/gi';

import products from './frontend-welchmea/src/data/products.js';


import Nav from './frontend-welchmea/src/components/Nav.js';
import OrderPage from './frontend-welchmea/src/pages/OrderPage.js'
import HomePage from './frontend-welchmea/src/pages/HomePage.js';
import StaffPage from './frontend-welchmea/src/pages/StaffPage.js';
import GalleryPage from './frontend-welchmea/src/pages/GalleryPage.js';
import VitaminPage from './frontend-welchmea/src/pages/VitaminPage.js';
import CreateVitamin from './frontend-welchmea/src/pages/CreateVitamin.js';
import FeaturePage from './frontend-welchmea/src/pages/Features.js';
import UpdateVitamin from './frontend-welchmea/src/pages/UpdateVitamin.js';



function App() {
  const [vitamins, setupdateVitamins] = useState([])
  return (
    <>
    <BrowserRouter>
      <header className='App'>
        <h1 id="top">Meagan Welch: Full-Stack MERN app<GiMountains/></h1>
        <Nav/>
        <main>
          <section>
          <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/FeaturePage" element={<FeaturePage/>} /> 
          <Route path="/GalleryPage" element={<GalleryPage/>} /> 
          <Route path="/OrderPage" element={<OrderPage items={products}  /> } /> 
          <Route path="/StaffPage" element={<StaffPage />} /> 
          <Route path="/CreateVitamin" element={<CreateVitamin />} /> 
          <Route path="/VitaminPage" element={<VitaminPage setVitamin={setupdateVitamins}/>} /> 
          <Route path="/UpdateVitamin" element={<UpdateVitamin updateVitamins={vitamins}/>} /> 
          </Routes>
          </section>
        </main>
      </header>
      <footer>
      <p>&copy; 2023 Meagan Welch</p>
      </footer>
      </BrowserRouter>
      </>
  );
}

export default App;
