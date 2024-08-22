import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import InputMask from 'react-input-mask';

function FormularioContato() {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={10}>
                    <h1>Formulário de Contato </h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formNomeCompleto">
                            <Form.Label>Nome Completo</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Seu nome completo"
                                pattern="[A-Za-zÀ-ÖØ-Ýà-öø-ÿ ]{1,}"
                                title="Nome deve conter apenas letras e espaços."
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Endereço de Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="nome@exemplo.com"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formTelefone">
                            <Form.Label>Número de Telefone</Form.Label>
                            <InputMask mask="(99) 99999-9999" placeholder="(xx) xxxxx-xxxx">
                                {(inputProps) => <Form.Control {...inputProps} type="text" required />}
                            </InputMask>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formMensagem">
                            <Form.Label>Mensagem</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Deixe sua mensagem" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                label="Concordo com os termos de serviço"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <Button className='estilizacaoButton' variant="primary" type="submit" >Enviar Mensagem</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default FormularioContato;