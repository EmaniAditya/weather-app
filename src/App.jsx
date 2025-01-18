import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "./components/Input";
import WeatherInfo from "./components/WeatherInfo";
import Forecast from "./components/Forecast";

function App() {
  const [weather, setWeather] = useState();
  const [cityName, setCityName] = useState("");
  const [inputValue, setInputValue] = useState(cityName);

  useEffect(() => {
    if (cityName) {
      axios.get(`https://goweather.herokuapp.com/weather/${cityName}`)
        .then((response) => {
          setWeather(response.data);
        })
        .catch((error) => {
          console.error(error);
          setWeather(null);
        });
    }
  }, [cityName]);

  const fetchWeather = () => {
    setCityName(inputValue);
    setWeather("loading...");
  };

  return <div>
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Weather App</h1>
        <Input inputValue={inputValue} setInputValue={setInputValue} fetchWeather={fetchWeather} />
        {weather && (
          <>
            <WeatherInfo cityName={cityName} weather={weather} />
            <h2 className="text-xl font-bold mt-4">Forecasts</h2>
            <Forecast forecast={weather.forecast} />
          </>
        )}
      </div>
    </div>
  </div>
}

export default App;
