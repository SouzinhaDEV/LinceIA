import React from 'react';
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

function CardContato() {
    return (
        <Container className='FundoCardContato'>
            <Row className="justify-content-center">
                <Col xs={12} md={12} sm={4} >
                    <Card className='ContatoCard'>
                        <Card.Header as="h2" className='tituloctt'>Entrar em Contato <FaPhone className='iconst' /></Card.Header>

                        <Card.Body>
                            <Card.Text className='text2'>
                                Use nosso formulário para solicitar informações ou entre em contato diretamente por e-mail ou telefone.
                            </Card.Text >
                            <Card.Title className='text2'>Entre em Contato Conosco:</Card.Title>
                            <Card.Text className='text2'>
                                +55 (11) 99669-7545
                            </Card.Text>
                            <Card.Text className='text2'>
                                +55 (11) 98761-3160
                            </Card.Text>
                            <hr />
                            <Card.Header as="h2" className='tituloctt'>Localização <FaLocationDot className='iconst' /></Card.Header>

                            <Card.Text className='text2'>
                                Boa Vista, 370 , São Paulo.
                            </Card.Text >

                            <hr />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
}

export default CardContato;