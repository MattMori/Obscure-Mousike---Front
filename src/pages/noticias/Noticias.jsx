import { DataMusicApi } from "../../api/dataMusicAPi";
import "./index.scss";
import { useState, useEffect } from "react";
import NoticeCard from "../../components/noticeCard/NoticeCard";

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);

  const fetchData = async () => {
    try {
      const respostaNoticias = await DataMusicApi.getNotices();
      setNoticias(respostaNoticias);
      console.log('Resposta de getNotices:', respostaNoticias);
    } catch (erro) {
      console.error('Erro ao buscar notícias:', erro);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Noticias">
      <h1> Noticias</h1>
      <div className="Noticias-quadrados">
        {noticias.map((noticia) => (
          <NoticeCard key={noticia._id} noticia={noticia} />
        ))}
      </div>
    </div>
  );
};

export default Noticias;
