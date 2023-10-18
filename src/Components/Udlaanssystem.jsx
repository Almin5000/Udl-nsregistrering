import React, { useState } from 'react';
import '../css/Udlaanssystem.css';

const Udlaanssystem = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minUdlobsdato = tomorrow.toISOString().split('T')[0];


  const [formData, setFormData] = useState({
    elevnummer: '',
    computernummer: '',
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
    const numRegex = /^[0-9\b]+$/;
    if (!formData.elevnummer.match(numRegex)) {
      errors.elevnummer = 'Elevnummer bør kun indeholde tal';
    }
    if (formData.elevnummer.trim() === '') {
      errors.elevnummer = 'Elevnummer er påkrævet';
    }
    if (formData.computernummer.trim() === '') {
      errors.computernummer = 'Computernummer er påkrævet';
    }
    if (formData.udlaansdato.trim() === '') {
      errors.udlaansdato = 'Udlånsdato er påkrævet';
    }
    if (formData.udlobsdato.trim() === '') {
      errors.udlobsdato = 'Udløbsdato er påkrævet';
    }

    if (Object.keys(errors).length === 0) {
      alert('Udlånt!');
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
              name="elevnummer"
              value={formData.elevnummer}
              onChange={handleChange}
              required
            />
            {formErrors.elevnummer && <div className="error">{formErrors.elevnummer}</div>}
          </div>

          <div className="form-group">
            <label>Computernummer:</label>
            <input
              type="text"
              name="computernummer"
              value={formData.computernummer}
              onChange={handleChange}
              required
            />
            {formErrors.computernummer && <div className="error">{formErrors.computernummer}</div>}
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
