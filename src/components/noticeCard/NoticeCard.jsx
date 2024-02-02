import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const NoticeCard = ({ noticia }) => {
  const { _id, img, titulo, texto } = noticia;

  return (
    <div className="NoticeCard">
      <Link to={`/noticias/${_id}`}>
        <img src={img} alt={titulo} />
        <h3>{titulo}</h3>
      </Link>
    </div>
  );
};
export default NoticeCard;
