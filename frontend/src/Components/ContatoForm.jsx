import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import InputMask from 'react-input-mask';

const ContatoForm = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
    });

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/contato', formData);
            alert('Cadastro criado com sucesso!');
            setFormData({
                nome: '',
                email: '',
                telefone: '',
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

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    return (
        <Container className="FormContato">
            <Row className="justify-content-center">
                <Col md={10}>
                    <Form className="ContatoFormulario" onSubmit={handleSubmit}>
                        <h2 className="Titulo">Formulário de Contato</h2>
                        <Form.Group className="mb-3" controlId="formNomeCompleto">
                            <Form.Label as="p">Nome Completo</Form.Label>
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
                            <Form.Label as="p">Endereço de Email</Form.Label>
                            <Form.Control
                                name="email"
                                onChange={handleChange}
                                value={formData.email}
                                type="email"
                                placeholder="nome@exemplo.com"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formTelefone">
                            <Form.Label as="p">Número de Telefone</Form.Label>
                            <InputMask
                                mask="(99) 99999-9999"
                                value={formData.telefone}
                                onChange={(e) =>
                                    setFormData({ ...formData, telefone: e.target.value })
                                }
                            >
                                {(inputProps) => (
                                    <Form.Control {...inputProps} name="telefone" type="text" required />
                                )}
                            </InputMask>
                        </Form.Group>

                        {/* Card de Avaliação */}
                        <div className="rating-container mb-3">
                            <h3>Avalie o Plano</h3>
                            <div className="star-rating">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        className={`star ${rating >= star ? 'selected' : ''}`}
                                        onClick={() => handleRatingChange(star)}
                                        style={{ cursor: 'pointer', fontSize: '1.5rem' }}
                                    >
                                        &#9733;
                                    </span>
                                ))}
                            </div>
                            <Form.Group controlId="comment" className="mt-3">
                                <Form.Label>Deixe um comentário:</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={comment}
                                    onChange={handleCommentChange}
                                    placeholder="Escreva seu comentário aqui"
                                />
                            </Form.Group>
                        </div>

                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                label="Concordo com os termos de serviço"
                                feedback="Você deve concordar antes de enviar."
                                feedbackType="invalid"
                            />
                        </Form.Group>

                        <Button className="estilizacaoButton" variant="primary" type="submit">
                            Enviar Mensagem
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ContatoForm;
