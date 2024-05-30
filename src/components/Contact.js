import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact Us</h2>
        <p>Feel free to reach out to us if you have any questions or inquiries.</p>
        <div className="contact-form">
          <form action="#" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
