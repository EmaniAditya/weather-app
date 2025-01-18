import React from 'react';

function Forecast({ forecast }) {
  return <div>
    <div className="mt-2 grid grid-cols-3 gap-4">
      {forecast.map((day, index) => (
        <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm">
          <p className="text-lg font-semibold">Day {day.day}</p>
          <p>Temperature: {day.temperature}</p>
          <p>Wind: {day.wind}</p>
        </div>
      ))}
    </div>
  </div>
}

export default Forecast;
