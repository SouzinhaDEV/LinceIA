import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/login', formData);
      alert('Login criado com sucesso!');
      // Limpar o formulário após o envio bem-sucedido.
      setFormData({
        email: '',
        senha: ''
      });
    } catch (error) {
      console.error('Erro ao criar login:', error);
      alert('Erro ao criar login. Verifique o console para mais detalhes.');
    }
  };

  return (
    <div className="login-container FormCotato">
      <Form className="login" onSubmit={handleSubmit}>
        <h2 className='Titulocd'>Login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name="email"
            onChange={handleChange}
            value={formData.email}
            type="email"
            placeholder="nome@exemplo.com"
            className='formlog'
            required
          />
          <Form.Text className="login-text">
            Aqui seu e-mail é seguro.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control

            name="senha"
            onChange={handleChange}
            value={formData.senha}
            type="password"
            placeholder="Senha"
            className='formlog'
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 login-checkbox" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Lembre de mim" />
        </Form.Group>

        <Button className="login-button" variant="primary" type="submit">
          Fazer Login
        </Button>
      </Form>
    </div>


  );
};

export default LoginForm;
