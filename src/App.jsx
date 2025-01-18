import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState();
  const [cityName, setCityName] = useState("Banglore");
  const [inputValue, setInputValue] = useState(cityName);

  useEffect(() => {
    if (cityName) {
      axios
        .get(`https://goweather.herokuapp.com/weather/${cityName}`)
        .then((response) => {
          setWeather(response.data);
        })
        .catch((error) => {
          console.error(error);
          setWeather(null);
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
        <button onClick={() => {
          setCityName(inputValue);
          setWeather("loading...");
        }}>Fetch</button>
      </div>
      <div>
        {weather ? (
          <div>{JSON.stringify(weather)}</div>
        ) : (
          <p>Loading or no data available...</p>
        )}
      </div>
    </div>
  );
}

export default App;