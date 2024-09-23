import React from 'react';

export default function Collectionrouting2309() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Our Latest Collections</h1>
      <p className="text-center">Discover our exclusive collections designed to redefine fashion:</p>

      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src="collection1.jpg" className="card-img-top" alt="Collection 1" />
            <div className="card-body">
              <h5 className="card-title">Spring/Summer Collection</h5>
              <p className="card-text">Bright and breezy outfits perfect for the warm seasons.</p>
              <a href="#" className="btn btn-primary">View Collection</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src="collection2.jpg" className="card-img-top" alt="Collection 2" />
            <div className="card-body">
              <h5 className="card-title">Autumn/Winter Collection</h5>
              <p className="card-text">Elegant and cozy designs to keep you stylish in colder months.</p>
              <a href="#" className="btn btn-primary">View Collection</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src="collection3.jpg" className="card-img-top" alt="Collection 3" />
            <div className="card-body">
              <h5 className="card-title">Exclusive Runway Collection</h5>
              <p className="card-text">Limited edition designs straight from the runway.</p>
              <a href="#" className="btn btn-primary">View Collection</a>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mt-4">
        Experience the finest materials and craftsmanship in every collection. Elevate your wardrobe with our designer pieces.
      </p>
    </div>
  );
}
