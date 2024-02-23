import React, { useContext } from 'react';
import { WeatherContext } from '../App';
import { BiWater } from "react-icons/bi";
import { SiWindicss } from "react-icons/si";
const NoData = () => {
    return <div>Search Data To get Weather Info</div>
}


const card = () => {
    const weatherData = useContext(WeatherContext);
    const day = weatherData?.current?.is_day;
    return (
        // <div className='bg-blue-500/80 text-white w-[300px] rounded-md p-5 mt-5 flex flex-col items-center relative'>
        <div
            className={`${day ? ' bg-blue-400/80' : 'bg-black/80'}  text-white w-[300px] rounded-md p-5 mt-5 flex flex-col items-center relative `}>
            <div className='absolute left-0 top-0'>
                {/* {weatherData?.current?.condition?.text} */}
                <img
                    className='sm:hover:scale-125 transition-all duration-500 ease-linear'
                    src={weatherData?.current?.condition?.icon}
                    alt="Weather" />
            </div>
            <div className='absolute right-3 top-3 sm:hover:text-xl transition-all duration-500 ease-linear tracking-normal sm:hover:tracking-widest '>
                {weatherData?.current?.condition?.text}
            </div>
            <div className='text-6xl font-sans mb-2 mt-10 sm:hover:text-8xl transition-all duration-500 ease-linear'>
                {weatherData?.current?.temp_c}<sup className='text-3xl sm:hover:text-5xl transition-all duration-500 ease-linear'>o</sup><span className='text-4xl sm:hover:text-6xl transition-all duration-500 ease-linear'>C</span>
            </div>
            <div className='font-semibold text-2xl mb-6 tracking-normal sm:hover:tracking-widest transition-all duration-300 ease-linear'>
                {weatherData?.location?.name}
            </div>
            <div className='flex gap-20'>
                <div className='flex flex-col items-center'>
                    <span className='flex justify-center items-center gap-1'>
                        <span><BiWater /></span>
                        <span>{weatherData?.current?.humidity}%</span>
                    </span>
                    <span>Humidity</span>
                </div>
                <div className='flex flex-col items-center'>
                    <span className='flex justify-center items-center gap-1'>
                        <span><SiWindicss /></span>
                        <span>{weatherData?.current?.wind_kph}km/h</span>
                    </span>
                    <span>Wind speed</span>
                </div>
            </div>
        </div>
    )
}

export default card
