import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setFormSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
  
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      } else {
        const errorData = await response.json();
        console.error('Server error:', errorData);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };
  
  
  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Reach out with any questions or to make a reservation.</p>
        </div>
      </div>
      
      <section className="section contact-info">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="contact-details">
                <h2 className="section-title">Get In Touch</h2>
                
                <div className="contact-item">
                  <div className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="content">
                    <h3>Visit Us</h3>
                    <p>123 Gourmet Street, Culinary District</p>
                    <p>City, State 12345</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="content">
                    <h3>Call Us</h3>
                    <p>Reservations: (123) 456-7890</p>
                    <p>General Inquiries: (123) 456-7891</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="content">
                    <h3>Email Us</h3>
                    <p>reservations@foie-grasrestaurant.com</p>
                    <p>info@foie-grasrestaurant.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="content">
                    <h3>Hours</h3>
                    <p>Monday - Friday: 12:00 PM - 10:00 PM</p>
                    <p>Saturday: 11:00 AM - 11:00 PM</p>
                    <p>Sunday: 11:00 AM - 9:00 PM</p>
                  </div>
                </div>
                
                <div className="social-links">
                  <h3>Follow Us</h3>
                  <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col">
              <div className="contact-form-container">
                <h2>Send us a Message</h2>
                
                {formSubmitted && (
                  <div className="form-success">
                    <p>Thank you for your message! We'll get back to you soon.</p>
                  </div>
                )}
                
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section map-section">
        <div className="container">
          <h2 className="section-title">Find Us</h2>
          <div className="map-container">
            {/* Replace with your Google Maps embed code or a map component */}
            <div className="map-placeholder">
              <p>Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;