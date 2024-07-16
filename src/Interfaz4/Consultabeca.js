import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
    textDecoration: 'none' // Añadido para evitar subrayado del link
  },
  main: {
    width: '100%',
    maxWidth: '1000px',
    margin: '80px auto 40px auto', // Ajustamos el margen superior para que el contenido no se oculte detrás de la barra de tarea
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
  fileInput: {
    display: 'none'
  },
  uploadButton: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
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
  eliminarButton: {
    backgroundColor: '#e74c3c',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  }
};

const Consultabeca = () => {
  const navigate = useNavigate();
  const [solicitud, setSolicitud] = useState(null);
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    // Cargar solicitud de beca guardada en localStorage al cargar la página
    const storedSolicitud = localStorage.getItem('solicitudBeca');
    if (storedSolicitud) {
      setSolicitud(JSON.parse(storedSolicitud));
    }
  }, []);

  const handleNavigateToForm = () => {
    navigate('/formulario');
  };

  const handleEliminarSolicitud = () => {
    localStorage.removeItem('solicitudBeca');
    setSolicitud(null);
    alert('Solicitud de beca eliminada correctamente.');
  };

  const handleFileUpload = () => {
    alert('Subiendo documento...');
    // Lógica para subir documento
  };

  const handleFileDownload = () => {
    alert('Descargando documento...');
    // Lógica para descargar documento
  };

  const handleEnviarSolicitud = () => {
    // Enviar solicitud a GestionAdmin
    if (solicitud) {
      // Simulación de envío de datos a GestionAdmin
      localStorage.setItem('gestionAdminData', JSON.stringify(solicitud));
      setEnviado(true);
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
          <h2 style={styles.title}>Consulta de Becas</h2>
          <div className="consulta-table" style={styles.consultaTable}>
            <h3 style={styles.title}>Estado de la Solicitud</h3>
            {enviado && <p style={{ color: 'green', textAlign: 'center' }}>Solicitud enviada correctamente a GestionAdmin.</p>}
            {solicitud ? (
              <table id="solicitudes-table" style={styles.table}>
                <thead style={styles.thead}>
                  <tr>
                    <th style={styles.th}>Formulario</th>
                    <th style={styles.th}>ID Solicitud</th>
                    <th style={styles.th}>Tipo de Beca</th>
                    <th style={styles.th}>Período Académico</th>
                    <th style={styles.th}>Estado</th>
                    <th style={styles.th}>Descargar Documentos</th>
                    <th style={styles.th}>Cargar Documento</th>
                    <th style={styles.th}>Eliminar Solicitud</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <button onClick={handleNavigateToForm} className="ingresar-button" style={styles.button}>Ingresar</button>
                    </td>
                    <td>001</td>
                    <td>{solicitud.tipoBeca}</td>
                    <td>{solicitud.periodoAcademico}</td>
                    <td>Pendiente</td>
                    <td>
                      <button className="download-button" onClick={handleFileDownload} style={styles.downloadButton}>Descargar</button>
                    </td>
                    <td>
                      <label htmlFor="file-upload" className="upload-label" style={styles.uploadButton}>Subir</label>
                      <input type="file" id="file-upload" name="fileUpload" style={styles.fileInput} onChange={handleFileUpload} />
                    </td>
                    <td>
                      <button onClick={handleEliminarSolicitud} className="eliminar-button" style={styles.eliminarButton}>Eliminar</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <p>No hay solicitud de beca enviada.</p>
            )}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button onClick={handleEnviarSolicitud} style={styles.button}>Enviar Solicitud a Gestión Admin</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Consultabeca;
