import React from 'react';

function WeatherInfo({ cityName, weather }) {
  return <div>
    <div className="text-center">
      <p className="text-xl font-semibold">{cityName}</p>
      <p className="text-lg">{weather.description}</p>
      <p className="text-4xl font-bold mt-2">{weather.temperature}</p>
      <p className="text-sm text-gray-500">Wind: {weather.wind}</p>
    </div>
  </div>
}

export default WeatherInfo;
