import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationButton from './NavigationButton';
import calendarioIcon from '../images/icons/calendario.png';
import favoritosIcon from '../images/icons/favorito.png';
import cardapioIcon from '../images/icons/cardapio.png';
import carteiraIcon from '../images/icons/carteira.png';
import pedidosIcon from '../images/icons/pedidos.png';
import contatoIcon from '../images/icons/contato.png';
import '../styles/NavigationBar.css';

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <div className="navigation-bar">
      <NavigationButton icon={calendarioIcon} label="Calendário" onClick={() => navigate('/home')} />
      <NavigationButton icon={favoritosIcon} label="Favoritos" onClick={() => navigate('/favoritos')} />
      <NavigationButton icon={cardapioIcon} label="Cardápio" onClick={() => navigate('/cardapio')} />
      <NavigationButton icon={carteiraIcon} label="Carteira" onClick={() => navigate('/pix')} />
      <NavigationButton icon={pedidosIcon} label="Pedidos" onClick={() => navigate('/comanda')} />
      <NavigationButton icon={contatoIcon} label="Contato" onClick={() => navigate('/contato')} />
    </div>
  );
};

export default NavigationBar;