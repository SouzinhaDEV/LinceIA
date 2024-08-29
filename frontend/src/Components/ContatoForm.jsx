import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import InputMask from 'react-input-mask';

// ORDEM CORRETA:
// '-> Nome Completo
// '-> E-Mail
// '-> Telefone 

function FormularioContato() {
    return (
        <Container className='FormContato'>
            <Row className="justify-content-center">
                <Col md={10}>
                    <Form className='ContatoFormulario'>
                        <h2 className='Titulo'>Formulário de Contato </h2>
                        <Form.Group className="mb-3" controlId="formNomeCompleto">
                            <Form.Label as="p">Nome Completo</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Seu nome completo"
                                pattern="[A-Za-zÀ-ÖØ-Ýà-öø-ÿ ]{1,}"
                                title="Nome deve conter apenas letras e espaços."
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label as="p">Endereço de Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="nome@exemplo.com"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formTelefone">
                            <Form.Label as="p">Número de Telefone</Form.Label>
                            <InputMask mask="(99) 99999-9999" placeholder="(xx) xxxxx-xxxx">
                                {(inputProps) => <Form.Control {...inputProps} type="text" required />}
                            </InputMask>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formMensagem">
                            <Form.Label as="p">Mensagem</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Deixe sua mensagem" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                                as="p"
                                required
                                label="Concordo com os termos de serviço"
                                feedback="Você deve concordar antes de enviar."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <Button className='estilizacaoButton' variant="primary" type="submit" as="p">Enviar Mensagem</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default FormularioContato;
