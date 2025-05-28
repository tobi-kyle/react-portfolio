import { Link } from 'react-router-dom';
import '../index.css';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" style={{ maxWidth: '100px', borderRadius: '50px' }}/>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
