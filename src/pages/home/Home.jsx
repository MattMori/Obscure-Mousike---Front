import "./index.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <h1>Noticia Principal</h1>
      </div>
      
      <div className="quadrados-container">
        {/* Primeiro grupo de 4 quadrados */}
        <div className="grupo-quadrados">
          <div className="quadrado">principais noticias</div>
          <div className="quadrado">principais noticias</div>
          <div className="quadrado">principais noticias</div>
          <div className="quadrado">principais noticias</div>
        </div>
        
        {/* Segundo grupo de 4 quadrados */}
        <div className="grupo-quadrados">
          <div className="quadrado">Principais Playlists </div>
          <div className="quadrado">Principais Playlists </div>
          <div className="quadrado">Principais Playlists </div>
          <div className="quadrado">Principais Playlists </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
