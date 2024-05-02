import {useState, useEffect} from 'react'
import axios from 'axios'

const WeatherData = ({country}) => {
    const [currentWeather, setCurrentWeather] = useState(null)

    const hook = () => {
        const key = import.meta.env.VITE_SOME_KEY

        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${key}`)
            .then(response =>
                setCurrentWeather(response.data)
            )
    }
    useEffect(hook, [])

    if (currentWeather === null){
        return null
    }

    return(
        <>
            <h2>Weather in {country.capital[0]}</h2>
            <p>Temperature: {(currentWeather.main.temp-273).toFixed(1)} Celsius </p>
            <img src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} />
            <p>wind {currentWeather.wind.speed} m/s</p>
        </>
    )
}

export default WeatherData