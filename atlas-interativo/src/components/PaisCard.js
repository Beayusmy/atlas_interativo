import React from 'react';

const PaisCard = ({ nome, capital, regiao, populacao, bandeira }) => {
  return (
    <div className="pais-card">
      <img src={bandeira} alt={`Bandeira de ${nome}`} loading="lazy" />
      <h3>{nome}</h3>
      <p><strong>Capital:</strong> {capital || 'N/A'}</p>
      <p><strong>Continente:</strong> {regiao || 'N/A'}</p>
      <p><strong>População:</strong> {populacao ? populacao.toLocaleString() : 'N/A'}</p>
    </div>
  );
};

export default PaisCard;