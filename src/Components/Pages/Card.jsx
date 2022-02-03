import React from "react";
import ax from "./ax.png"

function Card() {
    return (
        <div className="card">
            <img src={ax} alt="image_picture"/>
            <div className="container">
                <h3>Country Name</h3>
                <p>Population: <span>Number</span></p>
                <p>Region: <span>Number</span></p>
                <p>Capital: <span>Number</span></p>
            </div>
        </div>           
    )
}

export default Card;