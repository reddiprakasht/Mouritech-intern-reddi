import React from 'react'


import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function Routing() {
  return (
    <div>
                <h1>
            Routing the pages
        </h1>

        <BrowserRouter>
        <Routes>
            <Route path='/' element={<h1> main Root</h1>} />
            <Route path='/about' element={<h2> About us page</h2>} />
            <Route path ='/courses' element={<h3>course page</h3>} />
        </Routes>
        
        </BrowserRouter>
      
    </div>
  )
}
