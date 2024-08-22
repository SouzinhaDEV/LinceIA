import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

function CardContato() {
    return (
        <Container>
            <Row className="justify-content-center">
                <Card className='ContatoCard'>
                    <Card.Header as="h4">Entrar em Contato</Card.Header>
                    <Card.Body>
                        <Card.Title>Redes Sociais</Card.Title>
                        <Card.Text>
                            Use nosso formulario de cadastro para solicitação de informaçôes ou entre em contato conosco diretamente usando as informações de contato abaixo
                        </Card.Text>
                        <Card.Text>
                            Sinta-se à vontade para entrar em contato conosco via e-mail ou telefone
                        </Card.Text>

                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
}

export default CardContato;