import React from 'react';
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div>
      <h1>Bienvenido a nuestra aplicación</h1>
      <Link to="/login" style={{ position: 'absolute', top: '10px', right: '10px' }}>
        CLIC AQUÍ PARA INICIAR SESIÓN
      </Link>
    </div>
  );
}

export default WelcomePage;
