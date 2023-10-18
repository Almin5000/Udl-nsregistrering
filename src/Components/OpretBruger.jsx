import React, { useState } from 'react';
import '../css/OpretBruger.css';

const OpretBruger = () => {
    const [formData, setFormData] = useState({
      elevnummer: '',
      navn: '',
      adresse: '',
      postnrBy: '',
      cprNr: '',
      email: '',
      stamklasse: '',
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
        if (formData.elevnummer.trim() === '') {
            errors.elevnummer = 'Elevnummer er påkrævet';
          } else if (!/^\d+$/.test(formData.elevnummer)) {
            errors.elevnummer = 'Elevnummer bør kun indeholde tal';
          }
        if (formData.navn.trim() === '') {
          errors.navn = 'Navn er påkrævet';
        } else if (!/^[a-zA-Z\s]*$/.test(formData.navn)) {
          errors.navn = 'Navn bør kun indeholde bogstaver og mellemrum';
        }
        if (formData.adresse.trim() === '') {
          errors.adresse = 'Adresse er påkrævet';
        }
        if (formData.postnrBy.trim() === '') {
          errors.postnrBy = 'Postnr. og by er påkrævet';
        }
        if (formData.cprNr.trim() === '') {
          errors.cprNr = 'Cpr-nr. er påkrævet';
        } else if (!/^[\d-]+$/.test(formData.cprNr)) {
          errors.cprNr = 'Cpr-nr. bør kun indeholde tal og "-"';
        }
        if (formData.email.trim() === '') {
          errors.email = 'Email er påkrævet';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
          errors.email = 'Ugyldigt e-mailformat';
        }
        if (formData.stamklasse.trim() === '') {
          errors.stamklasse = 'Stamklasse er påkrævet';
        }
    
        if (Object.keys(errors).length === 0) {
          alert('Du oprettet en ny bruger!');
        } else {
          setFormErrors(errors);
        }
      };
  

  return (
    <div>
      <h2 className="form-title">Opret Bruger</h2>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Elevnummer:</label>
            <input
              type="text"
              name="elevnummer"
              value={formData.elevnummer}
              onChange={handleChange}
              required
            />
            {formErrors.elevnummer && <div className="error">{formErrors.elevnummer}</div>}
          </div>

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
            <label>Postnr. og by:</label>
            <input
              type="text"
              name="postnrBy"
              value={formData.postnrBy}
              onChange={handleChange}
              required
            />
            {formErrors.postnrBy && <div className="error">{formErrors.postnrBy}</div>}
          </div>

          <div className="form-group">
            <label>Cpr-nr.:</label>
            <input
              type="text"
              name="cprNr"
              value={formData.cprNr}
              onChange={handleChange}
              required
            />
            {formErrors.cprNr && <div className="error">{formErrors.cprNr}</div>}
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
            <label>Stamklasse:</label>
            <input
              type="text"
              name="stamklasse"
              value={formData.stamklasse}
              onChange={handleChange}
              required
            />
            {formErrors.stamklasse && <div className="error">{formErrors.stamklasse}</div>}
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
