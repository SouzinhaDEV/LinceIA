import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Image, Container, Row, Col, Button } from "react-bootstrap";
import '../CSS/Home.css';
import video6 from '../Video/video6.mp4';
import video5 from '../Video/video5.mp4';
import video4 from '../Video/video4.mp4';
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
      videoSrc: video4,
      title: "Inteligencia Artificial",
      description: "Com nossa IA você se sentira conectado com todo o mundo do futuro, com nossa análise em tempo real do seu carro"
    },
    {
      videoSrc: video5,
      title: "Assistência",
      description: "A nossa assistência de encontrar oficinas próximas é reconhecida mundialmente, você não terá mas medo de não encontrar ajuda"
    },
    {
      videoSrc: video6,
      title: "Compromisso",
      description: "Nós temos o compromisso de fazer seu carro ter o melhor desempenho em qualquer categoria"
    }
  ];

  const cardsData = [
    { id: 1, price: '200', title: 'Mensal', description: 'Descrição do Card Mensal' },
    { id: 2, price: '1.200', title: 'Anual', description: 'Descrição do Card Anual' },
    { id: 3, price: '400', title: 'Semestral', description: 'Descrição do Card Semestral' },
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
                className="carousel-video"
              />
              <Carousel.Caption>
                <div className="carousel-center">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Acesso Rápido */}

      <Container className="esp1 shadow-fade-up">
        <Row className="d-flex justify-content-center text-center">
          <Col xs={6} sm={4} md={2}>
            <Image src={arcamera} width="100%" className="mov" />
            <h5>Camera</h5>
          </Col>
          <Col xs={6} sm={4} md={2}>
            <Image src={aroficina} width="100%" className="mov" />
            <h5>Oficinas</h5>
          </Col>
          <Col xs={6} sm={4} md={2}>
            <Image src={arprivacidade} width="100%" className="mov" />
            <h5>Privacidade</h5>
          </Col>
          <Col xs={6} sm={4} md={2}>
            <Image src={arplanos} width="100%" className="mov" />
            <h5>Planos</h5>
          </Col>
          <Col xs={6} sm={4} md={2}>
            <Image src={arsuporte} width="100%" className="mov" />
            <h5>Suporte</h5>
          </Col>
        </Row>
      </Container>

      {/* Sobre Coisas */}
      <div className="shadow fade-up" />

      <div className="fundo carousel-container">
        <Container>
          <Row>
            <Carousel>
              <Carousel.Item className="esp1">
                <Row className="fade-in-image">
                  <Col xs={12} md={4} className="d-flex justify-content-center">
                    <Image src={foto4} width="100%" />
                  </Col>
                  <Col xs={12} md={8} className="d-flex align-items-center justify-content-center branco text-center">
                    <div>
                      <h2>Nois pika e o resto é buraco Ladrão</h2>
                      <p>A leitura é uma habilidade essencial que abre portas para o conhecimento e o crescimento pessoal. Ela nos permite explorar diferentes mundos, culturas e perspectivas, ampliando nossa compreensão do mundo ao nosso redor.</p>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item className="esp1">
                <Row className="fade-in-image">
                  <Col xs={12} md={8} className="d-flex align-items-center justify-content-center branco text-center">
                    <div>
                      <h2>Nois pika e o resto é buraco Ladrão</h2>
                      <p>A leitura é uma habilidade essencial que abre portas para o conhecimento e o crescimento pessoal. Ela nos permite explorar diferentes mundos, culturas e perspectivas, ampliando nossa compreensão do mundo ao nosso redor.</p>
                    </div>
                  </Col>
                  <Col xs={12} md={4} className="d-flex justify-content-center">
                    <Image src={foto2} width="100%" />
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item className="esp1">
                <Row className="fade-in-image">
                  <Col xs={12} md={4} className="d-flex justify-content-center">
                    <Image src={foto3} width="100%" />
                  </Col>
                  <Col xs={12} md={8} className="d-flex align-items-center justify-content-center branco text-center">
                    <div>
                      <h2>Nois pika e o resto é buraco Ladrão</h2>
                      <p>A leitura é uma habilidade essencial que abre portas para o conhecimento e o crescimento pessoal. Ela nos permite explorar diferentes mundos, culturas e perspectivas, ampliando nossa compreensão do mundo ao nosso redor.</p>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item className="esp1">
                <Row className="fade-in-image">
                  <Col xs={12} md={8} className="d-flex align-items-center justify-content-center branco text-center">
                    <div>
                      <h2>Nois pika e o resto é buraco Ladrão</h2>
                      <p>A leitura é uma habilidade essencial que abre portas para o conhecimento e o crescimento pessoal. Ela nos permite explorar diferentes mundos, culturas e perspectivas, ampliando nossa compreensão do mundo ao nosso redor.</p>
                    </div>
                  </Col>
                  <Col xs={12} md={4} className="d-flex justify-content-center">
                    <Image src={foto5} width="100%" />
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </div>

      {/* Planos */}

      <div className="card-stack-container">
        <div className="title-container font">
          <h2>Planos</h2>
        </div>
        {cardsData.map((card, index) => (
          <div key={card.id} className={`card-item card-${index + 1}`}>
            <h1>{card.price}</h1>
            <h3 className="titulo">{card.title}</h3>
            <p>{card.description}</p>
            <Button className="botao">Saiba Mais</Button>
          </div>
        ))}
      </div>

    </>
  );
}

export default Home;