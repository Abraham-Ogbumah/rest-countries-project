import React from "react";
import ax from "./ax.png"

function Card(props) {
    return (
        <div className="card">
            <img src={ax} alt="image_picture"/>
            <div className="container">
                <h3>{props.country}</h3>
                <p>Population: <span>{props.population}</span></p>
                <p>Region: <span>{props.region}</span></p>
                <p>Capital: <span>{props.capital}</span></p>
            </div>
        </div>           
    )
}

export default Card;