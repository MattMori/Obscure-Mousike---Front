import "./index.scss";

const banda = () => {
  return (
    <div className="banda">
        <h1> titulo da banda</h1>
      <div className="banda-superior">
        <div className="banda-imagem">Imagem da banda</div>
        <div className="banda-resumo">resumo da banda</div>        
      </div>
      <div className="banda-conteudo">conteudo da banda</div>
      <div className="banda-comentarios">comentarios da banda</div>
    </div>

  );
};

export default banda;
