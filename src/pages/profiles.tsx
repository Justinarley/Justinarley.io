import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Justin from '../assets/Justin.jpg'
import '../css/profiles.css'

function Profiles() {
  return (
    <div className="profile-container">
      <div className="profile-content">
      <img src={Justin} alt="Perfil" className="img-fluid rounded-circle mb-3" />
        <h1 className="profile-title">Justin Altamirano</h1>
        <h2 className="profile-title2">"Desarrollador de Software"</h2>
        <p className="profile-text">
          Soy un apasionado desarrollador de software. Me encanta crear soluciones prácticas y efectivas que mejoran la vida de las personas y optimizan los negocios. Siempre estoy en busca de nuevos desafíos y oportunidades para aprender y crecer.
        </p>
        <p className="profile-text"><FaEnvelope /> <strong>Email:</strong> jusarley2003@gmail.com</p>
        <Link to="/justin">
          <Button variant="primary">Más información</Button>
        </Link>
        <p></p>
      </div>
    </div>
  );
}

export default Profiles;
