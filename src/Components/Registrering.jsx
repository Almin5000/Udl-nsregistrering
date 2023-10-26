import React, { useState } from 'react';
import axios from 'axios';
import '../css/Registrering.css';

const Registrering = () => {
  const [formData, setFormData] = useState({
    fabrikat: '',
    model: '',
    registreringsNummer: '',
    mus: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (formData.fabrikat.trim() === '') {
      errors.fabrikat = 'Fabrikat er påkrævet';
    }
    if (formData.model.trim() === '') {
      errors.model = 'Model er påkrævet';
    }
    if (formData.registreringsNummer.trim() === '') {
      errors.registreringsNummer = 'RegistreringsNummer er påkrævet';
    }
    if (formData.mus.trim() === '') {
      errors.mus = 'Mus er påkrævet';
    }
  
    if (Object.keys(errors).length === 0) {
      console.log('Data being posted:', {
        registreringsNummer: formData.registreringsNummer,
        model: formData.model,
        fabrikat: formData.fabrikat,
        mus: formData.mus,
      });
      axios.post('https://gorilla-informed-asp.ngrok-free.app/Computer/Register', {
        fabrikat: formData.fabrikat,
        model: formData.model,
        mus: formData.mus,
        registreringsNummer: formData.registreringsNummer,
      })
        .then((response) => {
          alert('Computer registreret!');
        })
        .catch((error) => {
          if (error.response) {
            alert('Ugyldigt Request.');
            console.error('Server Error', error.response.data);
          } else if (error.request) {
            alert('Ingen svar fra serveren.');
            console.error('No response from server', error.request);
          } else {
            alert('Ukendt fejl.');
            console.error('Request setup error', error.message);
          }
        });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div>
      <h2 className="form-title">Registrering af computer</h2>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Fabrikat:</label>
            <input
              type="text"
              name="fabrikat"
              value={formData.fabrikat}
              onChange={handleChange}
              required
            />
            {formErrors.fabrikat && <div className="error">{formErrors.fabrikat}</div>}
          </div>

          <div className="form-group">
            <label>Model:</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              required
            />
            {formErrors.model && <div className="error">{formErrors.model}</div>}
          </div>

          <div className="form-group">
            <label>RegistreringsNummer:</label>
            <input
              type="text"
              name="registreringsNummer"
              value={formData.registreringsNummer}
              onChange={handleChange}
              required
            />
            {formErrors.registreringsNummer && (
              <div className="error">{formErrors.registreringsNummer}</div>
            )}
          </div>

          <div className="form-group">
            <label>Mus:</label>
            <select name="mus" value={formData.mus} onChange={handleChange} required>
              <option value="" disabled hidden>Vælg Mus</option>
              <option value="optisk">Optisk</option>
              <option value="alm">Alm</option>
              <option value="nej">Nej</option>
            </select>
            {formErrors.mus && <div className="error">{formErrors.mus}</div>}
          </div>

          <div className="form-group mx-auto">
            <button type="submit" className="submit-button">
              Registrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registrering;
