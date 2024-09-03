import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import InputMask from 'react-input-mask';

// ORDEM CORRETA:
// '-> Nome Completo
// '-> E-Mail
// '-> Telefone 

const ContatoForm = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/contatos', formData);
            alert('Cadastro criado com sucesso!');
            // Limpar o formulário após o envio bem-sucedido.
            setFormData({
                nome: '',
                email: '',
                telefone: ''
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
            [name]: value
        });
    };

    // OS "onChange={handleChange}" estão conectados no "form.control", onde eu ACHO que são os inputs... Mas, se não der certo e não levar informação pro back, coloque as constantes no "form.group".

    return (
        <Container onSubmit={handleSubmit} className='FormContato'>
            <Row className="justify-content-center">
                <Col md={10}>
                    <Form className='ContatoFormulario'>
                        <h2 className='Titulo'>Formulário de Contato </h2>
                        <Form.Group className="mb-3" controlId="formNomeCompleto">
                            <Form.Label as="p">Nome Completo</Form.Label>
                            <Form.Control onChange={handleChange} // AQUI <--
                                type="text"
                                placeholder="Seu nome completo"
                                pattern="[A-Za-zÀ-ÖØ-Ýà-öø-ÿ ]{1,}"
                                title="Nome deve conter apenas letras e espaços."
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label as="p">Endereço de Email</Form.Label>
                            <Form.Control onChange={handleChange}
                                type="email"
                                placeholder="nome@exemplo.com"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formTelefone" onChange={handleChange}>
                            <Form.Label as="p">Número de Telefone</Form.Label>
                            <InputMask mask="(99) 99999-9999" placeholder="(xx) xxxxx-xxxx">
                                {(inputProps) => <Form.Control {...inputProps} type="text" required />}
                            </InputMask>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formMensagem" >
                            <Form.Label as="p">Mensagem</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Deixe sua mensagem" required onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check onChange={handleChange}
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



export default ContatoForm;
