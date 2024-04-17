import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import products from "./data/products.js";

import Nav from "./components/Nav.js";
import OrderPage from "./pages/OrderPage.js";
import HomePage from "./pages/HomePage.js";
import StaffPage from "./pages/StaffPage.js";
import GalleryPage from "./pages/GalleryPage.js";
import VitaminPage from "./pages/VitaminPage.js";
import CreateVitamin from "./pages/CreateVitamin.js";
import FeaturePage from "./pages/Features.js";
import UpdateVitamin from "./pages/UpdateVitamin.js";

function App() {
  const [vitamins, setupdateVitamins] = useState([]);
  return (
    <>
      <BrowserRouter>
        <header className="App">
          <h1 id="top">FULL-STACK MERN</h1>
          <Nav />
          </header>
          <main>
            <section>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/feature-page" element={<FeaturePage />} />
                <Route path="/gallery-page" element={<GalleryPage />} />
                <Route
                  path="/order-page"
                  element={<OrderPage items={products} />}
                />
                <Route path="/staff-page" element={<StaffPage />} />
                <Route path="/create-vitamin" element={<CreateVitamin />} />
                <Route
                  path="/vitamin-page"
                  element={<VitaminPage setVitamin={setupdateVitamins} />}
                />
                <Route
                  path="/updateVitamin"
                  element={<UpdateVitamin updateVitamins={vitamins} />}
                />
              </Routes>
            </section>
          </main>
        <footer>
          <p>&copy; 2023 Meagan Welch</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
