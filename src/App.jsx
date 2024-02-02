import './index.scss'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Noticias from './pages/noticias/Noticias.jsx';
import Bandas from './pages/bandas/Bandas.jsx';
import Playlists from './pages/playlists/Playlists.jsx';
import Noticia  from './pages/noticia/Noticia.jsx';
import Banda from './pages/banda/Banda.jsx';
import CriarNoticia from './pages/Noticias/criar.jsx';
import CriarBanda from './pages/bandas/criar.jsx';

function App() {

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bandas" element={<Bandas />} />
        <Route path="/Playlists" element={<Playlists />} />
        <Route path="/noticias/:id" element={<Noticia />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/bandas/:id" element={<Banda />} />
        <Route path="/bandas" element={<Bandas />} />
        <Route path='/noticias/criar' element={<CriarNoticia />} />
        <Route path='/bandas/criar' element={<CriarBanda />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
