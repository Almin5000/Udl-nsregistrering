import React, { useState } from 'react';
import axios from 'axios';
import '../css/Udlaanssystem.css';

const Udlaanssystem = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minUdlobsdato = tomorrow.toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    elevNummer: '',
    registreringsNummer: '',
    udlaansdato: '',
    udlobsdato: '',
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

    if (formData.elevNummer.trim() === '') {
      errors.elevNummer = 'Elevnummer bør kun indeholde tal';
    }
    if (formData.elevNummer.trim() === '') {
      errors.elevNummer = 'Elevnummer er påkrævet';
    }
    if (formData.registreringsNummer.trim() === '') {
      errors.registreringsNummer = 'Registreringsnummer er påkrævet';
    }
    if (formData.udlaansdato.trim() === '') {
      errors.udlaansdato = 'Udlånsdato er påkrævet';
    }
    if (formData.udlobsdato.trim() === '') {
      errors.udlobsdato = 'Udløbsdato er påkrævet';
    }

    if (Object.keys(errors).length === 0) {
      axios
        .post('https://gorilla-informed-asp.ngrok-free.app/Udlån/RentComputer', {
          elevNummer: formData.elevNummer.toString(),
          registreringsNummer: formData.registreringsNummer.toString(),
          udlaansdato: formData.udlaansdato,
          udlobsdato: formData.udlobsdato,
        })
        .then((response) => {
          alert('Udlånt!');
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
      <h2 className="form-title">Udlånssystem</h2>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Elevnummer:</label>
            <input
              type="text"
              name="elevNummer"
              value={formData.elevNummer}
              onChange={handleChange}
              required
            />
            {formErrors.elevNummer && <div className="error">{formErrors.elevNummer}</div>}
          </div>

          <div className="form-group">
            <label>Registreringsnummer:</label>
            <input
              type="text"
              name="registreringsNummer"
              value={formData.registreringsNummer}
              onChange={handleChange}
              required
            />
            {formErrors.registreringsNummer && <div className="error">{formErrors.registreringsNummer}</div>}
          </div>

          <div className="form-group">
            <label>Udlånsdato:</label>
            <input
              type="date"
              name="udlaansdato"
              value={formData.udlaansdato}
              onChange={handleChange}
              min={today.toISOString().split('T')[0]}
              required
            />
            {formErrors.udlaansdato && <div className="error">{formErrors.udlaansdato}</div>}
          </div>

          <div className="form-group">
            <label>Udløbsdato:</label>
            <input
              type="date"
              name="udlobsdato"
              value={formData.udlobsdato}
              onChange={handleChange}
              min={minUdlobsdato}
              required
            />
            {formErrors.udlobsdato && <div className="error">{formErrors.udlobsdato}</div>}
          </div>

          <div className="form-group mx-auto">
            <button type="submit" className="submit-button">
              Udlån
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Udlaanssystem;
