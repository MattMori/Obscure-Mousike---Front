import "./index.scss";

const Noticia = () => {
  return (
    <div className="Noticia">
        <h1> titulo da Noticia</h1>
      <div className="Noticia-superior">
        <div className="Noticia-imagem">Imagem da noticia</div>
        <div className="Noticia-resumo">resumo da noticia</div>        
      </div>
      <div className="Noticia-conteudo">conteudo da noticia</div>
      <div className="Noticia-comentarios">comentarios da noticia</div>
    </div>

  );
};

export default Noticia;
