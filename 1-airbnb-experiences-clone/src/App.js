import React from "react"
import Navbar from "./Components/Navbar"
import Titles from "./Components/Titles"
import Card from "./Components/Card"
import experienceData from "./data"

export default function App() {

  const cards = experienceData.map(item => {
    return(
      <Card
        item={item}
      />
    )
  })

  return(
    <div>
      <Navbar />
      <Titles />
      <div className="card--list">
        {cards}
      </div>
    </div>
  )
}
