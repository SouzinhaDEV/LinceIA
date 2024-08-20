// Home
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Image, Container, Row, Col } from "react-bootstrap";
import '../CSS/Home.css';
import video from '../Img/video1.mp4';
import foto2 from '../Img/celular.png';
import foto3 from '../Img/ia.png';
import foto4 from '../Img/batida.png'

function Home() {

  return (
    <>
      {/* Carrousel (ESTILIZAR) */}
      <div className="carousel-container carousel1">
        <Carousel interval={3000}>
          <Carousel.Item>
            <video
              src={video}  // Caminho para o vídeo na pasta 'public'
              autoPlay
              loop
              muted
              width="100%"  // Ajuste o tamanho do vídeo conforme necessário
              height="auto"
            />
            <Carousel.Caption>
              <h2>First slide label</h2>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <video
              src={video}  // Caminho para o vídeo na pasta 'public'
              autoPlay
              loop
              muted
              width="100%"  // Ajuste o tamanho do vídeo conforme necessário
              height="auto"
            />
            <Carousel.Caption>
              <h2>Second slide label</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <video
              src={video}  // Caminho para o vídeo na pasta 'public'
              autoPlay
              loop
              muted
              width="100%"  // Ajuste o tamanho do vídeo conforme necessário
              height="auto"
            />
            <Carousel.Caption>
              <h2>Third slide label</h2>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Acesso Rápido */}

      <div className="carousel-container carousel2">
        <Container>
          <Row>
            <Carousel>
              <Carousel.Item className="esp1">
                <Row>
                  <Col xs={12} md={4} className="d-flex justify-content-center">
                    <Image src={foto4} width={300} />
                  </Col>
                  <Col xs={12} md={8} className="d-flex align-items-center justify-content-center">
                    <h2>Nois pika e o resto é buraco Ladrão</h2>
                    <p>A leitura é uma habilidade essencial que abre portas para o conhecimento e o crescimento pessoal. Ela nos permite explorar diferentes mundos, culturas e perspectivas, ampliando nossa compreensão do mundo ao nosso redor.</p>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item className="esp1">
                <Row>
                  <Col xs={12} md={8} className="d-flex align-items-center justify-content-center">
                    <p>A leitura é uma habilidade essencial que abre portas para o conhecimento e o crescimento pessoal. Ela nos permite explorar diferentes mundos, culturas e perspectivas, ampliando nossa compreensão do mundo ao nosso redor.</p>
                    <h2>Nois pika e o resto é buraco Ladrão</h2>
                  </Col>
                  <Col xs={12} md={4} className="d-flex justify-content-center">
                    <Image className="fts" src={foto2} width={300} />
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item className="esp1">
                <Row>
                  <Col xs={12} md={4} className="d-flex justify-content-center">
                    <Image className="fts" src={foto3} width={300} />
                  </Col>
                  <Col xs={12} md={8} className="d-flex align-items-center justify-content-center">
                    <h2>Nois pika e o resto é buraco Ladrão</h2>
                    <p>A leitura é uma habilidade essencial que abre portas para o conhecimento e o crescimento pessoal. Ela nos permite explorar diferentes mundos, culturas e perspectivas, ampliando nossa compreensão do mundo ao nosso redor.</p>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </div>
    </>
  );
}


export default Home;