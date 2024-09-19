import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importar o useNavigate para redirecionar
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });

  const navigate = useNavigate(); // Inicializa o hook de navegação

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email === 'admin@admin.com' && formData.senha === '12345') {
      navigate('/listaUsuarios');
    } else {
      try {
        await axios.post('http://localhost:3001/login', formData);
        alert('Login criado com sucesso!');
        setFormData({
          email: '',
          senha: ''
        });
      } catch (error) {
        console.error('Erro ao criar login:', error);
        alert('Erro ao criar login. Verifique o console para mais detalhes.');
      }
    }
  };

  return (
    <div className="login-container">
      <Form className="login" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="login-label">Email</Form.Label>
          <Form.Control
            name="email"
            onChange={handleChange}
            value={formData.email}
            type="email"
            placeholder="nome@exemplo.com"
            required
          />
          <Form.Text className="login-text">
            Nunca compartilharemos seu e-mail com mais ninguém.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="login-label">Senha</Form.Label>
          <Form.Control
            name="senha"
            onChange={handleChange}
            value={formData.senha}
            type="password"
            placeholder="Senha"
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
