import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Bienvenida from '../Interfa2/Bienvenida';
import Postular from '../Interfaz3/Postular';
import Consultabeca from '../Interfaz4/Consultabeca'; // Importa el componente Consultabeca
import Formulario from '../Interfaz5/Formulario'; // Importa el componente Formulario
import Admin from '../InterfazAdmin/admin'; // Importa el componente Admin
import GestionAdmin from '../InterfazAdmin/GestionAdmin'; // Importa el componente GestionAdmin

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL}/LogoUleam.png)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  formContainer: {
    backgroundColor: 'transparent',
    padding: '20px',
    borderRadius: '0px',
    border: '3px solid black',
    boxShadow: '0 0 10px rgb(1, 1, 1)',
    maxWidth: '400px',
    width: '100%',
    color: 'black',
    marginTop: '20px'
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: 'black'
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  },
  select: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#241ba4',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    fontSize: '16px',
    marginTop: '20px',
    cursor: 'pointer'
  },
  message: {
    marginTop: '10px',
    textAlign: 'center',
    color: 'red'
  }
};

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [message, setMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      if (userRole === 'admin') {
        navigate('/admin');
      } else {
        navigate('/bienvenida');
      }
    }
  }, [isAuthenticated, userRole, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const credentials = [
      { userType: 'student', email: 'e1312961434@uleam.live.edu.ec', password: 'mary2000xD' },
      { userType: 'admin', email: 'administrador@gmail.com', password: 'mary2000xd' }
    ];

    const storedCredentials = credentials.find(cred => cred.userType === userType);
    if (!storedCredentials) {
      setMessage('Por favor, seleccione un tipo de usuario.');
      return;
    }

    if (email === storedCredentials.email && password === storedCredentials.password) {
      setIsAuthenticated(true);
      setUserRole(userType);
    } else {
      setMessage('Credenciales incorrectas. Por favor, intente de nuevo.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Becas Uleam</h2>
        <h1 style={styles.title}>Acceda con su correo institucional</h1>
        <form id="loginForm" onSubmit={handleSubmit}>
          <label htmlFor="email" style={{ ...styles.title }}>Usuario:</label>
          <input type="email" id="email" name="email" placeholder="usuario@uleam.edu.ec" required value={email} onChange={e => setEmail(e.target.value)} style={styles.input} />

          <label htmlFor="password" style={{ ...styles.title }}>Contraseña:</label>
          <input type="password" id="password" name="password" minLength="8" required value={password} onChange={e => setPassword(e.target.value)} style={styles.input} />

          <label htmlFor="userType" style={{ ...styles.title }}>Tipo de usuario:</label>
          <select id="userType" name="userType" required value={userType} onChange={e => setUserType(e.target.value)} style={styles.select}>
            <option value="">Seleccione una opción</option>
            <option value="student">Estudiante</option>
            <option value="admin">Administrador</option>
          </select>

          <button type="submit" style={styles.button}>Ingresar</button>
        </form>
        <div id="message" style={styles.message}>{message}</div>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/bienvenida" element={<Bienvenida />} />
        <Route path="/postular" element={<Postular />} />
        <Route path="/consultabeca" element={<Consultabeca />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/gestionadmin" element={<GestionAdmin />} /> {/* Nueva ruta hacia GestionAdmin */}
      </Routes>
    </Router>
  );
}

export default AppWrapper;
