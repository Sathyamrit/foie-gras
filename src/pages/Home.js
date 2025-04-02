import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Culinary Excellence in Every Dish</h1>
          <p className="hero-subtitle">Experience the artistry of fine dining in an elegant atmosphere</p>
          <div className="hero-buttons">
            <Link to="/reservations" className="btn btn-primary">Book a Table</Link>
            <Link to="/menu" className="btn btn-outline">View Menu</Link>
          </div>
        </div>
      </section>

      {/* About Intro Section */}
      <section className="section about-intro">
        <div className="container">
          <div className="row">
            <div className="col about-text">
              <h2>Welcome to Foie-Gras</h2>
              <p className="tagline">Where Passion Meets Flavor</p>
              <p>
                Nestled in the heart of the city, Foie-Gras offers an extraordinary dining experience 
                that celebrates the essence of modern cuisine with a touch of tradition. Our culinary 
                team creates memorable dishes using only the finest seasonal ingredients.
              </p>
              <Link to="/about" className="btn btn-outline">Our Story</Link>
            </div>
            <div className="col about-image">
              <div className="img-container">
                <img src="/api/placeholder/500/600" alt="Restaurant interior" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="section featured-menu">
        <div className="container">
          <h2 className="section-title">Featured Menu</h2>
          <div className="menu-categories">
            <div className="menu-category">
              <div className="category-image">
                <img src="/api/placeholder/300/300" alt="Starters" />
              </div>
              <h3>Starters</h3>
              <p>Begin your culinary journey with our exquisite appetizers</p>
            </div>
            <div className="menu-category">
              <div className="category-image">
                <img src="/api/placeholder/300/300" alt="Main Courses" />
              </div>
              <h3>Main Courses</h3>
              <p>Savor our signature dishes crafted with passion</p>
            </div>
            <div className="menu-category">
              <div className="category-image">
                <img src="/api/placeholder/300/300" alt="Desserts" />
              </div>
              <h3>Desserts</h3>
              <p>Complete your meal with our delectable sweet creations</p>
            </div>
          </div>
          <div className="menu-cta">
            <Link to="/menu" className="btn btn-primary">Full Menu</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials">
        <div className="container">
          <h2 className="section-title">What Our Guests Say</h2>
          <div className="testimonials-slider">
            <div className="testimonial">
              <div className="quote">"An unforgettable dining experience. The attention to detail and flavors are remarkable."</div>
              <div className="author">— Michael Thompson</div>
              <div className="stars">★★★★★</div>
            </div>
            <div className="testimonial">
              <div className="quote">"The chef's tasting menu was a revelation. Every dish told a story and delighted our senses."</div>
              <div className="author">— Sarah Johnson</div>
              <div className="stars">★★★★★</div>
            </div>
            <div className="testimonial">
              <div className="quote">"Impeccable service and a stunning atmosphere complement the exquisite cuisine perfectly."</div>
              <div className="author">— David Wilson</div>
              <div className="stars">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA Section */}
      <section className="reservation-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Reserve Your Table Today</h2>
            <p>Experience the perfect blend of exceptional cuisine, atmosphere, and service</p>
            <Link to="/reservations" className="btn btn-primary">Book Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;