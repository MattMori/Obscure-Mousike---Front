import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const BandCard = ({ banda }) => {
  const { _id, img, nome} = banda;

  return (
    <div className="BandCard">
      <Link to={`/Bandas/${_id}`}>
        <img src={img} alt={nome} />
        <h3>{nome}</h3>
      </Link>
    </div>
  );
};
export default BandCard;
