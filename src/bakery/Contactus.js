import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <h3>Phone Number:</h3>
        <p>03219843118</p>
      </div>
      <div className="contact-info">
        <h3>Email Address:</h3>
        <p>sweetbake23@hotmail.com</p>
      </div>
      <div className="contact-info">
        <h3>Location:</h3>
        <p>Jadoon plaza phase 2, Abbottabad,Pakistan</p>
      </div>
      <div className="suggestions-complaints">
        <h3>Suggestions/Complaints:</h3>
        <textarea rows="5" cols="50" placeholder="Enter your message here"></textarea>
      </div>
      <button type="submit">Submit</button>
    </div>
  );
};

export default ContactUs;
