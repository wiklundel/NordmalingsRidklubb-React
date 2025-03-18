import Home from './pages/Home';
import OmOss from './pages/OmOss';
import Tavling from './pages/Tavling';
import Kalender from './pages/Kalender';
import Kontakt from './pages/Kontakt';
import VaraHastar from './pages/VaraHastar';
import BorjaRida from './pages/BorjaRida';

import Header from './components/Header';
import Footer from './components/Footer';
import Sidemenu from './components/Sidemenu';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Sidemenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BorjaRida" element={<BorjaRida />} />
          <Route path="/OmOss" element={<OmOss />} />
          <Route path="/Tavling" element={<Tavling />} />
          <Route path="/Kalender" element={<Kalender />} />
          <Route path="/Kontakt" element={<Kontakt />} />
          <Route path="/VaraHastar" element={<VaraHastar />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
