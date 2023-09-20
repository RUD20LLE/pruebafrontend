import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/auth/login/', { // Quita la barra al final
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (data) {
        console.log('Inicio de sesión exitoso', data);
        navigate('/toggle'); // Redirige a la página de toggle después de un inicio de sesión exitoso
      } else {
        console.log('Error en el inicio de sesión');
      }
    } catch (error) {
      console.error('Error en el inicio de sesión', error);
    }
  };
  
  return (
    <div>
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de usuario:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default LoginPage;

