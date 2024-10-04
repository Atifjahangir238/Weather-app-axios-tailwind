import axios from 'axios';
import React, { useState, useEffect } from 'react'



export default function Weather({city}) {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const responce = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bba65e30986410b19aaec28541d83a41&units=metric`);
                setWeatherData(responce.data);
            } catch (error) {
                console.log('Error is fetching', error);
            }
        }
        fetchWeather();
    }, [city]);

    return (
        <>
            <div className="text-center  bg-slate-700 rounded  text-amber-400 mx-auto p-4">
                {weatherData ? (
                    <div className="text-center m-auto ">
                        <p className='font-mono'>city: {weatherData.sys.country}</p>
                        <p className='font-mono'>city: {weatherData.name}</p>
                        <p className='font-mono'>Tempreture: {weatherData.main.temp}</p>
                        <p className='font-mono'>Humidity: {weatherData.main.humidity}</p>
                        <p className='font-mono'>Sea_level: {weatherData.main.sea_level}</p>
                        <p className='font-mono'>Wind_speed: {weatherData.wind.speed}</p>
                    </div>
                ) : (
                    <p className="text-center">Enter Above</p>
                )

                }
            </div>
        </>
    )
}
