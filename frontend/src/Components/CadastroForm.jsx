import { React, useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputMask from 'react-input-mask';

const CadastroForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    telefone: '',
    cpf: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/cadastros', formData);
      alert('Cadastro criado com sucesso!');
      // Limpar o formulário após o envio bem-sucedido
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
    <div className="login-container">
      <Form className="login" onSubmit={handleSubmit}>
        <h2 className='Titulocd'>Cadastre-se</h2>
        <Form.Group className="mb-3" controlId="formNomeCompleto">
          <Form.Control
            name="nome"
            onChange={handleChange}
            value={formData.nome}
            type="text"
            placeholder="Nome completo"
            pattern="[A-Za-zÀ-ÖØ-Ýà-öø-ÿ ]{1,}"
            title="Nome deve conter apenas letras e espaços."
            className='formcd'
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name="email"
            onChange={handleChange}
            value={formData.email}
            type="email"
            placeholder="nome@exemplo.com"
            className='formcd'
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="senha"
            onChange={handleChange}
            value={formData.senha}
            type="password"
            placeholder="Senha"
            className='formcd'
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTelefone">
          <InputMask
            mask="(99) 99999-9999"
            value={formData.telefone}
            placeholder="(11) 11111-1111"
            className='formcd'
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
          <InputMask
            mask="999.999.999-99"
            value={formData.cpf}
            placeholder="123.456.789-00"
            className='formcd'
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
            className='labelcor'
          />
        </Form.Group>

        <Button className="login-button" variant="primary" type="submit">
          Criar Cadastro
        </Button>
      </Form>
    </div>
  );
};

export default CadastroForm;
