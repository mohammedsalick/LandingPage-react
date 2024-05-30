import React from 'react';
import './Trainers.css';
import trainerImg from './assets/img/Trainer.png';


const Trainers = () => {
  return (
    <section id="trainers" className="section slide-from-left">
      <div className="container">
        <div className="content">
          <div className="content-left">
            <img src={trainerImg} alt="Trainer" />
          </div>
          <div className="content-right">
            <p>Our trainers are industry experts with years of experience in AI. Learn from the best in the field.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;
