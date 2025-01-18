import React from 'react';

function Input({ inputValue, setInputValue, fetchWeather }) {
  return <div>
    <div className="flex items-center mb-4">
      <input
        type="text"
        placeholder="City Name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={fetchWeather}
        className="ml-2 bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Fetch
      </button>
    </div>
  </div>
}

export default Input;
