  import React from 'react';
  import './Partners.css';
  import partner1Img from './assets/img/partner-1.png';
  import partner2Img from './assets/img/partner-2.png';
  import partner3Img from './assets/img/partner-3.png';
  import partner4Img from './assets/img/partner-4.png';

  const Partners = () => {
    return (
      <section className="authorized-partners" id="partners">
        <div className="container">
          <h2 className="heading"><span>AI CERTs Partners</span></h2>
          <div className="partners-box">
            {[partner1Img, partner2Img, partner3Img, partner4Img].map((img, index) => (
              <div className="partners-card" key={index}>
                <div className="partner-item">
                  <div className="box">
                    <img src={img} alt={`Partner ${index + 1}`} />
                    <h3>Partner {index + 1} Name</h3>
                    <p>Description of Partner {index + 1} and their collaboration with AI CERTs.</p>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Partners;
