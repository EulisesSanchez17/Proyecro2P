import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: '#f0f0f0',
    backgroundImage: `url('LogoUleam.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#313132',
    padding: '10px 20px',
    color: 'white',
    width: '100%'
  },
  headerLeft: {
    display: 'flex',
    gap: '10px'
  },
  button: {
    backgroundColor: '#b7bfc2',
    border: 'none',
    color: '#000',
    padding: '10px 20px',
    fontSize: '14px',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'background 0.3s ease'
  },
  buttonHover: {
    backgroundColor: '#21a8d5'
  },
  main: {
    width: '100%',
    maxWidth: '800px',
    margin: '40px auto',
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
    marginBottom: '10px'
  },
  formGroup: {
    marginBottom: '15px'
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#555'
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  },
  submitButton: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  submitButtonHover: {
    backgroundColor: '#2980b9'
  }
};

const Postular = () => {
  const navigate = useNavigate();
  const [solicitud, setSolicitud] = useState({
    tipoBeca: '',
    periodoAcademico: '',
    fechaElaboracion: ''
  });

  const handleVolver = () => {
    navigate('/bienvenida');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Verificar si ya existe una solicitud de beca
    const storedSolicitud = localStorage.getItem('solicitudBeca');
    if (storedSolicitud) {
      alert('Ya existe una solicitud de beca pendiente. Si desea cambiarla, elimine la solicitud actual.');
    } else {
      // Guardar datos en localStorage
      localStorage.setItem('solicitudBeca', JSON.stringify(solicitud));
      alert('Beca enviada correctamente.');
      // Limpiar formulario después del envío
      setSolicitud({
        tipoBeca: '',
        periodoAcademico: '',
        fechaElaboracion: ''
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSolicitud(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <button style={styles.button} onClick={handleVolver}>Volver</button>
        </div>
      </header>

      <main style={styles.main}>
        <section style={styles.section}>
          <h2 style={styles.title}>Formulario de Solicitud de Beca</h2>
          <form id="scholarship-form" onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="tipo_beca" style={styles.label}>Tipo de Beca o Ayuda Económica:</label>
              <select id="tipo_beca" name="tipoBeca" required style={styles.input} onChange={handleChange} value={solicitud.tipoBeca}>
                <option value="">Seleccionar...</option>
                <option value="merito">Beca por Mérito</option>
                <option value="necesidad">Beca por Necesidad Económica</option>
                <option value="deportiva">Beca Deportiva</option>
                <option value="cultural">Beca Cultural</option>
              </select>
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="periodo_academico" style={styles.label}>Período Académico:</label>
              <select id="periodo_academico" name="periodoAcademico" required style={styles.input} onChange={handleChange} value={solicitud.periodoAcademico}>
                <option value="">Seleccionar...</option>
                <option value="2024A">2024 - Primer Semestre</option>
                <option value="2024B">2024 - Segundo Semestre</option>
                <option value="2025A">2025 - Primer Semestre</option>
                <option value="2025B">2025 - Segundo Semestre</option>
              </select>
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="fecha_elaboracion" style={styles.label}>Fecha de Elaboración:</label>
              <input type="date" id="fecha_elaboracion" name="fechaElaboracion" required style={styles.input} onChange={handleChange} value={solicitud.fechaElaboracion} />
            </div>
            <button type="submit" style={styles.submitButton}>Enviar Solicitud</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Postular;
