import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <div className="container">
          <h1>Our Story</h1>
          <p>Passion, craftsmanship, and a dedication to culinary excellence</p>
        </div>
      </div>
      
      <section className="section our-story">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="section-title">The Beginning</h2>
              <p>
                Founded in 2015, Foie-Gras was born from a simple yet powerful vision: to create an 
                exceptional dining experience that honors traditions while embracing innovation. 
                Chef Maria Rossi, inspired by her Italian heritage and years of culinary training 
                across Europe, wanted to bring a new perspective to fine dining.
              </p>
              <p>
                What started as a small bistro with just ten tables has evolved into one of the 
                city's most celebrated restaurants, earning recognition for our commitment to 
                quality, creativity, and the dining experience as a whole.
              </p>
            </div>
            <div className="col">
              <div className="about-image">
                <img src="/api/placeholder/500/600" alt="Restaurant early days" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section our-philosophy">
        <div className="container">
          <h2 className="section-title">Our Philosophy</h2>
          <div className="philosophy-cards">
            <div className="philosophy-card">
              <div className="icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Seasonal Focus</h3>
              <p>
                We believe in letting nature guide our menu. By focusing on seasonal ingredients 
                at their peak, we create dishes that highlight the natural flavors and nutrients 
                of each component.
              </p>
            </div>
            <div className="philosophy-card">
              <div className="icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Local Partnerships</h3>
              <p>
                We work closely with local farmers, fishers, and producers who share our commitment 
                to sustainability and ethical practices. These relationships ensure we serve only 
                the finest ingredients while supporting our community.
              </p>
            </div>
            <div className="philosophy-card">
              <div className="icon">
                <i className="fas fa-utensils"></i>
              </div>
              <h3>Culinary Artistry</h3>
              <p>
                Each dish is carefully crafted to balance flavor, texture, and presentation. 
                We blend classic techniques with modern approaches to create memorable culinary 
                experiences that engage all the senses.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section team">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <div className="member-image">
                <img src="/api/placeholder/400/400" alt="Chef Maria Rossi" />
              </div>
              <h3>Maria Rossi</h3>
              <p className="member-title">Executive Chef & Founder</p>
              <p className="member-bio">
                With over 20 years of experience in renowned kitchens across Italy and France, 
                Chef Maria brings a wealth of knowledge and passion to Foie-Gras. Her innovative 
                approach to classic cuisine has earned her numerous accolades.
              </p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/api/placeholder/400/400" alt="Antonio Bianchi" />
              </div>
              <h3>Antonio Bianchi</h3>
              <p className="member-title">Head Chef</p>
              <p className="member-bio">
                Antonio's precise techniques and creative flair have been instrumental in 
                crafting our signature dishes. His dedication to quality and consistency 
                ensures an exceptional dining experience every time.
              </p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/api/placeholder/400/400" alt="Sophia Chen" />
              </div>
              <h3>Sophia Chen</h3>
              <p className="member-title">Pastry Chef</p>
              <p className="member-bio">
                Sophia's exquisite pastries and desserts provide the perfect finale to the 
                Foie-Gras experience. Trained in Paris, her creations blend classic techniques 
                with unexpected flavors and artistic presentation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section achievements">
        <div className="container">
          <h2 className="section-title">Achievements & Recognition</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="year">2023</div>
              <div className="content">
                <h3>Named in "Top 50 Restaurants"</h3>
                <p>Recognized for culinary excellence and innovative dining experiences</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="year">2022</div>
              <div className="content">
                <h3>Awarded Michelin Star</h3>
                <p>Honored for consistent quality and exceptional cuisine</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="year">2020</div>
              <div className="content">
                <h3>"Best Fine Dining" - City Culinary Awards</h3>
                <p>Celebrated for outstanding service and culinary artistry</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="year">2018</div>
              <div className="content">
                <h3>"Rising Star Chef" - National Gastronomy Association</h3>
                <p>Chef Maria recognized for innovative contributions to modern cuisine</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;