import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DataMusicApi } from '../../api/dataMusicAPi';
import './index.scss';

function Banda() {
  const { id } = useParams();
  const [banda, setBanda] = useState(null);

  useEffect(() => {
    async function fetchBanda() {
      try {
        const bandaData = await DataMusicApi.getBandById(id);
        setBanda(bandaData);
      } catch (error) {
        console.error('Erro ao carregar dados da banda:', error);
      }
    }

    fetchBanda();
  }, [id]);

  if (!banda) {
    return <p>Carregando...</p>;
  }

  function TextWithLineBreaks({ text }) {
    const paragraphs = text.split('.').map((paragraph, index) => (
      <p key={index}> {paragraph.trim()}</p>
    ));

    return <div>{paragraphs}</div>;
  }

  return (
    <div className='banda'>
      <h1>{banda.nome}</h1>
      <div className='banda-superior'>
        <img className='banda-imagem' src={banda.img} alt={banda.nome} />
        <p className='banda-resumo'>
          {banda.resumo}<br />
          
          <ul>Links:
            <Link target="_blank" to={banda.instagram}>Instagram</Link> <br />
            <Link target="_blank" to={banda.facebook}>Facebook</Link> <br />
            <Link target="_blank" to={banda.wikipedia}>Wikipedia</Link> <br />
            <Link target="_blank" to={banda.spotify}>Spotify</Link> <br />
          </ul>
        </p>
      </div>

      <div className='banda-inferior'>
      <div className='banda-conteudo'>
        <h2>Biografia</h2>
        <TextWithLineBreaks text={banda.texto} />
      </div>

      <div className='banda-integrates'>
        <h2>Integrantes</h2>
        <TextWithLineBreaks text={banda.integrantes} />
      </div>
      <div className="Playlists-quadrado">
        <iframe
          style={{ borderRadius: "30px" }}
          src={banda.urlPlaylist}
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
    </div>
  );
}

export default Banda;
