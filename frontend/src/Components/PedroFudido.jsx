// Rating.js
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../CSS/Contato.css'

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar a avaliação para um backend
    console.log("Avaliação enviada:", { rating, comment });
    setSubmitted(true);
  };

  return (
    <div className="rating-container">
      <h3>Avalie o Plano</h3>
      {!submitted ? (
        <Form onSubmit={handleSubmit}>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${rating >= star ? 'selected' : ''}`}
                onClick={() => handleRatingChange(star)}
              >
                &#9733;
              </span>
            ))}
          </div>
          <Form.Group controlId="comment">
            <Form.Label>Deixe um comentário:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-2">
            Enviar Avaliação
          </Button>
        </Form>
      ) : (
        <p>Obrigado pela sua avaliação!</p>
      )}
    </div>
  );
};

export default Rating;
