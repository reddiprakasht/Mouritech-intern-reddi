import React from 'react';

export default function Collectionrouting2309() {
  return (
    <div className="my-5 bgcollections">
      <h1 className="text-center mb-4">Our Latest Collections</h1>
      <p className="text-center">Discover our exclusive collections designed to redefine fashion:</p>

      <div className="row">
        <div className="col-md-4 bgcol1">
          <div className="card mb-4 shadow-sm bg-transparent border border-0 shadow-none">
            <img src="https://img.freepik.com/free-photo/portrait-beautiful-stylish-young-woman_158538-4020.jpg?t=st=1727167099~exp=1727170699~hmac=76ecb03a42ad6db698898148f2d4666f37eb6dbc3a333786e14cefdc32352f9c&w=740" className="card-img-top" alt="Collection 1" />
            <div className="card-body">
              <h5 className="card-title">Spring/Summer Collection</h5>
              <p className="card-text">Bright and breezy outfits perfect for the warm seasons.</p>
              <a href="#" className="btn btn-primary">View Collection</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 bgcol2">
          <div className="card mb-4 shadow-sm bg-transparent border border-0 shadow-none">
            <img src="https://img.freepik.com/free-photo/young-woman-posing-with-big-frame_1149-1272.jpg?t=st=1727166951~exp=1727170551~hmac=535cebafe7d8d52942c47192e1372a58dba3d2e018aa426e3c3a56e8418432f0&w=360" className="card-img-top" alt="Collection 2" />
            <div className="card-body">
              <h5 className="card-title">Autumn/Winter Collection</h5>
              <p className="card-text">Elegant and cozy designs to keep you stylish in colder months.</p>
              <a href="#" className="btn btn-primary">View Collection</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 bgcol3">
          <div className="card mb-4 shadow-sm bg-transparent border border-0 shadow-none">
            <img src="https://img.freepik.com/free-photo/beautiful-smiling-hipster-brunette-woman-model-stylish-pink-overcoat-walking-full-length_158538-12249.jpg?t=st=1727167025~exp=1727170625~hmac=5e70eed712b15f7fae8ec203182c7fb9c27daa22b4e4c03a80a31a9217da8757&w=740" className="card-img-top" alt="Collection 3" />
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
