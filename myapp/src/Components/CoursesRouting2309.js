import React from 'react';

export default function CoursesRouting2309() {
  return (
    <div className=" my-5 bgccourse">
      <h1 className="text-center mb-4">Our Fashion Design Courses</h1>
      <p className="text-center text-light">Learn from the best with our comprehensive fashion design courses tailored for all skill levels:</p>

      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Introduction to Fashion Design</h5>
              <p className="card-text">A beginner-friendly course covering the fundamentals of fashion design, including sketching, fabrics, and design concepts.</p>
              <a href="#" className="btn btn-dark">Enroll Now</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Advanced Garment Construction</h5>
              <p className="card-text">Take your skills to the next level with in-depth lessons on sewing techniques, pattern making, and fabric manipulation.</p>
              <a href="#" className="btn btn-dark">Enroll Now</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Fashion Illustration and CAD</h5>
              <p className="card-text">Master the art of fashion illustration and learn how to use computer-aided design (CAD) software for creating fashion sketches.</p>
              <a href="#" className="btn btn-dark">Enroll Now</a>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-light py-5">
        Explore these and other exciting courses to build a career in fashion design. Join today to unlock your creativity!
      </p>
    </div>
  );
}
