
import { createContext } from "react";
import "./style.css";

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AboutRouting2309 from "./Components/AboutRouting2309";
import CoursesRouting2309 from "./Components/CoursesRouting2309";
import Servicesroute2309 from "./Components/Servicesroute2309";
import Collectionrouting2309 from "./Components/Collectionrouting2309";
import Maincontent2309 from "./Components/Maincontent2309";
import Task2709mouritech from "./Components/Task2709mouritech";

export const context = createContext();

const App = () => {
    return (
      <Task2709mouritech/>
        // <BrowserRouter>
        //     <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        //         <button
        //             className="navbar-toggler"
        //             type="button"
        //             data-bs-toggle="collapse"
        //             data-bs-target="#navbarSupportedContent"
        //             aria-controls="navbarSupportedContent"
        //             aria-expanded="false"
        //             aria-label="Toggle navigation"
        //         >
        //             <span className="navbar-toggler-icon"></span>
        //         </button>

        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav mr-auto">
        //                 <li className="nav-item active">
        //                     <Link to='/main' className="text-decoration-none mx-4 col">Home</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to='/about' className="text-decoration-none mx-4 col">About</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to='/courses' className="text-decoration-none mx-4 col">Courses</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to='/services' className="text-decoration-none mx-4 col">Services</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to='/collections' className="text-decoration-none col">Collection</Link>
        //                 </li>
        //                 <li className="nav-item dropdown">
        //                     <Link
        //                         className="nav-link dropdown-toggle"
        //                         to="#"
        //                         id="navbarDropdown"
        //                         role="button"
        //                         data-bs-toggle="dropdown"
        //                         aria-expanded="false"
        //                     >
        //                         Dropdown
        //                     </Link>
        //                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        //                         <li><Link className="dropdown-item" to="/courses">Action</Link></li>
        //                         <li><Link className="dropdown-item" to="/">Another action</Link></li>
        //                         <li><hr className="dropdown-divider" /></li>
        //                         <li><Link className="dropdown-item" to="/">Something else here</Link></li>
        //                     </ul>
        //                 </li>
        //             </ul>
        //             <form className="form-inline my-2 my-lg-0 d-flex justify-content-end">
        //                 <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        //                 <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        //             </form>
        //         </div>
        //     </nav>
        //     <div className="container mt-4">
        //         <div className="row">
        //             <div className="col">
        //                 <Routes>
        //                     <Route path='/main' element={<Maincontent2309 />} />
        //                     <Route path='/about' element={<AboutRouting2309 />} />
        //                     <Route path='/courses' element={<CoursesRouting2309 />} />
        //                     <Route path='/services' element={<Servicesroute2309 />} />
        //                     <Route path='/collections' element={<Collectionrouting2309 />} />
        //                 </Routes>
        //             </div>
        //         </div>
        //     </div>
        // </BrowserRouter>
    );
};

export default App;
