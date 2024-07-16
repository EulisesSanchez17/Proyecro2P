import React, { useState } from 'react';

const Formulario = () => {
  const [formData, setFormData] = useState({
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
    'expectativas': ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Limpiar el error al modificar el campo
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
      // Aquí puedes agregar la lógica para enviar el formulario, como enviar los datos a un backend
      console.log(formData);
      // También puedes resetear el formulario después del envío si es necesario
      setFormData({
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
        'expectativas': ''
      });
    } else {
      setErrors(validationErrors);
    }
  };

  // Función para validar el formulario
  const validate = (formData) => {
    let errors = {};

    if (!formData['nombre-completo']) {
      errors['nombre-completo'] = 'El nombre completo es requerido';
    }

    if (!formData['edad']) {
      errors['edad'] = 'La edad es requerida';
    } else if (isNaN(formData['edad'])) {
      errors['edad'] = 'La edad debe ser un número';
    } else if (parseInt(formData['edad']) <= 0) {
      errors['edad'] = 'La edad debe ser mayor que cero';
    }

    if (!formData['email']) {
      errors['email'] = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData['email'])) {
      errors['email'] = 'El email es inválido';
    }

    if (!formData['telefono']) {
      errors['telefono'] = 'El teléfono es requerido';
    } else if (isNaN(formData['telefono'])) {
      errors['telefono'] = 'El teléfono debe ser un número';
    }

    if (!formData['universidad']) {
      errors['universidad'] = 'La universidad es requerida';
    }

    if (!formData['carrera']) {
      errors['carrera'] = 'La carrera es requerida';
    }

    if (!formData['semestre']) {
      errors['semestre'] = 'El semestre es requerido';
    }

    if (!formData['motivos']) {
      errors['motivos'] = 'Los motivos son requeridos';
    }

    if (!formData['referencia1-nombre']) {
      errors['referencia1-nombre'] = 'El nombre de la primera referencia es requerido';
    }

    if (!formData['referencia1-contacto']) {
      errors['referencia1-contacto'] = 'El contacto de la primera referencia es requerido';
    }

    if (!formData['referencia2-nombre']) {
      errors['referencia2-nombre'] = 'El nombre de la segunda referencia es requerido';
    }

    if (!formData['referencia2-contacto']) {
      errors['referencia2-contacto'] = 'El contacto de la segunda referencia es requerido';
    }

    if (!formData['experiencia-previa']) {
      errors['experiencia-previa'] = 'La experiencia previa es requerida';
    }

    if (!formData['expectativas']) {
      errors['expectativas'] = 'Las expectativas son requeridas';
    }

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
              minHeight: '100px',
              marginTop: '5px'
            }} />
            {errors['motivos'] && <span style={{ color: 'red' }}>{errors['motivos']}</span>}
          </div>

          <div className="form-group" style={{ flex: '1 1 50%', marginBottom: '15px', padding: '0 10px' }}>
            <label htmlFor="referencia1-nombre" style={{ fontWeight: 'bold', display: 'block' }}>Nombre de la primera referencia:</label>
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
            <label htmlFor="referencia1-contacto" style={{ fontWeight: 'bold', display: 'block' }}>Contacto de la primera referencia:</label>
            <input type="text" id="referencia1-contacto" name="referencia1-contacto" value={formData['referencia1-contacto']} onChange={handleChange} required style={{
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
            <label htmlFor="referencia2-nombre" style={{ fontWeight: 'bold', display: 'block' }}>Nombre de la segunda referencia:</label>
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
            <label htmlFor="referencia2-contacto" style={{ fontWeight: 'bold', display: 'block' }}>Contacto de la segunda referencia:</label>
            <input type="text" id="referencia2-contacto" name="referencia2-contacto" value={formData['referencia2-contacto']} onChange={handleChange} required style={{
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
            <label htmlFor="experiencia-previa" style={{ fontWeight: 'bold', display: 'block' }}>Experiencia previa (si aplica):</label>
            <textarea id="experiencia-previa" name="experiencia-previa" value={formData['experiencia-previa']} onChange={handleChange} style={{
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#777777',
              color: '#ffffff',
              minHeight: '100px',
              marginTop: '5px'
            }} />
            {errors['experiencia-previa'] && <span style={{ color: 'red' }}>{errors['experiencia-previa']}</span>}
          </div>

          <div className="form-group" style={{ flex: '1 1 100%', marginBottom: '15px', padding: '0 10px' }}>
            <label htmlFor="expectativas" style={{ fontWeight: 'bold', display: 'block' }}>Expectativas al obtener la beca:</label>
            <textarea id="expectativas" name="expectativas" value={formData['expectativas']} onChange={handleChange} required style={{
              width: '100%',
              padding: '8px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#777777',
              color: '#ffffff',
              minHeight: '100px',
              marginTop: '5px'
            }} />
            {errors['expectativas'] && <span style={{ color: 'red' }}>{errors['expectativas']}</span>}
          </div>

          <div className="form-group" style={{ flex: '1 1 100%', textAlign: 'center' }}>
            <button type="submit" style={{
              backgroundColor: '#b7bfc2',
              border: 'none',
              color: '#000000',
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              borderRadius: '4px',
              transition: 'background 0.3s ease'
            }}>Enviar Solicitud</button>
          </div>
        </div>
      </form>

      <footer style={{
        width: '100%',
        backgroundColor: '#313132',
        color: 'white',
        textAlign: 'center',
        padding: '10px 0',
        position: 'fixed',
        bottom: '0',
        left: '0'
      }}>
        <p style={{ margin: '0' }}>Universidad Laica Eloy Alfaro de Manabí</p>
      </footer>
    </div>
  );
}

export default Formulario;
