// Home
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Image, Container, Row, Col } from "react-bootstrap";
import '../CSS/Home.css';
import video from '../Img/video1.mp4';
import video2 from '../Img/video2.mp4';
import video3 from '../Img/video3.mp4'
import foto2 from '../Img/celular.png';
import foto3 from '../Img/ia.png';
import foto4 from '../Img/batida.png';
import foto5 from '../Img/mecanico.png';
import arcamera from '../Img/ar_camera.png';
import aroficina from '../Img/ar_oficina.png';
import arplanos from '../Img/ar_planos.png';
import arprivacidade from '../Img/ar_privacidade.png';
import arsuporte from '../Img/ar_suporte.png';

function Home() {
  const carouselItems = [
    {
      videoSrc: video2,
      title: "Batida de Carro",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      videoSrc: video,
      title: "Inteligencia Artificial",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      videoSrc: video3,
      title: "Concessonarias",
      description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
    }
  ];



  return (
    <>
      {/* Carrousel (ESTILIZAR) */}
      <div className="carousel-container carousel1">
        <Carousel interval={4000}>
          {carouselItems.map((item, index) => (
            <Carousel.Item key={index}>
              <video
                src={item.videoSrc}
                autoPlay
                loop
                muted
                width="100%"
                height="auto"
              />
              <Carousel.Caption>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Acesso Rapido */}

      <Container className="esp1">
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={2}>
            <Image src={arcamera} width={150} className="mov"/>
            <div className="d-flex justify-content-center">
              <h5>Camera</h5>
            </div>
          </Col>
          <Col xs={12} md={2}>
            <Image src={aroficina} width={150} className="mov" />
            <div className="d-flex justify-content-center">
              <h5>Oficinas</h5>
            </div>
          </Col>
          <Col xs={12} md={2}>
            <Image src={arprivacidade} width={150} className="mov" />
            <div className="d-flex justify-content-center">
              <h5>Privacidade</h5>
            </div>
          </Col>
          <Col xs={12} md={2}>
            <Image src={arplanos} width={150} className="mov" />
            <div className="d-flex justify-content-center">
              <h5>Planos</h5>
            </div>
          </Col>
          <Col xs={12} md={2}>
            <Image src={arsuporte} width={150} className="mov" />
            <div className="d-flex justify-content-center">
              <h5>Suporte</h5>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Sobre Coisas */}

      <div className="carousel-container carousel2 fundo">
        <Container>
          <Row>
            <Carousel>
              <Carousel.Item className="esp1">
                <Row className="fade-in-image">
                  <Col xs={12} md={4} className="d-flex justify-content-center">
                    <Image src={foto4} width={300} />
                  </Col>
                  <Col xs={12} md={8} className="d-flex align-items-center justify-content-center branco">
                    <h2>Nois pika e o resto é buraco Ladrão</h2>
                    <p>A leitura é uma habilidade essencial que abre portas para o conhecimento e o crescimento pessoal. Ela nos permite explorar diferentes mundos, culturas e perspectivas, ampliando nossa compreensão do mundo ao nosso redor.</p>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item className="esp1">
                <Row className="fade-in-image">
                  <Col xs={12} md={8} className="d-flex align-items-center justify-content-center branco">
                    <p>A leitura é uma habilidade essencial que abre portas para o conhecimento e o crescimento pessoal. Ela nos permite explorar diferentes mundos, culturas e perspectivas, ampliando nossa compreensão do mundo ao nosso redor.</p>
                    <h2>Nois pika e o resto é buraco Ladrão</h2>
                  </Col>
                  <Col xs={12} md={4} className="d-flex justify-content-center">
                    <Image src={foto2} width={300} />
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item className="esp1">
                <Row className="fade-in-image">
                  <Col xs={12} md={4} className="d-flex justify-content-center">
                    <Image src={foto3} width={300} />
                  </Col>
                  <Col xs={12} md={8} className="d-flex align-items-center justify-content-center branco">
                    <h2>Nois pika e o resto é buraco Ladrão</h2>
                    <p>A leitura é uma habilidade essencial que abre portas para o conhecimento e o crescimento pessoal. Ela nos permite explorar diferentes mundos, culturas e perspectivas, ampliando nossa compreensão do mundo ao nosso redor.</p>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item className="esp1">
                <Row className="fade-in-image">
                  <Col xs={12} md={8} className="d-flex align-items-center justify-content-center branco">
                    <p>A leitura é uma habilidade essencial que abre portas para o conhecimento e o crescimento pessoal. Ela nos permite explorar diferentes mundos, culturas e perspectivas, ampliando nossa compreensão do mundo ao nosso redor.</p>
                    <h2>Nois pika e o resto é buraco Ladrão</h2>
                  </Col>
                  <Col xs={12} md={4} className="d-flex justify-content-center">
                    <Image src={foto5} width={300} />
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </div>

      {/* Planos */}

      <div>
        
      </div>

    </>
  );
}


export default Home;