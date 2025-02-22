import React from 'react';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; // Importa o componente Login
//import Navegacao from './components/Navegacao'; // Importa o componente de navegação

function App() {
  return (
    <div>
      {/* <Navegacao/> Renderiza o componente de navegação */}
      <h1>Bem-vindo!</h1>
      <Login /> {/* Renderiza o componente Login */}
    </div>
  );
}

export default App;
