import axios from "axios";
import { useEffect, useState } from "react";

const CurrentWeather = () => {
  const [weather, setWeather] = useState(null);

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.APIKEY}`;

  useEffect(() => {
    axios.get(URL)
    .then(response => setWeather(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Current Weather</h2>
      {weather ? (
        <div>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CurrentWeather;
