import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GestionAdmin = () => {
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    const storedSolicitudes = JSON.parse(localStorage.getItem('gestionAdminData')) || [];
    setSolicitudes(storedSolicitudes);
  }, []);

  const handleActualizarEstado = (index, estado) => {
    const updatedSolicitudes = [...solicitudes];
    updatedSolicitudes[index].estado = estado;
    setSolicitudes(updatedSolicitudes);
    localStorage.setItem('gestionAdminData', JSON.stringify(updatedSolicitudes));

    const solicitudBeca = JSON.parse(localStorage.getItem('solicitudBeca'));
    if (solicitudBeca) {
      solicitudBeca.estado = estado;
      localStorage.setItem('solicitudBeca', JSON.stringify(solicitudBeca));
    }
  };

  const handleFileDownload = (base64String, fileName) => {
    const linkSource = `data:application/pdf;base64,${base64String}`;
    const downloadLink = document.createElement('a');
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.target = '_blank'; // Abrir en una nueva pestaña
    downloadLink.click();
  };

  const handleEliminarSolicitud = (index) => {
    const updatedSolicitudes = solicitudes.filter((_, i) => i !== index);
    setSolicitudes(updatedSolicitudes);
    localStorage.setItem('gestionAdminData', JSON.stringify(updatedSolicitudes));
  };

  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: 'transparent',
      backgroundImage: `url(${process.env.PUBLIC_URL}/LogoUleam.png)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    header: {
      width: '100%',
      backgroundColor: '#313132',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 20px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      position: 'fixed',
      top: 0,
      zIndex: 1000
    },
    headerLeft: {
      display: 'flex',
      alignItems: 'center'
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
      textDecoration: 'none'
    },
    main: {
      width: '100%',
      maxWidth: '1000px',
      margin: '80px auto 40px auto',
      padding: '20px',
      backgroundColor: 'transparent',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    },
    section: {
      marginBottom: '20px'
    },
    title: {
      color: '#333',
      marginBottom: '10px',
      textAlign: 'center'
    },
    consultaTable: {
      marginBottom: '20px'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '20px'
    },
    thead: {
      backgroundColor: '#3498db',
      color: 'white'
    },
    th: {
      padding: '10px',
      border: '1px solid #ccc',
      textAlign: 'left'
    },
    td: {
      padding: '10px',
      border: '1px solid #ccc',
      textAlign: 'left'
    },
    select: {
      padding: '5px',
      borderRadius: '5px'
    },
    downloadButton: {
      backgroundColor: '#3498db',
      color: 'white',
      padding: '5px 10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    },
    deleteButton: {
      backgroundColor: '#e74c3c',
      color: 'white',
      padding: '5px 10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    }
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <Link to="/bienvenida" style={styles.button}>Volver</Link>
        </div>
      
      </header>

      <main style={styles.main}>
        <section style={styles.section}>
          <h2 style={styles.title}>Gestión Administrativa de Solicitudes</h2>
          <div className="consulta-table" style={styles.consultaTable}>
            <h3 style={styles.title}>Solicitudes Recibidas</h3>
            <table id="solicitudes-table" style={styles.table}>
              <thead style={styles.thead}>
                <tr>
                  <th style={styles.th}>ID Solicitud</th>
                  <th style={styles.th}>Tipo de Beca</th>
                  <th style={styles.th}>Período Académico</th>
                  <th style={styles.th}>Estado</th>
                  <th style={styles.th}>Actualizar Estado</th>
                  <th style={styles.th}>Documento</th>
                  <th style={styles.th}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {solicitudes.map((solicitud, index) => (
                  <tr key={index}>
                    <td style={styles.td}>{index + 1}</td>
                    <td style={styles.td}>{solicitud.tipoBeca}</td>
                    <td style={styles.td}>{solicitud.periodoAcademico}</td>
                    <td style={styles.td}>{solicitud.estado || 'Pendiente'}</td>
                    <td style={styles.td}>
                      <select
                        value={solicitud.estado || 'Pendiente'}
                        onChange={(e) => handleActualizarEstado(index, e.target.value)}
                        style={styles.select}
                      >
                        <option value="Pendiente">Pendiente</option>
                        <option value="En Revisión">En Revisión</option>
                        <option value="En Proceso">En Proceso</option>
                        <option value="Beca Aceptada">Beca Aceptada</option>
                        <option value="Beca Rechazada">Beca Rechazada</option>
                      </select>
                    </td>
                    <td style={styles.td}>
                      {solicitud.archivo ? (
                        <button className="download-button" onClick={() => handleFileDownload(solicitud.archivo, `solicitud_${index + 1}.pdf`)} style={styles.downloadButton}>
                          Descargar
                        </button>
                      ) : (
                        <span>No hay archivo</span>
                      )}
                    </td>
                    <td style={styles.td}>
                      <button className="delete-button" onClick={() => handleEliminarSolicitud(index)} style={styles.deleteButton}>
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GestionAdmin;
