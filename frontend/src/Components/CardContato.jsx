import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

function CardContato() {
    return (
        <Container className='FundoCardContato'>
            <Row className="justify-content-center">
                <Card className='ContatoCard'>
                    <Card.Header as="h2">Entrar em Contato</Card.Header>
                    <Card.Body>
                        <Card.Text as="p">
                            Use nosso formulario de cadastro para solicitação de informaçôes ou entre em contato conosco diretamente usando as informações de contato abaixo
                        </Card.Text >
                        <Card.Text as="p">
                            Sinta-se à vontade para entrar em contato conosco via e-mail ou telefone
                        </Card.Text >
                        <hr />
                        <Card.Title as="h4">Localização do nosso escritorio</Card.Title>
                        <Card.Text >
                            Rua ..., N°.., São Paulo.
                        </Card.Text >
                        <Card.Title as="h4">Redes Sociais</Card.Title>
                        <Card.Text as="p">
                            Facebook Instagram ...
                        </Card.Text>
                        <hr />
                    </Card.Body>
                </Card>
            </Row>
        </Container>

    );
}

export default CardContato;