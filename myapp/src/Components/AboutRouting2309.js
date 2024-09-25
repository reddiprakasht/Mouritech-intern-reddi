import React from 'react';

export default function AboutRouting2309() {
  return (
    <div className="my-5 bgcolor">
      <h2 className="text-center mb-4 text-danger">About Us</h2>
      <p className="text-center">We are a premier fashion design studio dedicated to creating unique, high-quality garments that inspire confidence and showcase individuality.</p>

      <div className="row">
        <div className="col-md-6">
          <h4 className='head1'>Our Mission</h4>
          <p>To provide exceptional, custom-designed fashion pieces that enhance the personal style of our clients. Our team is committed to crafting clothing that fits perfectly and looks stunning, no matter the occasion.</p>
        </div>
        <div className="col-md-6">
          <h4 className='head1'>Our Vision</h4>
          <p>We envision a world where fashion is a reflection of personality and creativity, and where everyone can access exclusive designs tailored to their individuality.</p>
        </div>
      </div>

      <div className="text-center mt-5">
        <img src="https://img.freepik.com/free-photo/group-multiethnic-designers-brainstorming_53876-64986.jpg?t=st=1727152008~exp=1727155608~hmac=89eaad3ced035d7cede69136e8fe771fbbcdba4b381dfa18f1594d218de4b7be&w=740" alt="Our Team" className="img-fluid rounded shadow-sm" style={{ maxWidth: '100%', height: 'auto' }} />
        <p className="mt-3">Meet our talented team of designers, stylists, and artisans.</p>
      </div>
    </div>
  );
}
