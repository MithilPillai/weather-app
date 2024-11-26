import React, {useState} from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import { getWeather } from "./utils/api";
import "./App.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    try {
      setError("");
      const data = await getWeather(city);
      setWeatherData(data);
    } catch (err) {
      setError("Could not fetch weather data. Please try again.");
    }
  };

  return (
    <div className="app-container">
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="error-message">{error}</p>}
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
};

export default App; 
