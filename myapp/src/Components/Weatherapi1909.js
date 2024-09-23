import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Weatherapi1909() {
    const [state, setState]=useState('')

    useEffect(()=>{
        fetch('https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=e4267305efe1b170c86abbf770694d16')
        .then(res=>res.json())
        .then(json=>setState(json.main.temp))

    })

  return (
    <div>
        <h2>{state}</h2>
      
    </div>
  )
}


// import React, { useState, useEffect } from 'react';

// export default function Weatherapi1909() {
//     const [state, setState] = useState(null);

//     useEffect(() => {
//         fetch('https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=e4267305efe1b170c86abbf770694d16')
//             .then(res => res.json())
//             .then(json => setState(json))
//             .catch(err => console.error("Error fetching weather data: ", err));
//     }, []);

//     if (!state) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <h2>Weather in {state.name}</h2>
//             <p>Temperature: {state.main.temp}°K</p>
//             <p>Weather: {state.weather[0].description}</p>
//             {/* Add more fields as needed */}
//         </div>
//     );
// }
