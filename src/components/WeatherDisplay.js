import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return <p>No weather data available. Please search for a city.</p>;
  }

  return (
    <div className="weather-display">
      <h2>{weatherData.city}</h2>
      <p>Temperature: {weatherData.temperature}°C</p>
      <p>Condition: {weatherData.description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
        alt="Weather Icon"
      />
    </div>
  );
};

export default WeatherDisplay;
