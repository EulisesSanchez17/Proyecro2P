import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  body: {
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    backgroundColor: '#f0f2f5',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL}/Fondo.png)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  header: {
    width: '100%',
    backgroundColor: '#313132',
    color: 'white',
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '10px 20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  headerLeft: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    backgroundColor: '#b7bfc2',
    border: 'none',
    color: 'rgb(0, 0, 0)',
    padding: '10px 20px',
    fontSize: '14px',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'background 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#21a8d5',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
  },
  h1: {
    fontSize: '24px',
    color: '#333',
  },
  p: {
    fontSize: '18px',
    color: '#666',
  },
};

function Bienvenida() {
  const navigate = useNavigate();

  const handlePostularClick = () => {
    navigate('/postular'); // Navega a la ruta '/postular' al hacer clic en el botón Postular
  };

  const handleConsultaBecasClick = () => {
    navigate('/consultabeca'); // Navega a la ruta '/consultabeca' al hacer clic en el botón Consulta de Becas
  };

  const handleSalirClick = () => {
    navigate('/'); // Navega a la ruta '/' al hacer clic en el botón Salir
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <button style={styles.button} onClick={handlePostularClick}>Postular</button>
          <button style={styles.button} onClick={handleConsultaBecasClick}>Consulta de Becas</button>
          <button style={styles.button} onClick={handleSalirClick}>Salir</button>
        </div>
      </header>

      <main style={styles.main}>
        <h1 style={styles.h1}>Bienvenido a la Plataforma de Solicitud de Becas</h1>
        <p style={styles.p}>Utilice el botón "Postular" para comenzar su solicitud de beca.</p>
      </main>
    </div>
  );
}

export default Bienvenida;
