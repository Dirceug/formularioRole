import React from 'react';
import Login from './components/Login'; // Importa o componente Login
import './styles/App.css';


function App() {
  return (
    <div className="app-container">
      <h1>Bem-vindo!</h1>
      <Login /> {/* Renderiza o componente Login */}
    </div>
  );
}

export default App;