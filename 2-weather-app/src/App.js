import React from "react";
import Navbar from "./Components/Navbar"
import CurrentWeatherCard from "./Components/CurrentWeatherCard";
import data from "./data";

export default function App() {
  return(
    <div className="app">
      <Navbar />
      <CurrentWeatherCard data={data}/>
    </div>
  )
}
