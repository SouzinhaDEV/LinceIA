import React from 'react';
import TermosDeUso from '../Components/TermosDeUso';
import Privacidade from '../Components/PoliticaDePrivacidade';
import '../CSS/Privacidade.css';

const TermsAndPrivacy = () => {
  return (
    <div className="terms-privacy-container">
      <h1>Termos de Uso e Política de Privacidade</h1>
      <TermosDeUso />
      <Privacidade />
    </div>
  );
};

export default TermsAndPrivacy;
