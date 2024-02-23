import React, { createContext, useState } from 'react';
import Card from './components/card'
import Input from './components/Input';
import Button from './components/Button';

export const WeatherContext = createContext();
const App = () => {
  const [weather, setWeather] = useState(false);
  const [inputData, setInputData] = useState('');
  const handleInputData = (data) => {
    setInputData(data)
  }
  const dataFetcher = () => {

    inputData!==''?fetch(`https://api.weatherapi.com/v1/current.json?key=c23f25f163be47c4a42154707242302&q=${inputData}&aqi=no`)
      .then(data => data.json()).then(data => setWeather(data)):'';
  }

  return (
    <>
      <div className='h-screen w-full bg-slate-900 flex  items-center flex-col select-none'>
        <WeatherContext.Provider value={weather}>
          <div className='flex flex-col items-center gap-3 mt-5 bg-white/60 h-fit p-10 rounded-md'>
            <h1 className='text-black font-semibold text-2xl sm:text-3xl text-center'>Weather Info</h1>
            <Input value={inputData} onChangeCallback={handleInputData} placeHolder={"Enter City name"} />
            <Button getData={dataFetcher} />
          </div>
          {weather&&<Card />}
        </WeatherContext.Provider>
      </div>
    </>
  )
}

export default App