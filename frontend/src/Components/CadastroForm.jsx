import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card } from 'react-bootstrap';
import InputMask from 'react-input-mask';

const ContatoForm = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        senha: '',
        cpf: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/contato', formData);
            alert('Cadastro criado com sucesso!');
            setFormData({
                nome: '',
                email: '',
                telefone: '',
                senha: '',
                cpf: '',
            });
        } catch (error) {
            console.error('Erro ao criar cadastro:', error);
            alert('Erro ao criar cadastro. Verifique o console para mais detalhes.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <Container className="FormContato">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="p-4 cardcadastro">
                        <Card.Body>
                            <Form className="ContatoFormulario" onSubmit={handleSubmit}>
                                <h2 className="Titulo"></h2>
                                
                                <Form.Group className="mb-3" controlId="formNomeCompleto">
                                    <Form.Label as="p" className='corletra'> Nome Completo</Form.Label>
                                    <Form.Control
                                        name="nome"
                                        onChange={handleChange}
                                        value={formData.nome}
                                        type="text"
                                        placeholder="Seu nome completo"
                                        pattern="[A-Za-zÀ-ÖØ-Ýà-öø-ÿ ]{1,}"
                                        title="Nome deve conter apenas letras e espaços."
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label as="p" className='corletra'>Endereço de Email</Form.Label>
                                    <Form.Control
                                        name="email"
                                        onChange={handleChange}
                                        value={formData.email}
                                        type="email"
                                        placeholder="nome@exemplo.com"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formSenha">
                                    <Form.Label as="p" className='corletra'>Senha</Form.Label>
                                    <Form.Control
                                        name="senha"
                                        onChange={handleChange}
                                        value={formData.senha}
                                        type="password"
                                        placeholder="Digite sua senha"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formTelefone">
                                    <Form.Label as="p" className='corletra'>Número de Telefone</Form.Label>
                                    <InputMask
                                        mask="(99) 99999-9999"
                                        value={formData.telefone}
                                        placeholder="(11) 11111-1111"
                                        onChange={(e) =>
                                            setFormData({ ...formData, telefone: e.target.value })
                                        }
                                    >
                                        {(inputProps) => (
                                            <Form.Control {...inputProps} name="telefone" type="text" required />
                                        )}
                                    </InputMask>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formCpf">
                                    <Form.Label as="p" className='corletra'>CPF</Form.Label>
                                    <InputMask
                                        mask="999.999.999-99"
                                        value={formData.cpf}
                                        placeholder="123.456.789-00"
                                        onChange={(e) =>
                                            setFormData({ ...formData, cpf: e.target.value })
                                        }
                                    >
                                        {(inputProps) => (
                                            <Form.Control {...inputProps} name="cpf" type="text" required />
                                        )}
                                    </InputMask>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Check 

                                        required
                                        label="Concordo com os termos de serviço"
                                        feedback="Você deve concordar antes de enviar."
                                        feedbackType="invalid"
                                    />
                                </Form.Group>

                                <Button className="corletra" variant="dark" type="submit">
                                    Enviar Mensagem
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ContatoForm;
