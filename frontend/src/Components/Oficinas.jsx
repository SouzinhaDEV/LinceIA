import React, { useState } from 'react';
import '../CSS/Oficina.css';

const MapPage = () => {
  const [isOverlayVisible, setOverlayVisible] = useState(true);

  const handleRemoveOverlay = () => {
    setOverlayVisible(false);
  };

  return (
    <div className="map-container fundoof">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d58477.35125944115!2d-46.59422855512046!3d-23.646098961976122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOficinas%20e%20mec%C3%A2nicas!5e0!3m2!1spt-BR!2sbr!4v1730823981259!5m2!1spt-BR!2sbr"
        width="100%"
        height="400px"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa de Oficinas e Mecânicas"
      ></iframe>

      {isOverlayVisible && (
        <div className="overlay align-items-center justify-content-center branco text-center">
          <h2 className='tituloof'>Aviso Importante para a Utilização do Mapa de Oficinas</h2>
          <div>
            <p className='textof'>É importante notar que as setas vermelhas indicam as Oficinas da região próxima, e aqui você pode procurar pela região pelo nosso patrocínio com google maps</p>
            <button className="botao2" onClick={handleRemoveOverlay}>
              Remover Filtro
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapPage;
