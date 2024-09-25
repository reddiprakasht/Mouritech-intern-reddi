
import { createContext } from "react";
import "./style.css"

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AboutRouting2309 from "./Components/AboutRouting2309";
import CoursesRouting2309 from "./Components/CoursesRouting2309";
import Servicesroute2309 from "./Components/Servicesroute2309";
import Collectionrouting2309 from "./Components/Collectionrouting2309";
import Maincontent2309 from "./Components/Maincontent2309";


export const context = createContext()

const App = () => {



    return (
        <>
            <BrowserRouter>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
                <div className="container mt-4" >
                    <div className="row">
                        <Link to='/main' className="text-decoration-none mx-4 col"> Home</Link>
                        <Link to='/about' className="text-decoration-none mx-4 col">About</Link>
                        <Link to='/Courses' className="text-decoration-none mx-4 col">Courses</Link>
                        <Link to='/services' className="text-decoration-none mx-4 col" >services</Link>
                        <Link to='/collections' className="text-decoration-none col">Collection</Link>
                    </div>




                    <div className="row">
                        <div className="col">
                            <Routes>
                                <Route path='/main' element={<Maincontent2309 />} />
                                <Route path='/about' element={<AboutRouting2309 />} />
                                <Route path='/courses' element={<CoursesRouting2309 />} />
                                <Route path='/services' element={<Servicesroute2309 />} />
                                <Route path='/collections' element={<Collectionrouting2309 />} />
                            </Routes>
                        </div>
                    </div>


                </div>

            </BrowserRouter>

        </>
    );
};

export default App;

