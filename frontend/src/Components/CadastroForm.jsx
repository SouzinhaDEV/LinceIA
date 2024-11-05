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
      await axios.post('http://localhost:3001/cadastros/cadastros', formData);
      alert('Cadastro criado com sucesso!');
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        nome: '',
        email: '',
        senha: '',
        telefone: '',
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
            className='formlog'
            placeholder="Nome completo"
            pattern="[A-Za-zÀ-ÖØ-Ýà-öø-ÿ ]{1,}"
            title="Nome deve conter apenas letras e espaços."
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name="email"
            onChange={handleChange}
            value={formData.email}
            type="email"
            className='formlog'
            placeholder="nome@exemplo.com"
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
            className='formlog'
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTelefone">
          <InputMask
            mask="(99) 99999-9999"
            value={formData.telefone}
            className='formlog'
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
          <InputMask
            mask="999.999.999-99"
            value={formData.cpf}
            className='formlog'
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
            className='login-text'
            label="Concordo com os termos de serviço"
            feedback="Você deve concordar antes de enviar."
            feedbackType="invalid"
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
