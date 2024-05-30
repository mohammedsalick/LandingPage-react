import React from 'react';
import './About.css';
import laptopImg from './assets/laptop.png';
import settingImg from './assets/setting.png';
import collaborativeGroupImg from './assets/collaborative-group.png';
import paymentImg from './assets/payment.png';


const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="services">
          <div className="services-box">
            <div className="services-card">
              <img src={laptopImg} alt="Laptop" />
              <h3>6 weeks entirely online, excluding orientation</h3>
              <p>Efficiency at your doorstep</p>
            </div>
            <div className="services-card">
              <img src={settingImg} alt="Setting" />
              <h3>Self-paced weekly modules, 7–10 hours per week</h3>
              <p>Call Us anytime</p>
            </div>
            <div className="services-card">
              <img src={collaborativeGroupImg} alt="Collaborative Group" />
              <h3>Learn alongside a global cohort of like-minded professionals</h3>
              <p>Get Best Offers</p>
            </div>
            <div className="services-card">
              <img src={paymentImg} alt="Payment" />
              <h3>Choose from flexible payment options</h3>
              <p>Be Frank to search</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
