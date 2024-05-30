import React from 'react';
import './Home.css';
import aiAndBlockImg from './assets/img/AIandBlock.png';


const Home = () => {
  return (
    <section id="home" className="section">
      <div className="content">
        <div className="content-left">
          <img src={aiAndBlockImg} alt="AI and Blockchain" className="image slide-from-left" />
        </div>
        <div className="content-right slide-from-right">
          <p>Welcome to <span className="highlight">AI CERTs</span>. Explore the world of AI and Blockchain Technology and stay ahead in your career.</p>
          <p className="animated-text">Learn, Innovate, Lead</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
