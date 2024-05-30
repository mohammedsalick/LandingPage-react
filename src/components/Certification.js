import React from 'react';
import './Certification.css';
import certificateImg from './assets/img/Certificate.png';


const Certification = () => {
  return (
    <section id="certification" className="section slide-from-left">
      <div className="content">
        <div className="content-left">
          <img src={certificateImg} alt="Certificate" />
        </div>
        <div className="content-right">
          <h2>Get Certified in AI</h2>
          <p>Get certified in the latest AI technologies and methodologies. Our certifications are recognized worldwide.</p>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Certification;
