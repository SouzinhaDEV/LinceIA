import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/cadastro.css';

const Cadastro = () => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleNomeCompletoChange = (e) => setNomeCompleto(e.target.value);
  const handleTelefoneChange = (e) => setTelefone(e.target.value);
  const handleCpfChange = (e) => setCpf(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = (e) => setRememberMe(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de submissão do formulário
  };

  return (
    <div className='FundoCadastro'>
      <Container className="fundo3">
        <Row className="justify-content-center">
          <Col md={6}>
            <form className="form" onSubmit={handleSubmit}>
              <div className="flex-column">
                <label>Nome Completo</label>
              </div>
              <div className="inputForm">
                <input
                  type="text"
                  className="input"
                  placeholder="Digite seu nome completo"
                  value={nomeCompleto}
                  onChange={handleNomeCompletoChange}
                />
              </div>
              <div className="flex-column">
                <label>Email</label>
              </div>
              <div className="inputForm">
                <input
                  type="email"
                  className="input"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>

              <div className="flex-column">
                <label>Password</label>
              </div>
              <div className="inputForm">
                <input
                  type="password"
                  className="input"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>

              <div className="flex-column">
                <label>Telefone</label>
              </div>
              <div className="inputForm">
                <input
                  type="text"
                  className="input"
                  placeholder="Digite seu telefone"
                  value={telefone}
                  onChange={handleTelefoneChange}
                />
              </div>

              <div className="flex-column">
                <label>CPF</label>
              </div>
              <div className="inputForm">
                <input
                  type="text"
                  className="input"
                  placeholder="Digite seu CPF"
                  value={cpf}
                  onChange={handleCpfChange}
                />
              </div>





              <div className="flex-row">
                <div>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                  <label>Lembrar-me</label>
                </div>
                <span className="span">Esqueceu a senha?</span>
              </div>
              <button className="button-submit" type="submit">Cadastrar</button>
              <p className="p">Já tem uma conta? <span className="span">Entrar</span></p>
              <p className="p line">Ou com</p>

              <div className="flex-row">
                <button className="bot google">Google</button>
                <button className="bot apple">Apple</button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cadastro;
