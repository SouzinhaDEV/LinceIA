import { React, useState } from 'react';
import '../CSS/IA.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import InputMask from 'react-input-mask';

// Série de dados disponíveis em ORDEM:
// EngRPM, FuelP, LubOilP, LubOilT, AirP, AirT

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
            // Limpar o formulário após o envio bem-sucedido
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

    // EngRPM, FuelP, LubOilP, LubOilT, AirP, AirT

    return (
        <div className="dataset-container">
            <Form className="ia justify-content-center text-center" onSubmit={handleSubmit}>
                <Form.Group className="mb-3 justify-content-center text-center" controlId="formNomeCompleto">
                    <Form.Label className='login-label'>Rotação do Motor RPM</Form.Label>
                    <Form.Control
                        name="EngRPM"
                        onChange={handleChange}
                        value={formData.EngRPM}
                        type="number"
                        placeholder="0.000rpm"
                        pattern="[A-Za-zÀ-ÖØ-Ýà-öø-ÿ ]{1,}"
                        title="Nome deve conter apenas letras e espaços."
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3 justify-content-center text-center" controlId="formBasicEmail">
                    <Form.Label className="login-label">Pressão de Combustível N/m²</Form.Label>
                    <Form.Control
                        name="FuelP"
                        onChange={handleChange}
                        value={formData.FuelP}
                        type="number"
                        placeholder="N/m²"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3 justify-content-center text-center" controlId="formBasicPassword">
                    <Form.Label className="login-label">Pressão do Óleo Lubrificante N/m²</Form.Label>
                    <Form.Control
                        name="LubOilP"
                        onChange={handleChange}
                        value={formData.LubOilP}
                        type="number"
                        placeholder="N/m²"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3 justify-content-center text-center" controlId="formBasicPassword">
                    <Form.Label className="login-label">Temperatura do Óleo Lubrificante °C</Form.Label>
                    <Form.Control
                        name="LubOilT"
                        onChange={handleChange}
                        value={formData.LubOilT}
                        type="number"
                        placeholder="0°C"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3 justify-content-center text-center" controlId="formBasicPassword">
                    <Form.Label className="login-label">Pressão do Ar de Arrefecimento N/m²</Form.Label>
                    <Form.Control
                        name="AirP"
                        onChange={handleChange}
                        value={formData.AirP}
                        type="number"
                        placeholder="N/m²"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3 justify-content-center text-center" controlId="formBasicPassword">
                    <Form.Label className="login-label">Temperatura do Ar de Arrefecimento °C</Form.Label>
                    <Form.Control
                        name="AirT"
                        onChange={handleChange}
                        value={formData.AirT}
                        type="number"
                        placeholder="0°C"
                        required
                    />
                </Form.Group>

                <Button className="login-button" variant="primary" type="submit">
                    Analisar Estado do Motor
                </Button>
            </Form>
        </div>
    );
};

export default DatasetForm;