import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Cadastro from '../pages/Cadastro';
import Cardapio from '../pages/Cardapio';
import Comanda from '../pages/Comanda';
import PIX from '../pages/PIX';
import Home from '../pages/Home';
import Navegacao from '../components/Navegacao';
//import NavigationBar from './components/NavigationBar';
import NavigationBar from '../components/NavigationBar';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<><NavigationBar /><Home /></>} /> {/* Navegacao dentro da rota */}
      <Route path="/cadastro" element={<><NavigationBar /><Cadastro /></>} /> {/* Navegacao dentro da rota */}
      <Route path="/cardapio" element={<><NavigationBar /><Cardapio /></>} /> {/* Navegacao dentro da rota */}
      <Route path="/comanda" element={<><NavigationBar /><Comanda /></>} /> {/* Navegacao dentro da rota */}
      <Route path="/pix" element={<><NavigationBar /><PIX /></>} /> {/* Navegacao dentro da rota */}
      {/* 
          Adicione rotas para os novos botões 
      <Route path="/favoritos" element={<h1>Favoritos</h1>} />
      <Route path="/carteira" element={<h1>Carteira</h1>} />
      <Route path="/pedidos" element={<h1>Pedidos</h1>} />
      <Route path="/contato" element={<h1>Contato</h1>} />
      */}
    </Routes>
  );
};

export default AppRoutes;