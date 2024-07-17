import React, { useState, useEffect } from 'react';

const Formulario = () => {
  const initialFormData = {
    'nombre-completo': '',
    'edad': '',
    'email': '',
    'telefono': '',
    'universidad': '',
    'carrera': '',
    'semestre': '',
    'motivos': '',
    'referencia1-nombre': '',
    'referencia1-contacto': '',
    'referencia2-nombre': '',
    'referencia2-contacto': '',
    'experiencia-previa': '',
    'expectativas': '',
    'archivo': ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // Retrieve saved form data from local storage
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
      setFormData(savedFormData);
      setEditMode(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when modifying the field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Save form data to local storage
      localStorage.setItem('formData', JSON.stringify(formData));
      setEditMode(true); // Enable edit mode after saving
    } else {
      setErrors(validationErrors);
    }
  };

  const handleEdit = () => {
    setEditMode(false); // Enable edit mode
  };

  // Validation function
  const validate = (formData) => {
    let errors = {};

    // Validation rules (similar to previous implementation)
    // ...

    return errors;
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: '#ffffff',
      color: '#000000',
      backgroundImage: "url('LogoUleam.png')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <header style={{
        width: '100%',
        backgroundColor: '#313132',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}>
        <img src="LogoUleam.png" alt="Logo Uleam" className="logo" style={{ height: '50px' }} />
        <button onClick={() => window.history.back()} style={{
          backgroundColor: '#b7bfc2',
          border: 'none',
          color: '#000000',
          padding: '10px 20px',
          fontSize: '14px',
          cursor: 'pointer',
          borderRadius: '4px',
          transition: 'background 0.3s ease'
        }}>Volver</button>
      </header>

      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Formulario de Solicitud de Beca</h2>

      <form onSubmit={handleSubmit} style={{
        maxWidth: '800px',
        margin: '40px auto',
        padding: '20px',
        backgroundColor: '#555555',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
      }}>
        <div className="form-section" style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div className="form-group" style={{ flex: '1 1 50%', marginBottom: '15px', padding: '0 10px' }}>
            <label htmlFor="nombre-completo" style={{ fontWeight: 'bold', display: 'block' }}>Nombre Completo:</label>
            <input type="text" id="nombre-completo" name="nombre-completo" value={formData['nombre-completo']} onChange={handleChange} required style={{
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#777777',
              color: '#ffffff',
              marginTop: '5px'
            }} />
            {errors['nombre-completo'] && <span style={{ color: 'red' }}>{errors['nombre-completo']}</span>}
          </div>

          <div className="form-group" style={{ flex: '1 1 50%', marginBottom: '15px', padding: '0 10px' }}>
            <label htmlFor="edad" style={{ fontWeight: 'bold', display: 'block' }}>Edad:</label>
            <input type="number" id="edad" name="edad" value={formData['edad']} onChange={handleChange} required style={{
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#777777',
              color: '#ffffff',
              marginTop: '5px'
            }} />
            {errors['edad'] && <span style={{ color: 'red' }}>{errors['edad']}</span>}
          </div>

          <div className="form-group" style={{ flex: '1 1 100%', marginBottom: '15px', padding: '0 10px' }}>
            <label htmlFor="email" style={{ fontWeight: 'bold', display: 'block' }}>Email:</label>
            <input type="email" id="email" name="email" value={formData['email']} onChange={handleChange} required style={{
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#777777',
              color: '#ffffff',
              marginTop: '5px'
            }} />
            {errors['email'] && <span style={{ color: 'red' }}>{errors['email']}</span>}
          </div>

          <div className="form-group" style={{ flex: '1 1 50%', marginBottom: '15px', padding: '0 10px' }}>
            <label htmlFor="telefono" style={{ fontWeight: 'bold', display: 'block' }}>Teléfono:</label>
            <input type="tel" id="telefono" name="telefono" value={formData['telefono']} onChange={handleChange} required style={{
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#777777',
              color: '#ffffff',
              marginTop: '5px'
            }} />
            {errors['telefono'] && <span style={{ color: 'red' }}>{errors['telefono']}</span>}
          </div>

          <div className="form-group" style={{ flex: '1 1 50%', marginBottom: '15px', padding: '0 10px' }}>
            <label htmlFor="universidad" style={{ fontWeight: 'bold', display: 'block' }}>Universidad:</label>
            <input type="text" id="universidad" name="universidad" value={formData['universidad']} onChange={handleChange} required style={{
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#777777',
              color: '#ffffff',
              marginTop: '5px'
            }} />
            {errors['universidad'] && <span style={{ color: 'red' }}>{errors['universidad']}</span>}
          </div>

          <div className="form-group" style={{ flex: '1 1 50%', marginBottom: '15px', padding: '0 10px' }}>
            <label htmlFor="carrera" style={{ fontWeight: 'bold', display: 'block' }}>Carrera:</label>
            <input type="text" id="carrera" name="carrera" value={formData['carrera']} onChange={handleChange} required style={{
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#777777',
              color: '#ffffff',
              marginTop: '5px'
            }} />
            {errors['carrera'] && <span style={{ color: 'red' }}>{errors['carrera']}</span>}
          </div>

          <div className="form-group" style={{ flex: '1 1 50%', marginBottom: '15px', padding: '0 10px' }}>
            <label htmlFor="semestre" style={{ fontWeight: 'bold', display: 'block' }}>Semestre:</label>
            <input type="text" id="semestre" name="semestre" value={formData['semestre']} onChange={handleChange} required style={{
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#777777',
              color: '#ffffff',
              marginTop: '5px'
            }} />
            {errors['semestre'] && <span style={{ color: 'red' }}>{errors['semestre']}</span>}
          </div>

          <div className="form-group" style={{ flex: '1 1 100%', marginBottom: '15px', padding: '0 10px' }}>
            <label htmlFor="motivos" style={{ fontWeight: 'bold', display: 'block' }}>Motivos para solicitar la beca:</label>
            <textarea id="motivos" name="motivos" value={formData['motivos']} onChange={handleChange} required style={{
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#777777',
              color: '#ffffff',
              marginTop: '5px',
              minHeight: '100px'
            }} />
            {errors['motivos'] && <span style={{ color: 'red' }}>{errors['motivos']}</span>}
          </div>

          <div className="form-group" style={{ flex: '1 1 50%', marginBottom: '15px', padding: '0 10px' }}>
            <label htmlFor="referencia1-nombre" style={{ fontWeight: 'bold', display: 'block' }}>Nombre de la Referencia 1:</label>
            <input type="text" id="referencia1-nombre" name="referencia1-nombre" value={formData['referencia1-nombre']} onChange={handleChange} required style={{
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#777777',
              color: '#ffffff',
              marginTop: '5px'
            }} />
            {errors['referencia1-nombre'] && <span style={{ color: 'red' }}>{errors['referencia1-nombre']}</span>}
          </div>

          <div className="form-group" style={{ flex: '1 1 50%', marginBottom: '15px', padding: '0 10px' }}>
            <label htmlFor="referencia1-contacto" style={{ fontWeight: 'bold', display: 'block' }}>Contacto de la Referencia 1:</label>
            <input type="tel" id="referencia1-contacto" name="referencia1-contacto" value={formData['referencia1-contacto']} onChange={handleChange} required style={{
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#777777',
              color: '#ffffff',
              marginTop: '5px'
            }} />
            {errors['referencia1-contacto'] && <span style={{ color: 'red' }}>{errors['referencia1-contacto']}</span>}
          </div>

          <div className="form-group" style={{ flex: '1 1 50%', marginBottom: '15px', padding: '0 10px' }}>
            <label htmlFor="referencia2-nombre" style={{ fontWeight: 'bold', display: 'block' }}>Nombre de la Referencia 2:</label>
            <input type="text" id="referencia2-nombre" name="referencia2-nombre" value={formData['referencia2-nombre']} onChange={handleChange} required style={{
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#777777',
              color: '#ffffff',
              marginTop: '5px'
            }} />
            {errors['referencia2-nombre'] && <span style={{ color: 'red' }}>{errors['referencia2-nombre']}</span>}
          </div>

          <div className="form-group" style={{ flex: '1 1 50%', marginBottom: '15px', padding: '0 10px' }}>
            <label htmlFor="referencia2-contacto" style={{ fontWeight: 'bold', display: 'block' }}>Contacto de la Referencia 2:</label>
            <input type="tel" id="referencia2-contacto" name="referencia2-contacto" value={formData['referencia2-contacto']} onChange={handleChange} required style={{
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#777777',
              color: '#ffffff',
              marginTop: '5px'
            }} />
            {errors['referencia2-contacto'] && <span style={{ color: 'red' }}>{errors['referencia2-contacto']}</span>}
          </div>

          <div className="form-group" style={{ flex: '1 1 100%', marginBottom: '15px', padding: '0 10px' }}>
            <label htmlFor="experiencia-previa" style={{ fontWeight: 'bold', display: 'block' }}>Experiencia previa relacionada:</label>
            <textarea id="experiencia-previa" name="experiencia-previa" value={formData['experiencia-previa']} onChange={handleChange} required style={{
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#777777',
              color: '#ffffff',
              marginTop: '5px',
              minHeight: '100px'
            }} />
            {errors['experiencia-previa'] && <span style={{ color: 'red' }}>{errors['experiencia-previa']}</span>}
          </div>

          <div className="form-group" style={{ flex: '1 1 100%', marginBottom: '15px', padding: '0 10px' }}>
            <label htmlFor="expectativas" style={{ fontWeight: 'bold', display: 'block' }}>Expectativas de la beca:</label>
            <textarea id="expectativas" name="expectativas" value={formData['expectativas']} onChange={handleChange} required style={{
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#777777',
              color: '#ffffff',
              marginTop: '5px',
              minHeight: '100px'
            }} />
            {errors['expectativas'] && <span style={{ color: 'red' }}>{errors['expectativas']}</span>}
          </div>

          <div className="form-group" style={{ flex: '1 1 100%', marginBottom: '15px', padding: '0 10px' }}>
            <label htmlFor="archivo" style={{ fontWeight: 'bold', display: 'block' }}>Subir archivo (PDF):</label>
            <input type="file" id="archivo" name="archivo" onChange={handleChange} style={{
              marginBottom: '10px'
            }} />
            {formData['archivo'] && <p style={{ color: 'green' }}>Archivo seleccionado: {formData['archivo']}</p>}
            {errors['archivo'] && <span style={{ color: 'red' }}>{errors['archivo']}</span>}
          </div>

          <div style={{ flex: '1 1 100%', marginBottom: '15px', padding: '0 10px' }}>
            <button type="submit" style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '14px 20px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              marginTop: '10px'
            }}>{editMode ? 'Guardar Cambios' : 'Guardar'}</button>
            {editMode && (
              <button type="button" onClick={handleEdit} style={{
                backgroundColor: '#f44336',
                color: 'white',
                padding: '14px 20px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                marginTop: '10px',
                marginLeft: '10px'
              }}>Editar</button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Formulario;

