// App.jsx

import React, { useState } from 'react';
import './App.css';

const apiKey = '469f57d03bb3241cdfdb4b0d380cf205';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState<string | null>(null); // Specify type for error state

  const getWeather = async () => {
    try {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError('Unable to fetch weather data. Please try again later.');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (city.trim() !== '') {
      getWeather();
    } else {
      alert('Please enter a city name.');
    }
  };

  return (
    <div className="App">
      <h1>Weather Forecasting</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cityInput">Enter City:</label>
        <input
          type="text"
          id="cityInput"
          placeholder="E.g., Bengaluru"
          value={city}
          onChange={handleChange}
        />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData && (
        <div id="weatherInfo">
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
