
import { createContext } from "react";

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import AboutRouting2309 from "./Components/AboutRouting2309";
import CoursesRouting2309 from "./Components/CoursesRouting2309";
import Servicesroute2309 from "./Components/Servicesroute2309";
import Collectionrouting2309 from "./Components/Collectionrouting2309";
import Maincontent2309 from "./Components/Maincontent2309";


export const context=createContext()

const App = () => {

  

    return (
        <>
        <BrowserRouter>
        <div className="container mt-4" >
        <Link to='/main' className="text-decoration-none mx-4"> Home</Link> 
        <Link to='/about' className="text-decoration-none mx-4">About</Link> 
        <Link to='/Courses' className="text-decoration-none mx-4">Courses</Link> 
        <Link to='/services' className="text-decoration-none mx-4" >services</Link>
        <Link to='/collections' className="text-decoration-none">Collection</Link>
        </div>
        
        <Routes>
            <Route path='/main' element={<Maincontent2309/>} />
            <Route path='/about' element={ <AboutRouting2309/>} />
            <Route path ='/courses' element={ <CoursesRouting2309/>} />
            <Route path='/services' element={<Servicesroute2309/>}/>
            <Route path='/collections' element={<Collectionrouting2309/>}/>
        </Routes>
        
        </BrowserRouter>
        
        </>
    );
};

export default App;

