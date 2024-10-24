import React, { useState } from 'react';
import '../CSS/IA.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

const DatasetForm = () => {
    const [formData, setFormData] = useState({
        EngRPM: '',
        FuelP: '',
        LubOilP: '',
        LubOilT: '',
        AirP: '',
        AirT: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/dataset', formData);
            alert('Dados enviados para o cálculo...');
            setFormData({
                EngRPM: '',
                FuelP: '',
                LubOilP: '',
                LubOilT: '',
                AirP: '',
                AirT: '',
            });
        } catch (error) {
            console.error('Erro no formulário.', error);
            alert('Erro ao criar lógica. Verifique o console para mais detalhes.');
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
        <div className="dataset-container">
            <Form className="ia" onSubmit={handleSubmit}>
                <h2 className='Titulocd'>Formulário da I.A</h2>
                <Form.Group className="mb-3" controlId="formNomeCompleto">
                    <Row>
                        <Col xs={5}>
                            <Form.Label>Rotação do Motor RPM</Form.Label>
                        </Col>
                        <Col xs={7}>
                            <Form.Control
                                name="EngRPM"
                                onChange={handleChange}
                                value={formData.EngRPM}
                                className='formlog'
                                type="number"
                                placeholder="0.000rpm"
                                required
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Row>
                        <Col xs={5}>
                            <Form.Label>Pressão de Combustível N/m²</Form.Label>
                        </Col>
                        <Col xs={7}>
                            <Form.Control
                                name="FuelP"
                                onChange={handleChange}
                                value={formData.FuelP}
                                className='formlog'
                                type="number"
                                placeholder="N/m²"
                                required
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Row>
                        <Col xs={5}>
                            <Form.Label>Pressão do Óleo Lubrificante N/m²</Form.Label>
                        </Col>
                        <Col xs={7}>
                            <Form.Control
                                name="LubOilP"
                                onChange={handleChange}
                                value={formData.LubOilP}
                                className='formlog'
                                type="number"
                                placeholder="N/m²"
                                required
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Row>
                        <Col xs={5}>
                            <Form.Label>Temperatura do Óleo Lubrificante °C</Form.Label>
                        </Col>
                        <Col xs={7}>
                            <Form.Control
                                name="LubOilT"
                                onChange={handleChange}
                                value={formData.LubOilT}
                                className='formlog'
                                type="number"
                                placeholder="0°C"
                                required
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Row>
                        <Col xs={5}>
                            <Form.Label>Pressão do Ar de Arrefecimento N/m²</Form.Label>
                        </Col>
                        <Col xs={7}>
                            <Form.Control
                                name="AirP"
                                onChange={handleChange}
                                value={formData.AirP}
                                className='formlog'
                                type="number"
                                placeholder="N/m²"
                                required
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Row>
                        <Col xs={5}>
                            <Form.Label>Temperatura do Ar de Arrefecimento °C</Form.Label>
                        </Col>
                        <Col xs={7}>
                            <Form.Control
                                name="AirT"
                                onChange={handleChange}
                                value={formData.AirT}
                                type="number"
                                className='formlog'
                                placeholder="0°C"
                                required
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Button className="login-button" variant="primary" type="submit">
                    Analisar Estado do Motor
                </Button>
            </Form>
        </div>
    );
};

export default DatasetForm;