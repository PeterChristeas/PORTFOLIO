// src/Contact.js
import React, { useState } from 'react';
import './Contact.css'; // Optional: create this file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add logic here to send the form data, e.g., via an API or email service
    console.log('Form submitted:', formData);

    // Set the submitted state to true to show a confirmation message
    setSubmitted(true);

    // Optionally, reset the form
    setFormData({ email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      {submitted ? (
        <p>Thank you for your message! I will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
