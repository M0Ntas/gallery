import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Store from './components/Store/Store';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Gallery from './components/Gallery/Gallery';
import CardPage from './components/CardPage/CardPage';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:id" element={<CardPage />} />
        <Route path="/info" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}
