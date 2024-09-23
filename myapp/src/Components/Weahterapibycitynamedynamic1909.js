import React from 'react'
import { useState, useEffect } from 'react'

export default function Weahterapibycitynamedynamic1909() {

    const [city, setCity] = useState('')
    const [search, setSearch] = useState('')

    const changeHandler = (e) => {
        setCity(e.target.value)
    }
    const submitHandl = (e) => {
        e.preventDefault()
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e4267305efe1b170c86abbf770694d16`)
            .then(response => response.json())
            .then(data => {
                const kelvin = data.main.temp;
                const celsius = kelvin - 273.15
                setSearch(Math.round(celsius))
            })
    }
    return (
        <div>
            <h1>Weather by City Name</h1>
            <span>{search+'deg'}</span>
            <form onSubmit={submitHandl}>
                <input
                    type='text'
                    value={city}
                    onChange={changeHandler}
                />
                <br/>
                <button className='mt-4'
                    type='submit'>
                    submit
                </button>
            </form>


        </div>
    )
}
