import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TogglePage from './pages/TogglePage';
import WelcomePage from './pages/WelcomePage'; // Importa la nueva página de bienvenida

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} /> {/* Ruta para la página de bienvenida */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/toggle" element={<TogglePage />} />
      </Routes>
    </Router>
  );
}

export default App;
