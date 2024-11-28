import React, { useState } from "react";
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import QR from '../Img/qr code.jpg';
import check from '../Img/check.png';
import banner from '../Img/Planos.png'
import '../CSS/Planos.css';

// Componente do Cartão de Crédito (Flip Card)
const CardFlip = ({ cardNumber, cardName, cardDate, cardCVV }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p className="heading_8264">MASTERCARD</p>
          <svg className="logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 48 48">
            <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"></path>
            <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"></path>
            <path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"></path>
          </svg>
          <p className="number">{cardNumber}</p>
          <p className="valid_thru">Validade</p><br />
          <p className="date_8264">{cardDate}</p>
          <p className="name">{cardName}</p>
        </div>
        <div className="flip-card-back">
          <div className="strip"></div>
          <div className="mstrip"></div>
          <div className="sstrip">
            <p className="code">{cardCVV || "***"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Página dos Planos com Pagamento
const PlansPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    cardDate: "",
    cardCVV: "",
  });

  const handleSubmit = () => {
    alert('Pagamento efetuado com sucesso!');
  };

  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => setShowAlert(true);
  const handleCloseAlert = () => setShowAlert(false);

  const plans = [
    {
      title: 'Plano Mensal',
      price: 'R$ 249,90',
      features: ['- Cobrança Mensal', '- Plano dedicado a rápida utilização e precisa'],
      isPopular: true,
    },
    {
      title: 'Plano Anual',
      price: 'R$ 2.500,00',
      features: ['- Cobrança Anual', '- Maior economia por um longo tempo'],
      isPopular: true,
    },
    {
      title: 'Plano Semestral',
      price: 'R$ 899,90',
      features: ['- Cobrança Semestral', '- Plano eficiente curtos períodos'],
      isPopular: true,
    },
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      // Mascara para número do cartão
      const formattedNumber = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
      setCardDetails((prevDetails) => ({ ...prevDetails, cardNumber: formattedNumber }));
    } else if (name === "cardDate") {
      // Mascara para data de expiração
      const formattedDate = value.replace(/\D/g, '').replace(/(\d{2})(\d{0,2})/, '$1/$2');
      setCardDetails((prevDetails) => ({ ...prevDetails, cardDate: formattedDate }));
    } else {
      setCardDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    }
  };

  return (
    <div >
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(36, 36, 36, 0) 70%, rgb(36, 36, 36) 100%)',
            zIndex: 1,
          }}
        />
        <Image src={banner} alt="Banner" layout="responsive" width='100%' height={480} />
      </div>
      <div className="container py-5">
        <div className="row">
          {plans.map((plan, index) => (
            <div key={index} className="col-md-4">
              <div className="fundoplan">
                <div className={`card ${plan.isPopular ? 'border-primary' : ''} mb-4 shadow-sm`}>
                  <div className={`card-header ${plan.isPopular ? 'bg-primary text-white' : ''}`}>
                    <h4 className="my-0 font-weight-normal">{plan.title}</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      {plan.price} <small className="text-muted">R$</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      {plan.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <Button variant="primary" className="botaopl" onClick={() => handlePlanSelect(plan)}>
                      Selecionar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPlan && (
        <Container>
          <Row className="d-flex align-items-center mt-5">
            <Col md={6}>
              <div className="payment-section">
                <h2 className="text-center brancopl">Você selecionou: {selectedPlan.title}</h2>

                <div className="form-group mt-4">
                  <label className="brancopl">Método de Pagamento</label>
                  <select className="form-control formpl" value={paymentMethod} onChange={handlePaymentChange}>
                    <option value="">Selecione...</option>
                    <option value="credit">Cartão de Crédito</option>
                    <option value="debit">Cartão de Débito</option>
                    <option value="pix">Pix</option>
                  </select>
                </div>

                {(paymentMethod === "credit" || paymentMethod === "debit") && (
                  <div className="card-details mt-4">
                    <div className="row">
                      <div className="col-md-6">
                        <label className="brancopl">Número do Cartão</label>
                        <input
                          type="text"
                          className="form-control formpl"
                          name="cardNumber"
                          maxLength="19"
                          placeholder="0000 0000 0000 0000"
                          value={cardDetails.cardNumber}
                          onChange={handleCardInputChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="brancopl">Nome no Cartão</label>
                        <input
                          type="text"
                          className="form-control formpl"
                          name="cardName"
                          maxLength="35"
                          placeholder="Nome no Cartão"
                          value={cardDetails.cardName}
                          onChange={handleCardInputChange}
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label className="brancopl">Data de Expiração</label>
                        <input
                          type="text"
                          className="form-control formpl"
                          name="cardDate"
                          maxLength="5"
                          placeholder="MM/AA"
                          value={cardDetails.cardDate}
                          onChange={handleCardInputChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="brancopl">CVV</label>
                        <input
                          type="text"
                          className="form-control formpl"
                          name="cardCVV"
                          maxLength="3"
                          placeholder="***"
                          value={cardDetails.cardCVV}
                          onChange={handleCardInputChange}
                        />
                      </div>
                    </div><br />
                    <div>
                      <Button
                        className="estilizacaoButton"
                        variant="dark"
                        type="button"
                        onClick={handleShowAlert}
                      >
                        Enviar
                      </Button>

                      {showAlert && (
                        <div className="alert-overlay">
                          <div className="alert-box">
                            <Image src={check} width={200} />
                            <p>Pagamento Efetuado com Sucesso !!!</p>
                            <Button
                              className="alert-button"
                              onClick={handleCloseAlert}
                            >
                              Fechar
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                )}
              </div>
            </Col>

            <Col md={6} className="d-flex justify-content-center">
              {paymentMethod === "pix" ? (
                <div className="pix-details">
                  <h3 className="text-center brancopl">QR Code Pix aqui</h3><br />
                  <img src={QR} alt="QR Code" width={250} />
                </div>
              ) : (
                (paymentMethod === "credit" || paymentMethod === "debit") && (
                  <CardFlip
                    cardNumber={cardDetails.cardNumber}
                    cardName={cardDetails.cardName}
                    cardDate={cardDetails.cardDate}
                    cardCVV={cardDetails.cardCVV}
                  />

                )
              )}

            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default PlansPage;