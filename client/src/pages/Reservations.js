import React, { useState } from 'react';
import './Reservations.css';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    specialRequests: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [availableTimes, setAvailableTimes] = useState([
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'
  ]);
  
  // Function to handle date change and update available times
  const handleDateChange = (e) => {
    const { value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      date: value
    }));
    
    // This would normally fetch available times from a backend API
    // For demo purposes, we'll just randomize available times
    const day = new Date(value).getDay();
    let times = [
      '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
      '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'
    ];
    
    // Weekend has more availability in the evening
    if (day === 5 || day === 6) {
      times.push('8:30 PM', '9:00 PM');
    } else {
      // Remove some random times for weekdays to simulate limited availability
      times = times.filter((_, index) => index % 2 === 0);
    }
    
    setAvailableTimes(times);
  };
  
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
      // const response = await fetch("http://localhost:5000/api/reservations", {
      const response = await fetch(`${API_BASE_URL}/api/reservations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        setFormSubmitted(true);
        console.log("Reservation submitted successfully!");
  
        // Clear form
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '2',
          occasion: '',
          specialRequests: ''
        });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to submit:", errorData.message || response.statusText);
        return;
      }        
  
        // Hide message after 5 sec
        setTimeout(() => setFormSubmitted(false), 5000);
      } else {
        console.error("Failed to submit reservation");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };
  
  

  // Get today's date for min date attribute
  const today = new Date().toISOString().split('T')[0];
  
  // Calculate max date (6 months from today)
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 6);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  return (
    <div className="reservation-page">
      <div className="reservation-header">
        <div className="container">
          <h1>Make a Reservation</h1>
          <p>Reserve your table to experience our delicious cuisine and exceptional service.</p>
        </div>
      </div>
      
      <section className="section reservation-section">
        <div className="container">
          <div className="row">
            <div className="col reservation-info">
              <h2 className="section-title">Reservation Information</h2>
              
              <div className="info-block">
                <h3>Hours of Operation</h3>
                <p><strong>Lunch:</strong> Monday - Friday, 11:00 AM - 2:30 PM</p>
                <p><strong>Dinner:</strong> Monday - Sunday, 5:00 PM - 10:00 PM</p>
                <p><strong>Weekend Brunch:</strong> Saturday - Sunday, 10:00 AM - 3:00 PM</p>
              </div>
              
              <div className="info-block">
                <h3>Reservation Policy</h3>
                <ul>
                  <li>Reservations can be made up to 6 months in advance</li>
                  <li>We hold your table for 15 minutes after the reservation time</li>
                  <li>For parties of 8 or more, please call us directly</li>
                  <li>Special requests are accommodated based on availability</li>
                </ul>
              </div>
              
              <div className="info-block">
                <h3>Need Assistance?</h3>
                <p>For special events, large parties, or other inquiries:</p>
                <p><strong>Call:</strong> (123) 456-7890</p>
                <p><strong>Email:</strong> reservations@foie-gras-restaurant.com</p>
              </div>
            </div>
            
            <div className="col">
              <div className="reservation-form-container">
                <h2>Book Your Table</h2>
                
                {formSubmitted && (
                  <div className="form-success">
                    <p>Thank you for your reservation! We've sent a confirmation to your email.</p>
                  </div>
                )}
                
                <form className="reservation-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-row">
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
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="date">Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleDateChange}
                        min={today}
                        max={maxDateStr}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="time">Time</label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        disabled={!formData.date}
                      >
                        <option value="">Select a time</option>
                        {availableTimes.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="guests">Number of Guests</label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="occasion">Occasion (Optional)</label>
                    <select
                      id="occasion"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                    >
                      <option value="">Select an occasion</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Business">Business Meal</option>
                      <option value="Date">Date Night</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="specialRequests">Special Requests (Optional)</label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      placeholder="Allergies, dietary restrictions, seating preferences, etc."
                      rows="3"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary">Book Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title centered">What Our Guests Say</h2>
          
          <div className="testimonials">
            <div className="testimonial">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>"The atmosphere was cozy and the service was impeccable. I'll definitely be coming back!"</p>
              <div className="author">- Maria S.</div>
            </div>
            
            <div className="testimonial">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>"Reserving online was so easy, and they accommodated all our special requests. The food was amazing too!"</p>
              <div className="author">- James P.</div>
            </div>
            
            <div className="testimonial">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <p>"Perfect spot for our anniversary dinner. They even surprised us with a special dessert!"</p>
              <div className="author">- Emily & Robert</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;