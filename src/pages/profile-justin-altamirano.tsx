import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaIdCard, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import Justin from '../assets/Justin.jpg';
import '../css/profiles-justin.css';

function ProfileJustin() {
  return (
    <Container className="profile-container1 my-5">
      <Row>
        <Col md={4} className="profile-sidebar">
        <div className="profile-image-container">
          <img src={Justin} alt="Perfil" className="img-fluid rounded-circle mb-3" />
        </div>
        <hr />
          <h3>Contacto</h3>
          <p><FaPhone /> <strong>Teléfono: </strong>0961482200</p>
          <p><FaEnvelope /> <strong>Email:</strong> jusarley2003@gmail.com</p>
          <p><FaIdCard /> <strong>Identificación:</strong> 1725344665</p>
          <p><FaMapMarkerAlt /> <strong>Dirección: </strong>N 56b, Quito 170512</p>
          <hr />
          <h3>Referencia:</h3>
          <p><FaUser /> Cristhian Pinto</p>
          <p><strong>Empresa:</strong> TOC Systems</p>
          <p><strong>Teléfono: </strong>099999999</p>
        </Col>
        <Col md={8}>
          <h1>Justin Altamirano</h1>
          <p>Nací el 28 de diciembre del 2003 en Quito, Ecuador.</p>
          <h2>FORMACIÓN ACADÉMICA</h2>
          <hr />
          <h5>SUPERIOR</h5>
          <p><strong>Instituto Superior Tecnológico de Turismo y Patrimonio "Yavirac"</strong></p>
          <p>Carrera de Desarrollo de Software</p>
          <p>4to Semestre</p>
          <h5>BACHILLERATO</h5>
          <p><strong>Unidad Educativa Liceo Policial</strong></p>
          <p>Especialidad en Ciencias</p>
          <p>Graduado 2021</p>
          <h2>Experiencia Laboral</h2>
          <hr />
          <h5>Posición</h5>
          <p><strong>TOC Systems</strong> | 2023-2024</p>
          <p>Pasante en Desarrollo de Software.</p>
          <h2>Idiomas</h2>
          <hr />
          <p>Inglés Nivel A2.2</p>
        </Col>
      </Row>
      <Row className="my-5">
        <Col className="text-center">
          <p>&copy; 2024 Justin. Todos los derechos reservados.</p>
        </Col>
      </Row>
    </Container>
  );
}
export default ProfileJustin;
