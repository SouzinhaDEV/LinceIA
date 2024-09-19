import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';

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
            <Row>
                <Col md={12}>
                    <Form className="ContatoFormulario" onSubmit={handleSubmit}>
                        <h2 className="Titulo">Formulário de Contato</h2>
                        <Form.Group className="mb-3" controlId="formNomeCompleto">
                            <Form.Control
                                name="nome"
                                onChange={handleChange}
                                value={formData.nome}
                                type="text"
                                placeholder="Seu nome completo"
                                pattern="[A-Za-zÀ-ÖØ-Ýà-öø-ÿ ]{1,}"
                                title="Nome deve conter apenas letras e espaços."
                                required
                                className='formctt'
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Control
                                name="email"
                                onChange={handleChange}
                                value={formData.email}
                                type="email"
                                placeholder="Email válido para contato"
                                required
                                className='formctt'
                            />
                        </Form.Group>

                        {/* Card de Avaliação */}
                        <div className="rating-container mb-3">
                            <h2 className='espctt'>Avalie o Plano</h2>
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
                        </div>

                        <Form.Group controlId="comment" className="mt-3">
                            <Form.Label className='texte1'>Deixe um comentário:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={comment}
                                onChange={handleCommentChange}
                                placeholder="Escreva seu comentário aqui"
                                className='formctt'
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                label="Concordo com os termos de serviço"
                                feedback="Você deve concordar antes de enviar."
                                feedbackType="invalid"
                            />
                        </Form.Group>

                        <Button className="estilizacaoButton" variant="dark" type="submit">
                            Enviar Mensagem
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>

    );
};

export default ContatoForm;
