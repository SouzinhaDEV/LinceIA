import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'; // Importando Link
import { Image, Container, Row, Col, Button } from "react-bootstrap";
import '../CSS/Home.css';
import video4 from '../Videos/video4.mp4';
import video6 from '../Videos/video6.mp4';
import video5 from '../Videos/video5.mp4';
import foto3 from '../Img/ia.png';
import foto4 from '../Img/batida.png';
import foto5 from '../Img/mecanico.png';
import aroficina from '../Img/ar_oficina.png';
import arplanos from '../Img/ar_planos.png';
import arIA from '../Img/ar_AI.png';
import arprivacidade from '../Img/ar_privacidade.png';
import arsuporte from '../Img/ar_suporte.png';

function Home() {
  const carouselItems = [
    {
      videoSrc: video4,
      title: "Inteligência Artificial",
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
    { id: 1, price: '250', money: 'R$', title: 'Mensal', description: 'Acesso de um mês de plano', link: '/Planos' },
    { id: 2, price: '2.200', money: 'R$', title: 'Anual', description: 'Acesso de um ano de plano', link: '/Planos' },
    { id: 3, price: '900', money: 'R$', title: 'Semestral', description: 'Acesso semestral ao plano', link: '/Planos' },
  ];

  const itens = [
    { id: 1, src: aroficina, title: 'Oficinas', link: '/Oficinas' },
    { id: 2, src: arprivacidade, title: 'Privacidade', link: '/Privacidade' },
    { id: 3, src: arIA, title: 'Inteligência Artificial', link: '/Dataset' },
    { id: 4, src: arplanos, title: 'Planos', link: '/Planos' },
    { id: 5, src: arsuporte, title: 'Suporte', link: '/Contato' }
  ];

  return (
    <>
      {/* Carrousel */}
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
          {itens.map((item) => (
            <Col key={item.id} xs={6} sm={4} md={2}>
              <Link to={item.link}> {/* Utilizando Link corretamente */}
                <Image src={item.src} width="100%" className="mov" />
                <h5 className="corar">{item.title}</h5>
              </Link>
            </Col>
          ))}
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
                      <h2>Diagnóstico Preciso e Solução Imediata para o Seu Carro</h2>
                      <p>A LinceIA utiliza inteligência artificial para identificar problemas no seu carro com alta precisão e rapidez, detectando falhas em várias partes do veículo. Além disso, localiza as oficinas mais próximas para uma solução rápida e eficiente.</p>
                    </div>
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
                      <h2>Sua Vida se Tornará mais Facil com nossa Incrivel IA</h2>
                      <p>A LinceIA é pioneira em IA para o setor automotivo, oferecendo tecnologia inovadora que analisa dados com alta precisão. Nossa IA identifica problemas de forma eficiente e evolui continuamente para garantir soluções rápidas e eficazes, mantendo você na vanguarda da tecnologia automotiva.</p>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item className="esp1">
                <Row className="fade-in-image">
                  <Col xs={12} md={8} className="d-flex align-items-center justify-content-center branco text-center">
                    <div>
                      <h2>Achamos Oficinas para você</h2>
                      <p>A LinceIA identifica problemas no seu carro com precisão usando inteligência artificial e facilita o próximo passo, indicando as oficinas mais próximas da sua localização. Nossa plataforma garante rapidez, confiança e comodidade, simplificando sua vida ao diagnosticar o problema e mostrar onde solucioná-lo, tudo em um só lugar.</p>
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

      {/* Sobre Nós */}
      <div className="fundsobre align-items-center justify-content-center">
        <h2>Sobre Nós</h2>
        <p className="pHome">A Lince é uma empresa focada em soluções digitais ágeis e inovadoras. Nossa missão é ajudar negócios a evoluir tecnologicamente, oferecendo serviços personalizados para otimizar processos e gerar valor.</p>
      </div>

      {/* Planos */}
      <div className="card-stack-container">
        <div className="title-container font">
          <h2>Planos</h2>
        </div>
        {cardsData.map((card, index) => (
          <div key={card.id} className={`card-item card-${index + 1}`}>
            <h4 className="titulo">{card.title}</h4>
            <div className="price-container">
              <h1>{card.price}</h1>
              <h6>{card.money}</h6>
            </div>
            <p>{card.description}</p>
            <Link to={card.link}>
              <Button className="botao">Saiba Mais</Button>
            </Link>

          </div>
        ))}
      </div>
    </>
  );
}

export default Home;