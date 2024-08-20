import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

function CardContato() {
    return (
        <Container>
            <Row>
                <Card className='ContatoCard'>
                    <Card.Header as="h4">Fale Conosco</Card.Header>
                    <Card.Body>
                        <Card.Title>Redes Sociais</Card.Title>
                        <Card.Text>
                            Intagram
                            Facebook
                            X
                        </Card.Text>
                        <Card.Text>

                        </Card.Text>
                        <Button variant="primary">Envie sua Mensagem</Button>
                    </Card.Body>
                </Card>
            </Row>
        </Container>

    );
}

export default CardContato;