import React from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();

  const handleManageScholarships = () => {
    navigate('/GestionAdmin'); // Redirige a la página gestionS.html
  };

  const handleLogout = () => {
    navigate('/'); // Redirige a la página de inicio de sesión
  };

  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: '#f0f0f0',
      backgroundImage: 'url("LogoUleam.png")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#313132',
      padding: '10px 20px',
      color: 'white',
    },
    headerLeft: {
      display: 'flex',
      alignItems: 'center',
    },
    button: {
      marginLeft: '10px',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#b7bfc2',
      color: 'white',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#21a8d5',
    },
    main: {
      width: '100%',
      maxWidth: '1000px',
      margin: '40px auto',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    hidden: {
      display: 'none',
    },
    h2: {
      color: '#333',
      marginBottom: '20px',
      textAlign: 'center',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '20px',
    },
    thead: {
      backgroundColor: '#3498db',
      color: 'white',
    },
    th: {
      padding: '10px',
      border: '1px solid #ccc',
      textAlign: 'left',
    },
    td: {
      padding: '10px',
      border: '1px solid #ccc',
      textAlign: 'left',
    },
    tbodyTrOdd: {
      backgroundColor: '#f9f9f9',
    },
    welcomeSection: {
      textAlign: 'center',
      margin: '40px 0',
      fontSize: '1.2em',
      color: '#333',
    },
    footer: {
      textAlign: 'left',
      padding: '10px 20px',
      backgroundColor: '#3498db',
      color: 'white',
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
    },
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <button style={styles.button} onClick={handleManageScholarships}>Gestionar Becas</button>
          <button style={styles.button} onClick={handleLogout}>Salir</button>
        </div>
      </header>
      <main style={styles.main}>
        <section id="users-section" style={styles.hidden}>
          <h2 style={styles.h2}>Usuarios Registrados</h2>
          <table style={styles.table}>
            <thead style={styles.thead}>
              <tr>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Nombre</th>
                <th style={styles.th}>Correo Electrónico</th>
                <th style={styles.th}>Tipo de Usuario</th>
                <th style={styles.th}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Aquí se insertarán los usuarios registrados */}
            </tbody>
          </table>
        </section>
        
        <section id="scholarships-section" style={styles.hidden}>
          <h2 style={styles.h2}>Solicitudes de Becas</h2>
          <table style={styles.table}>
            <thead style={styles.thead}>
              <tr>
                <th style={styles.th}>ID Solicitud</th>
                <th style={styles.th}>Nombre del Estudiante</th>
                <th style={styles.th}>Tipo de Beca</th>
                <th style={styles.th}>Período Académico</th>
                <th style={styles.th}>Estado</th>
                <th style={styles.th}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Aquí se insertarán las solicitudes de becas */}
            </tbody>
          </table>
        </section>

        <section id="welcome-section" style={styles.welcomeSection}>
          <p>Bienvenido, Administrador. Aquí puede gestionar usuarios y becas.</p>
        </section>
      </main>
      <footer style={styles.footer}>
        <p>Universidad Laica Eloy Alfaro de Manabí &copy; 2024</p>
      </footer>
    </div>
  );
};

export default Admin;
