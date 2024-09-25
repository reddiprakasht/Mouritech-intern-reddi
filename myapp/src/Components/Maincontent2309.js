import React from 'react';
import { Link } from 'react-router-dom';

export default function Maincontent2309() {
  return (
    <div className="my-5">
      <div className="jumbotron text-center bg-light py-5">
        <h4 className='text-start'>LUMINALOOM</h4>
        <hr className='' />
        <h1 className="display-1"><strong>DREAMSCAPE</strong></h1>
        <hr />
        <div className='mb-5'>
          <div className='row'>
            <div className='col text-start'>
              <p className=''>FASHION MARKET</p>

            </div>
            <div className='col text-center'>
              <p>MINIMAL FASHION TIMELESS</p>

            </div>
            <div className='col text-end'>
              <p>QUALITY ITEMS</p>

            </div>
          </div>
        </div>
        <div className=''>
          <div className='row'>
            <div className='col-3 text-start bg-danger'>
              <p className='text-light pt-3'>TIMELESS /</p>
            </div>
            <div className='col-5 text-start fs-6'>
              <p> We're dedicated to bring you A Curated Collection Of The Finest Fashion Peices That Blend Contempory Flair With Timeless Classic </p>
            </div>
          </div>
          <div className='row justify-content-end ml-auto'>
          <p className="lead text=end fs-6 col-5">
          Discover innovative fashion designs, custom-made garments, and exclusive collections that define personal style and elegance.
        </p>
          </div>
        </div>
        
        <hr className="my-4" />
        <p className='p-5'>
          Our team of skilled designers brings your fashion vision to life, combining creativity with technical expertise.
          From runway-ready pieces to everyday wear, we create clothing that expresses individuality and confidence.
        </p>
        <Link to='/services' className="text-decoration-none mx-4 border border-danger border-3 rounded-pill px-5 py-2" >services</Link>
      </div>

      <div className="row text-center">
        <div className="col-md-4 border border-3 border-top-0 border-start-0 border-bottom-0 border-danger">
          <h3>Custom Designs</h3>
          <p>Tailored outfits for every occasion, crafted with precision and attention to detail.</p>
        </div>
        <div className="col-md-4">
          <h3>Exclusive Collections</h3>
          <p>Explore our seasonal collections and limited-edition pieces that set trends in the fashion world.</p>
        </div>
        <div className="col-md-4 border border-danger border-3 border-end-0 border-top-0 border-bottom-0">
          <h3 className='text-danger'>Personal Styling</h3>
          <p>Receive expert advice on how to elevate your wardrobe and stay ahead of the latest fashion trends.</p>
        </div>
      </div>
    </div>
  );
}
