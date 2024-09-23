import React from 'react';

export default function AboutRouting2309() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">About Us</h2>
      <p className="text-center">We are a premier fashion design studio dedicated to creating unique, high-quality garments that inspire confidence and showcase individuality.</p>

      <div className="row">
        <div className="col-md-6">
          <h4>Our Mission</h4>
          <p>To provide exceptional, custom-designed fashion pieces that enhance the personal style of our clients. Our team is committed to crafting clothing that fits perfectly and looks stunning, no matter the occasion.</p>
        </div>
        <div className="col-md-6">
          <h4>Our Vision</h4>
          <p>We envision a world where fashion is a reflection of personality and creativity, and where everyone can access exclusive designs tailored to their individuality.</p>
        </div>
      </div>

      <div className="text-center mt-5">
        <img src="designer-team.jpg" alt="Our Team" className="img-fluid rounded shadow-sm" style={{ maxWidth: '100%', height: 'auto' }} />
        <p className="mt-3">Meet our talented team of designers, stylists, and artisans.</p>
      </div>
    </div>
  );
}
