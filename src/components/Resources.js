import React from 'react';
import './Resources.css';

const Resources = () => {
  return (
    <section id="resources" className="section slide-from-right">
      <div className="container">
        <h2>Resources</h2>
        <p>Access a wide range of resources to help you in your AI certification journey. From study materials to practice tests.</p>
        <div className="video-container">
          <iframe title="AI Certification Resources" width="560" height="315" src="https://www.youtube.com/embed/t8m513bAvgQ" frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
    </section>
  );
};

export default Resources;
