import React, { useState } from 'react';
import axios from 'axios';
import '../css/Aflevering.css';

const Aflevering = () => {
  const [formData, setFormData] = useState({
    registreringsNummer: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    // Add validation logic here
    if (formData.registreringsNummer.trim() === '') {
      errors.registreringsNummer = 'RegistreringsNummer er påkrævet';
    }

    if (Object.keys(errors).length === 0) {
      postItem();
    } else {
      setFormErrors(errors);
    }
  };

  const postItem = async () => {
    try {
      const response = await axios.post(
        'https://gorilla-informed-asp.ngrok-free.app/Udlån/AfleverLån',
        {
          registreringsNummer: formData.registreringsNummer,
        }
      );
      console.log('POST Request Response:', response.data);
      alert('Afleveret!');
    } catch (error) {
      console.error('Error posting item:', error);
      alert('Der opstod en fejl under aflevering. Prøv igen senere.');
    }
  };

  return (
    <div>
      <h2 className="form-title">Aflevering</h2>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Registrerings Nummer:</label>
            <input
              type="text"
              name="registreringsNummer"
              value={formData.registreringsNummer}
              onChange={handleChange}
              required
            />
            {formErrors.registreringsNummer && <div className="error">{formErrors.registreringsNummer}</div>}
          </div>

          <div className="form-group mx-auto">
            <button type="submit" className="submit-button">
              Aflever
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Aflevering;
