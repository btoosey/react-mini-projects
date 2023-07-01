import React from "react";

export default function CurrentWeatherCard (props) {
  return(
    <div className="currentWeather--card">
      <div className="currentWeather--card--location">
        <h3 className="currentWeather--card--city">{props.data.city}</h3>
        <h4 className="currentWeather--card--country">{props.data.country}</h4>
      </div>
      <h1 className="currentWeather--card--temp">{props.data.temperature}°C</h1>
    </div>
  )
}
