import './index.scss';


const Header = () => {

  return (
    <nav className="Header">
      <h1>OBSCURE MOUSIKE</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/noticias">Noticias</a></li>
        <li><a href="/Bandas">Bandas</a></li>
        <li><a href="/Playlists">Playlists</a></li>
      </ul>
    </nav>
  );
};

export default Header;