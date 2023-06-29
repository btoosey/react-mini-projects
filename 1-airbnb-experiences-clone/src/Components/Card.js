import React from "react"

export default function Card(props) {
  return(
    <div className="card">
      <img src={props.item.img} alt="" className="card--image"/>
      <div className="card--rating">
        <img src="" alt="" className="card--rating--star"/>
        <h4><b>{props.item.rating}</b></h4>
        <h4 className="grey">({props.item.reviews})</h4>
        <h4 className="gray">-</h4>
        <h4 className="grey">{props.item.location}</h4>
      </div>
      <h3>{props.item.title}</h3>
      <h3><b>From £{props.item.price}</b> / Person</h3>
    </div>
  )
}
