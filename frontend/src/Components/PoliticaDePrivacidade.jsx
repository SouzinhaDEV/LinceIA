import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h2 className='termssub'>Política de Privacidade</h2>
      <p className='termsp'>
        Sua privacidade é importante para nós. Esta política de privacidade explica como coletamos, usamos e protegemos suas informações pessoais.
      </p>
      <p className='termsp'>
        1. Coleta de Informações: Podemos coletar informações pessoais como nome, endereço de e-mail, etc., quando você se registra em nosso site.
      </p>
      <p className='termsp'>
        2. Uso das Informações: As informações que coletamos são usadas para fornecer e melhorar nossos serviços, comunicar-se com você e personalizar sua experiência no site.
      </p>
      {/* Adicione mais políticas conforme necessário */}
    </div>
  );
};

export default PrivacyPolicy;
