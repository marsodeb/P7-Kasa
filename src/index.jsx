import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Header from './components/Header/header';
import './sass/base.scss'
import Footer from './components/Footer/footer';
import Apropos from './pages/A-propos/apropos';
import Error404 from './pages/404/error404';
import Logement from './pages/Logement/logement'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/a-propos" element={<Apropos />} />
        <Route
          exact
          path="/logement/:annonceId"
          element={<Logement />}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

