import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TogglePage from './pages/TogglePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/toggle" element={<TogglePage />} />
      </Routes>
    </Router>
  );
}

export default App;