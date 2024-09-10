import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        senha: '',
    });

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/login', formData);
            alert('Login criado com sucesso!');
            setFormData({
                email: '',
                senha: '',
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
        <div className="login-container">
        <Form className="login">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="login-label">Email</Form.Label>
            <Form.Control className="login-input" type="email" placeholder="Enter email" />
            <Form.Text className="login-text">
            Nunca compartilharemos seu e-mail com mais ninguém.
            </Form.Text>
          </Form.Group>
      
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="login-label">Senha</Form.Label>
            <Form.Control className="login-input" type="password" placeholder="Password" />
          </Form.Group>
      
          <Form.Group className="mb-3 login-checkbox" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Lembre de mim" />
          </Form.Group>
      
          <Button className="login-button" type="submit">
            Acessar
          </Button>
        </Form>
      </div>
      
      
    );
};

export default LoginForm;
