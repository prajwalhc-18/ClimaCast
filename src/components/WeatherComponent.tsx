// WeatherComponent.tsx

import React, { useState, useEffect } from "react";
import "./WeatherComponent.css";

interface Location {
  latitude: number;
  longitude: number;
}

const apiKey = "469f57d03bb3241cdfdb4b0d380cf205";

const WeatherComponent = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [language, setLanguage] = useState<string>("en"); // Default language is English
  const [error, setError] = useState<string | null>(null);
  const [searchCity, setSearchCity] = useState<string>(""); // State to store the search city

  useEffect(() => {
    // Fetch weather data when location changes
    if (location) {
      fetchWeather(location.latitude, location.longitude);
    }
  }, [location]);

  const fetchWeather = async (latitude: number, longitude: number) => {
    try {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=${language}&appid=${apiKey}&units=metric`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError("Unable to fetch weather data. Please try again later.");
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          setError("Error retrieving location: " + error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser");
    }
  };

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLanguage(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&lang=${language}&appid=${apiKey}&units=metric`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError(
        "Unable to fetch weather data for the entered city. Please try again."
      );
    }
  };

  return (
    <div className="weather-container">
      <h1>Weather Forecast</h1>
      <div className="select-language">
        <label htmlFor="languageSelect">Select Language:</label>
        <select
          id="languageSelect"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          {/* Add more language options as needed */}
        </select>
      </div>
      <button className="get-location-btn" onClick={getLocation}>
        Get Current Location
      </button>
      <div className="search-city">
        <input
          type="text"
          placeholder="Enter City Name"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {weatherData && (
        <div className="weather-info">
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default WeatherComponent;
