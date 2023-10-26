import React, { useState } from 'react';
import axios from 'axios';
import '../css/OpretBruger.css';

const OpretBruger = () => {
  const [formData, setFormData] = useState({
    navn: '',
    email: '',
    brugerGruppeNavn: '',
    postNrByNavn: '',
    stamklasseNavn: '',
    cprNummer: '',
    adresse: '',
    adgangskode: '',
    elevNummer: ''
  });

  const [formErrors] = useState({});

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
    if (formData.navn.trim() === '') {
      errors.navn = 'Navn er påkrævet';
    }
    if (formData.email.trim() === '') {
      errors.email = 'Email er påkrævet';
    }
    if (formData.brugerGruppeNavn.trim() === '') {
      errors.brugerGruppeNavn = 'Bruger Gruppe Navn er påkrævet';
    }
    if (formData.postNrByNavn.trim() === '') {
      errors.postNrByNavn = 'Post Nr By Navn er påkrævet';
    }
    if (formData.stamKlasseNavn.trim() === '') {
      errors.stamKlasseNavn = 'Stam Klasse Navn er påkrævet';
    }
    if (formData.cprNummer.trim() === '') {
      errors.cprNummer = 'CPR Nummer er påkrævet';
    }
    if (formData.adresse.trim() === '') {
      errors.adresse = 'Adresse er påkrævet';
    }
    if (formData.adgangskode.trim() === '') {
      errors.adgangskode = 'Adgangskode er påkrævet';
    }
    if (formData.elevNummer.trim() === '') {
      errors.elevNummer = 'Elev Nummer er påkrævet';
    }

    if (Object.keys(errors).length === 0) {
      // Log the data before making the POST request
      console.log('Data being posted:', formData);
      axios.post('https://gorilla-informed-asp.ngrok-free.app/Bruger/create', formData)
        .then(response => {
          alert('Du har oprettet en ny bruger!');
          console.log('Response Data:', response.data);
        })
        .catch(error => {
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
    }
  }

  return (
    <div>
      <h2 className="form-title">Opret Bruger</h2>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Navn:</label>
            <input
              type="text"
              name="navn"
              value={formData.navn}
              onChange={handleChange}
              required
            />
            {formErrors.navn && <div className="error">{formErrors.navn}</div>}
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {formErrors.email && <div className="error">{formErrors.email}</div>}
          </div>

          <div className="form-group">
            <label>Bruger Gruppe Navn:</label>
            <input
              type="text"
              name="brugerGruppeNavn"
              value={formData.brugerGruppeNavn}
              onChange={handleChange}
              required
            />
            {formErrors.brugerGruppeNavn && <div className="error">{formErrors.brugerGruppeNavn}</div>}
          </div>

          <div className="form-group">
            <label>Post Nr By Navn:</label>
            <input
              type="text"
              name="postNrByNavn"
              value={formData.postNrByNavn}
              onChange={handleChange}
              required
            />
            {formErrors.postNrByNavn && <div className="error">{formErrors.postNrByNavn}</div>}
          </div>

          <div className="form-group">
            <label>Stam Klasse Navn:</label>
            <input
              type="text"
              name="stamKlasseNavn"
              value={formData.stamKlasseNavn}
              onChange={handleChange}
              required
            />
            {formErrors.stamKlasseNavn && <div className="error">{formErrors.stamKlasseNavn}</div>}
          </div>

          <div className="form-group">
            <label>CPR Nummer:</label>
            <input
              type="text"
              name="cprNummer"
              value={formData.cprNummer}
              onChange={handleChange}
              required
            />
            {formErrors.cprNummer && <div className="error">{formErrors.cprNummer}</div>}
          </div>

          <div className="form-group">
            <label>Adresse:</label>
            <input
              type="text"
              name="adresse"
              value={formData.adresse}
              onChange={handleChange}
              required
            />
            {formErrors.adresse && <div className="error">{formErrors.adresse}</div>}
          </div>

          <div className="form-group">
            <label>Adgangskode:</label>
            <input
              type="text"
              name="adgangskode"
              value={formData.adgangskode}
              onChange={handleChange}
              required
            />
            {formErrors.adgangskode && <div className="error">{formErrors.adgangskode}</div>}
          </div>

          <div className="form-group">
            <label>Elev Nummer:</label>
            <input
              type="text"
              name="elevNummer"
              value={formData.elevNummer}
              onChange={handleChange}
              required
            />
            {formErrors.elevNummer && <div className="error">{formErrors.elevNummer}</div>}
          </div>

          <div className="form-group mx-auto">
            <button type="submit" className="submit-button">
              Opret Bruger
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OpretBruger;
