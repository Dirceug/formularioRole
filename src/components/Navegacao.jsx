import React from 'react';
import { Link } from 'react-router-dom';

const BotaoNavegacao = ({ to, children }) => {
  return (
    <Link to={to}>
      <button>{children}</button>
    </Link>
  );
};

const Navegacao = () => {
  return (
    <nav>
      <BotaoNavegacao to="/home">Home</BotaoNavegacao>
      <BotaoNavegacao to="/cardapio">Cardápio</BotaoNavegacao>
      <BotaoNavegacao to="/pix">PIX</BotaoNavegacao>
    </nav>
  );
};

export default Navegacao;