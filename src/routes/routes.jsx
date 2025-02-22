import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cadastro from '../pages/Cadastro';
import Cardapio from '../pages/Cardapio';
import Comanda from '../pages/Comanda';
import PIX from '../pages/PIX';
//import App from '../App';
import Home from '../pages/Home';
import Navegacao from '../components/Navegacao';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<><Navegacao /><Home /></>} /> {/* Navegacao dentro da rota */}
        <Route path="/cadastro" element={<><Navegacao /><Cadastro /></>} /> {/* Navegacao dentro da rota */}
        <Route path="/cardapio" element={<><Navegacao /><Cardapio /></>} /> {/* Navegacao dentro da rota */}
        <Route path="/comanda" element={<><Navegacao /><Comanda /></>} /> {/* Navegacao dentro da rota */}
        <Route path="/pix" element={<><Navegacao /><PIX /></>} /> {/* Navegacao dentro da rota */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;