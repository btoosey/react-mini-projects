import React from "react"
import airbnb from "../Images/Airbnb.png"

export default function Navbar() {
  return(
    <div className="navbar">
      <img src={airbnb} alt="" className="navbar--logo"/>
    </div>
  )
}
