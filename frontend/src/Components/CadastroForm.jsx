import { React, useState } from 'react';
import axios from 'axios';

// ORDEM CORRETA:
// '-> Nome Completo
// '-> E-Mail
// '-> Senha
// '-> Telefone 
// '-> CPF 

const CadastroForm = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        telefone: '',
        cpf: '',
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
            await axios.post('http://localhost:3001/cadastros', formData);
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

    return (
        // A Tag "form" é a tag que você vai englobar tudo para estilizar, e cada "input" é cada espaço preenchível, individualmente. Se for criar um car, faça ele no "form".
        <form className="form-container" onSubmit={handleSubmit}>
            <h2>Cadastro de Clientes</h2>
            <input type="text" name="nome" placeholder="Nome Completo" value={formData.nome} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input type="text" name="senha" placeholder="Senha" value={formData.senha} onChange={handleChange} />
            <input type="number" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} />
            <input type="number" name="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange} />
            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default CadastroForm;