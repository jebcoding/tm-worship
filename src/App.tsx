import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home'; // Component for the first page
import Intro from './components/intro'; // Component for the second page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Intro />} />
      </Routes>
    </Router>
  );
}

export default App;
