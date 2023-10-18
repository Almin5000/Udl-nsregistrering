import React, { useState } from 'react';
import '../css/Registrering.css';

const Registrering = () => {
  const [formData, setFormData] = useState({
    fabrikat: '',
    model: '',
    computernummer: '',
    mus: '',
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
    // Basic form validation
    const errors = {};
    if (formData.fabrikat.trim() === '') {
      errors.fabrikat = 'Fabrikat is required';
    }
    if (formData.model.trim() === '') {
      errors.model = 'Model is required';
    }
    if (formData.computernummer.trim() === '') {
      errors.computernummer = 'Computernummer is required';
    }
    if (formData.mus.trim() === '') {
      errors.mus = 'Mus is required';
    }

    if (Object.keys(errors).length === 0) {
      // Form is valid, you can submit the data or perform any other action here
      alert('Form submitted successfully');
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
            <label>Computernummer:</label>
            <input
              type="text"
              name="computernummer"
              value={formData.computernummer}
              onChange={handleChange}
              required
            />
            {formErrors.computernummer && (
              <div className="error">{formErrors.computernummer}</div>
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
