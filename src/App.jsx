import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState(null);
  const [cityName, setCityName] = useState("Banglore");
  const [inputValue, setInputValue] = useState(cityName);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cityName) {
      setLoading(true);
      axios.get(`https://goweather.herokuapp.com/weather/${cityName}`)
        .then((response) => {
          setWeather(response.data);
        })
        .catch((error) => {
          console.error(error);
          setWeather(null);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [cityName]);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="City Name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => setCityName(inputValue)}>Fetch</button>
      </div>
      <div>
        {loading ? (
          <p>loading...</p>
        ) : weather ? (
          <div>
            <h2>Weather in {cityName}</h2>
            <p>Temperature: {weather.temperature}</p>
            <p>Wind: {weather.wind}</p>
            <p>Description: {weather.description}</p>
          </div>
        ) : (
          <p>No data available...</p>
        )}
      </div>
    </div>
  );
}

export default App;