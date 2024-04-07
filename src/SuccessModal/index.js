import React from 'react';

import './index.css'

const SuccessModal = ({ closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="success-container">
            <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
            />
            <h2>Success!</h2>
        </div>
        <p>Your request for a callback has been submitted successfully.</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default SuccessModal;
