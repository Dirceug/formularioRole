import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { nome, ingredientes, valor, imagem } = product;

  const handleBuy = () => {
    alert('Produto comprado');
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={imagem} alt={nome} />
      </div>
      <div className="product-details">
        <h2 className="product-title">{nome}</h2>
        <p className="product-ingredients">{ingredientes}</p>
        <div className="product-footer">
          <span className="product-price">R$ {valor.toFixed(2)}</span>
          <button className="buy-button" onClick={handleBuy}>Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;