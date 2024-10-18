import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Intro from './components/intro'; 
import SongList from './components/worship_page';
import ArtistsPage from './components/artists_page';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/worship_songs" element={<SongList />} />
        <Route path="/artists" element={<ArtistsPage />} />
        <Route path="/" element={<Intro />} />
      </Routes>
    </Router>
  );
}

export default App;
