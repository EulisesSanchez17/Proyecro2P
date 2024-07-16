import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GestionAdmin = () => {
  const navigate = useNavigate();
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    // Aquí deberías tener alguna lógica para cargar las solicitudes desde algún servicio o almacenamiento
    // Ejemplo estático:
    const solicitudesEjemplo = [
      {
        id: 1,
        nombre: 'Nombre del Estudiante 1',
        correo: 'estudiante1@correo.com',
        tipoBeca: 'Beca de Mérito',
        estado: 'Pendiente',
        archivo: 'ruta/al/archivo_del_estudiante1.pdf',
      },
      {
        id: 2,
        nombre: 'Nombre del Estudiante 2',
        correo: 'estudiante2@correo.com',
        tipoBeca: 'Beca Deportiva',
        estado: 'Pendiente',
        archivo: 'ruta/al/archivo_del_estudiante2.pdf',
      },
    ];
    setSolicitudes(solicitudesEjemplo);
  }, []);

  const handleVolver = () => {
    navigate('/admin');
  };

  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: '#f4f4f4',
      backgroundImage: `url(${process.env.PUBLIC_URL}/LogoUleam.png)`,
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
    buttons: {
      display: 'flex',
      alignItems: 'center',
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
      marginLeft: '10px',
    },
    buttonHover: {
      backgroundColor: '#21a8d5',
    },
    container: {
      maxWidth: '800px',
      margin: '40px auto',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    h2: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333',
    },
    solicitudesList: {
      marginTop: '20px',
    },
    solicitud: {
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '15px',
      marginBottom: '15px',
      backgroundColor: '#f9f9f9',
    },
    solicitudInfo: {
      marginBottom: '10px',
    },
    solicitudH3: {
      marginTop: 0,
      color: '#007bff',
    },
    solicitudP: {
      margin: '5px 0',
    },
    acciones: {
      textAlign: 'right',
    },
    btnAprobar: {
      padding: '8px 16px',
      marginLeft: '10px',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
      backgroundColor: '#28a745',
      color: '#fff',
    },
    btnRechazar: {
      padding: '8px 16px',
      marginLeft: '10px',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
      backgroundColor: '#dc3545',
      color: '#fff',
    },
    btnHover: {
      opacity: 0.9,
    },
    descarga: {
      marginTop: '10px',
    },
    btnDescargar: {
      textDecoration: 'none',
      padding: '8px 16px',
      border: '1px solid #007bff',
      borderRadius: '3px',
      backgroundColor: '#007bff',
      color: '#fff',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <div style={styles.buttons}>
          <button
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
            onClick={handleVolver}
          >
            Volver
          </button>
        </div>
      </header>

      <div style={styles.container}>
        <h2 style={styles.h2}>Gestión de Solicitudes de Becas</h2>
        <div style={styles.solicitudesList}>
          {solicitudes.map((solicitud) => (
            <div key={solicitud.id} style={styles.solicitud}>
              <div style={styles.solicitudInfo}>
                <h3 style={styles.solicitudH3}>{solicitud.nombre}</h3>
                <p style={styles.solicitudP}>Correo Electrónico: {solicitud.correo}</p>
                <p style={styles.solicitudP}>Tipo de Beca: {solicitud.tipoBeca}</p>
                <p style={styles.solicitudP}>Estado: {solicitud.estado}</p>
              </div>
              <div style={styles.acciones}>
                <button
                  style={styles.btnAprobar}
                  onMouseOver={(e) => (e.target.style.opacity = styles.btnHover.opacity)}
                  onMouseOut={(e) => (e.target.style.opacity = 1)}
                >
                  Aprobar
                </button>
                <button
                  style={styles.btnRechazar}
                  onMouseOver={(e) => (e.target.style.opacity = styles.btnHover.opacity)}
                  onMouseOut={(e) => (e.target.style.opacity = 1)}
                >
                  Rechazar
                </button>
              </div>
              <div style={styles.descarga}>
                <a href={solicitud.archivo} style={styles.btnDescargar} download>
                  Descargar Archivo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GestionAdmin;
