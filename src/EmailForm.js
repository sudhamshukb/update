import React from 'react';
import './EmailForm.css';

function EmailForm() {
  return (
    <div className="form-container">
      <form className="email-form">
        <div className="form-field">
          <label className="form-label">First Name:</label>
          <input type="text" placeholder="First Name" />
        </div>
        <div className="form-field">
          <label className="form-label">Last Name:</label>
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="form-field">
          <label className="form-label">Email:</label>
          <input type="email" placeholder="Email" />
        </div>
        <div className="form-field">
          <label className="form-label">Message:</label>
          <textarea placeholder="Message" />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default EmailForm;