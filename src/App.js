
import logo from './logo.svg';
import './App.css';
import Home from './Home.js'
 import About from './About.js'
 import Contact from './Contact.js'
 import Product from './Product.js'
 import Layout from './Bar.js';
 import React from 'react';
import ReatDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

   
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;