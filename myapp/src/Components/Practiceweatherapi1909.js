// import React from 'react'
// import { useState, useEffect } from 'react'

// export default function Practiceweahterapibycitynamedynamic1909() {

//     const [city, setCity] = useState('')
//     const [search, setSearch] = useState('')

//     const changeHandler = (e) => {
//         setCity(e.target.value)
//     }
//     const submitHandl = (e) => {
//         e.preventDefault()
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e4267305efe1b170c86abbf770694d16`)
//             .then(response => response.json())
//             .then(data => {
//                 const result = data
//                 console.log(data)
//                 // const kelvin = data.main.temp;
//                 // const celsius = kelvin - 273.15
                
//                 // setSearch(Math.round(celsius))
//                 setSearch(data)
//             })
//     }
//     return (
//         <div>
//             <h1>Weather by City Name</h1>
//             <span>{search+'deg'}</span>
//             <form onSubmit={submitHandl}>
//                 <input
//                     type='text'
//                     value={city}
//                     onChange={changeHandler}
//                 />
//                 <br/>
//                 <button className='mt-4'
//                     type='submit'>
//                     submit
//                 </button>
//             </form>


//         </div>
//     )
// }







// import React from 'react'
// import { useState } from 'react'

// export default function Practiceweahterapibycitynamedynamic1909() {

//     const [city, setCity] = useState('')
//     const [search, setSearch] = useState(null) // Initial state as null for no data

//     const changeHandler = (e) => {
//         setCity(e.target.value)
//     }

//     const submitHandl = (e) => {
//         e.preventDefault()
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e4267305efe1b170c86abbf770694d16`)
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data)
//                 setSearch(data) // Save full data object in state
//             })
//     }

//     return (
//         <div>
//             <h1>Weather by City Name</h1>

//             {/* Display weather data if available */}
//             {search ? (
//                 <pre>{JSON.stringify(search, null, 1)}</pre> // Using <pre> tag for better formatting
//             ) : (
//                 <span>No data</span>
//             )}

//             {/* <h1>{search}</h1> */}

//             <form onSubmit={submitHandl}>
//                 <input
//                     type='text'
//                     value={city}
//                     onChange={changeHandler}
//                 />
//                 <br />
//                 <button className='mt-4' type='submit'>
//                     Submit
//                 </button>
//             </form>
//         </div>
//     )
// }





import React, { useState } from 'react';

export default function Practiceweahterapibycitynamedynamic1909() {

    const [city, setCity] = useState('');
    const [search, setSearch] = useState(null); // Initial state as null for no data

    const changeHandler = (e) => {
        setCity(e.target.value);
    }

    const submitHandl = (e) => {
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e4267305efe1b170c86abbf770694d16&units=metric`) // Added &units=metric for Celsius
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setSearch(data); // Save full data object in state
            })
    }

    return (
        <div>
            <h1>Weather by City Name</h1>

            {/* Display weather data if available */}
            {search && search.main ? (
                <div>
                    <h2>{search.name}</h2>
                    <p>Temperature: {search.main.temp}°C</p>
                    <p>Feels Like: {search.main.feels_like}°C</p>
                    <p>Humidity: {search.main.humidity}%</p>
                    <p>Wind Speed: {search.wind.speed} m/s</p>
                    <p>Weather: {search.weather[0].description}</p>
                </div>
            ) : (
                <span>No data available</span>
            )}

            <form onSubmit={submitHandl}>
                <input
                    type='text'
                    value={city}
                    onChange={changeHandler}
                    placeholder='Enter city name'
                />
                <br />
                <button className='mt-4' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    );
}
