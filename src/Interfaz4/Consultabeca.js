import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Consultabeca = () => {
  const navigate = useNavigate();
  const [solicitud, setSolicitud] = useState(null);
  const [enviado, setEnviado] = useState(false);
  const [archivoCargado, setArchivoCargado] = useState(null);
  const [nombreArchivo, setNombreArchivo] = useState('');

  useEffect(() => {
    const storedSolicitud = JSON.parse(localStorage.getItem('solicitudBeca'));
    const storedArchivo = localStorage.getItem('archivoCargado');
    const storedEnviado = JSON.parse(localStorage.getItem('enviado'));

    if (storedSolicitud) {
      setSolicitud(storedSolicitud);
    }
    if (storedArchivo) {
      setArchivoCargado(storedArchivo);
      setNombreArchivo('Nombre del archivo cargado');
    }
    if (storedEnviado) {
      setEnviado(storedEnviado);
    }

    const handleStorageChange = () => {
      const updatedSolicitud = JSON.parse(localStorage.getItem('solicitudBeca'));
      setSolicitud(updatedSolicitud);
      const updatedArchivo = localStorage.getItem('archivoCargado');
      setArchivoCargado(updatedArchivo);
      setNombreArchivo('Nombre del archivo cargado');
      const updatedEnviado = JSON.parse(localStorage.getItem('enviado'));
      setEnviado(updatedEnviado);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleEliminarSolicitud = () => {
    // Eliminar en localStorage de Consultabeca.js
    localStorage.removeItem('solicitudBeca');
    localStorage.removeItem('archivoCargado');
    localStorage.removeItem('enviado');
    setSolicitud(null);
    setArchivoCargado(null);
    setEnviado(false);
    setNombreArchivo('');
    alert('Solicitud de beca eliminada correctamente.');
  
    // Eliminar en localStorage de GestionAdmin.js si existe
    const gestionAdminData = JSON.parse(localStorage.getItem('gestionAdminData')) || [];
    const updatedData = gestionAdminData.filter(item => item.id !== solicitud.id);
    localStorage.setItem('gestionAdminData', JSON.stringify(updatedData));
  };
  
  const handleEnviarSolicitud = () => {
    if (solicitud && archivoCargado) {
      // Verificar si ya fue enviado
      if (enviado) {
        // Mostrar mensaje con letras rojas
        const alertElement = document.createElement('p');
        alertElement.textContent = 'La solicitud ya fue enviada anteriormente.';
        alertElement.style.color = 'red';
        alertElement.style.textAlign = 'center';
        document.body.appendChild(alertElement);
        setTimeout(() => {
          alertElement.remove();
        }, 3000); // Eliminar el mensaje después de 3 segundos
      } else {
        const gestionAdminData = JSON.parse(localStorage.getItem('gestionAdminData')) || [];
        const solicitudConArchivo = { ...solicitud, archivo: archivoCargado };
        gestionAdminData.push(solicitudConArchivo);
        localStorage.setItem('gestionAdminData', JSON.stringify(gestionAdminData));
        setEnviado(true);
        localStorage.setItem('enviado', true);
        alert('Solicitud enviada correctamente a Gestión Admin.');
      }
    } else {
      alert('Debe cargar un archivo antes de enviar la solicitud.');
    }
  };
  
  

  const handleFileUpload = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setNombreArchivo(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        if (localStorage.getItem('archivoCargado')) {
          localStorage.removeItem('archivoCargado');
        }
        setArchivoCargado(base64String);
        localStorage.setItem('archivoCargado', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileDownload = () => {
    const pdfUrl = `${process.env.PUBLIC_URL}/archivos/requisitos.pdf`;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'requisitos.pdf';
    link.click();
  };

  const handleEliminarArchivo = () => {
    setArchivoCargado(null);
    setNombreArchivo('');
    localStorage.removeItem('archivoCargado');
  };

  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: '#f2f2f2',
      backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpg)`,
      backgroundSize: 'cover',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
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
      zIndex: 1000,
    },
    headerLeft: {
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
      textDecoration: 'none',
    },
    main: {
      width: '100%',
      maxWidth: '1000px',
      margin: '80px auto 40px auto',
      padding: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    section: {
      marginBottom: '20px',
    },
    title: {
      color: '#333',
      marginBottom: '10px',
      textAlign: 'center',
    },
    consultaTable: {
      marginBottom: '20px',
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
    select: {
      padding: '5px',
      borderRadius: '5px',
    },
    downloadButton: {
      backgroundColor: '#3498db',
      color: 'white',
      padding: '5px 10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    eliminarButton: {
      backgroundColor: '#e74c3c',
      color: 'white',
      padding: '5px 10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    uploadLabel: {
      backgroundColor: '#2ecc71',
      color: 'white',
      padding: '5px 10px',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      display: 'inline-block',
      marginBottom: '0',
      fontWeight: 'normal',
      lineHeight: '1.42857143',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      touchAction: 'manipulation',
      cursor: 'pointer',
      userSelect: 'none',
      backgroundImage: 'none',
      border: '1px solid transparent',
    },
    fileInput: {
      position: 'absolute',
      clip: 'rect(0, 0, 0, 0)',
      border: '0',
      width: '1px',
      height: '1px',
      margin: '-1px',
      padding: '0',
      overflow: 'hidden',
      '&:focus + label': {
        borderColor: '#66afe9',
        boxShadow: '0 0 8px rgba(102, 175, 233, 0.6)',
      },
    },
    buttonGroup: {
      display: 'flex',
      gap: '10px',
    },
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <div style={styles.buttonGroup}>
            <Link to="/bienvenida" style={styles.button}>Volver</Link>
            <button style={styles.button} onClick={handleFileDownload}>Descargar Requisitos Beca</button>
          </div>
        </div>
      </header>

      <main style={styles.main}>
        <section style={styles.section}>
          <h2 style={styles.title}>Consulta de Becas</h2>
          <div className="consulta-table" style={styles.consultaTable}>
            <h3 style={styles.title}>Estado de la Solicitud</h3>
            {enviado && <p style={{ color: 'green', textAlign: 'center' }}>Solicitud enviada correctamente a Gestión Admin.</p>}
            {solicitud ? (
              <table id="solicitudes-table" style={styles.table}>
                <thead style={styles.thead}>
                  <tr>
                    <th style={styles.th}>ID Solicitud</th>
                    <th style={styles.th}>Tipo de Beca</th>
                    <th style={styles.th}>Período Académico</th>
                    <th style={styles.th}>Estado</th>
                    <th style={styles.th}>Descargar Documentos</th>
                    <th style={styles.th}>Cargar Documento</th>
                    <th style={styles.th}>Eliminar Documento</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>001</td>
                    <td>{solicitud.tipoBeca}</td>
                    <td>{solicitud.periodoAcademico}</td>
                    <td>{solicitud.estado || 'Pendiente'}</td>
                    <td>
                      {archivoCargado ? (
                        <span>{nombreArchivo}</span>
                      ) : (
                        <span>No hay archivo cargado</span>
                      )}
                    </td>
                    <td>
                      <label htmlFor="file-upload" className="upload-label" style={styles.uploadLabel}>{archivoCargado ? 'Cambiar Archivo' : 'Subir Archivo'}</label>
                      <input type="file" id="file-upload" name="fileUpload" style={styles.fileInput} onChange={handleFileUpload} />
                    </td>
                    <td>
                      {archivoCargado && (
                        <button onClick={handleEliminarArchivo} className="eliminar-button" style={styles.eliminarButton}>Eliminar</button>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <p style={{ textAlign: 'center' }}>No hay ninguna solicitud registrada.</p>
            )}
            {solicitud && (
              <div className="actions" style={{ textAlign: 'center', marginTop: '20px' }}>
                <button onClick={handleEliminarSolicitud} className="eliminar-button" style={styles.eliminarButton}>Eliminar Solicitud de Beca</button>
                <button onClick={handleEnviarSolicitud} className="enviar-button" style={styles.button} disabled={enviado}>Enviar Solicitud a Gestión Admin</button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Consultabeca;
