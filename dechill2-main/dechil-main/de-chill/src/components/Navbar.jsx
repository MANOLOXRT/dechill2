import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Mi Sitio</div>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Inicio</Link></li>
        <li><Link to="/productos" style={styles.link}>Productos</Link></li>
        <li><Link to="/contacto" style={styles.link}>Contacto</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: '#282c34',
    color: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '20px',
    margin: 0
  },
  link: {
    color: '#61dafb',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
};

export default Navbar; 
