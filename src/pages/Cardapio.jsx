import React from 'react';
import ProductList from '../components/ProductList';
import '../styles/Cardapio.css';

const Cardapio = () => {
  return (
    <div className='cardapio' >
      <h1>Cardápio</h1>
      <ProductList />
    </div>
  );
};

export default Cardapio;