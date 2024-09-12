import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import logo from '../Img/Logo_laranja.png'
import '../CSS/Rod.css';  // Certifique-se de criar este arquivo CSS

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="text-center justify-content-center">
          <Col md={4} className="footer-text">
            <p>© 2024 Todos os direitos reservados.</p>
          </Col>
          <Col md={4}>
            <Image src={logo} width={120}/>
          </Col>
            <Col md={4} className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;