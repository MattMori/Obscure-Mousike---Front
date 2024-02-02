import { useParams } from "react-router-dom";
import "./index.scss";
import { useEffect, useState } from "react";
import { DataMusicApi } from "../../api/dataMusicAPi";

const Noticia = () => {
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);

  useEffect(() => {
    async function fetchNoticia() {
      try {
        const noticiaData = await DataMusicApi.getNoticeById(id);
        setNoticia(noticiaData);
      } catch (error) {
        console.error('Erro ao carregar dados da banda:', error);
      }
    }

    fetchNoticia();
  }, [id]);

  if (!noticia) {
    return <p>Carregando...</p>;
  }

  function TextWithLineBreaks({ text }) {
    const paragraphs = text.split('.').map((paragraph, index) => (
      <p key={index}> {paragraph.trim()}</p>
    ));

    return <div>{paragraphs}</div>;
  }

  return (
    <div className="Noticia">
      <div className="Noticia-superior ">
        <h1>{noticia.titulo}</h1>
        <img className='Noticia-imagem' src={noticia.img} alt={noticia.nome} />
        <div className="Noticia-resumo" dangerouslySetInnerHTML={{ __html: noticia.resumo }} />
      </div>
      <div className="Noticia-inferior">
        <div className="publicado-em">{new Date(noticia.createdAt).toLocaleDateString('pt-br')}</div>
        <div className="Noticia-conteudo">
          <TextWithLineBreaks text={noticia.texto} />
        </div>
      </div>
    </div>

  );
};

export default Noticia;
