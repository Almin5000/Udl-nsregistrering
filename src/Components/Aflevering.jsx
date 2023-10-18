import React, { useState } from 'react';
import '../css/Aflevering.css';

const Aflevering = () => {
  const [formData, setFormData] = useState({
    elevnummer: '',
    computernummer: '',
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
    if (formData.elevnummer.trim() === '') {
      errors.elevnummer = 'Elevnummer is required';
    }
    if (formData.computernummer.trim() === '') {
      errors.computernummer = 'Computernummer is required';
    }

    if (Object.keys(errors).length === 0) {
      alert('Afleveret!');
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div>
      <h2 className="form-title">Aflevering</h2>
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

          <div className="form-group mx-auto">
            <button type="submit" className="submit-button">
              Aflever lån
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Aflevering;