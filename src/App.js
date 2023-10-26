import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './Components/Login';
import OpretBruger from './Components/OpretBruger';
import Registrering from './Components/Registrering';
import Udlaansoversigt from './Components/Udlaansoversigt';
import Udlaanssystem from './Components/Udlaanssystem';
import MobileOffcanvasNavbar from './Components/Navbar';
import Computeroversigt from './Components/Computeroversigt';
import Aflevering from './Components/Aflevering';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavbarWrapper />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Opret-Bruger" element={<OpretBruger />} />
        <Route path="/Registrering" element={<Registrering />} />
        <Route path="/Udlaansoversigt" element={<Udlaansoversigt />} />
        <Route path="/Udlaanssystem" element={<Udlaanssystem />} />
        <Route path="/Computeroversigt" element={<Computeroversigt />} />
        <Route path="/Aflevering" element={<Aflevering />} />
        <Route path="/" element={<Aflevering />} />
      </Routes>
    </Router>
  );
}

function NavbarWrapper() {
  const location = useLocation();
  const isLoginScreen = location.pathname === '/Login';

  return (
    <div>
      {!isLoginScreen && <MobileOffcanvasNavbar />}
    </div>
  );
}

export default App;
