import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import OpretBruger from './Components/OpretBruger';
import Registrering from './Components/Registrering';
import Udlaansoversigt from './Components/Udlaansoversigt';
import Udlaanssystem from './Components/Udlaanssystem';
import MobileOffcanvasNavbar from './Components/Navbar';
import Aflevering from './Components/Aflevering';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <MobileOffcanvasNavbar />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Opret-Bruger" element={<OpretBruger />} />
        <Route path="/Registrering" element={<Registrering />} />
        <Route path="/Udlaansoversigt" element={<Udlaansoversigt />} />
        <Route path="/Udlaanssystem" element={<Udlaanssystem />} />
        <Route path="/Aflevering" element={<Aflevering />} />
        <Route path="/" element={<Aflevering />} />
      </Routes>
    </Router>
  );
}

export default App;
