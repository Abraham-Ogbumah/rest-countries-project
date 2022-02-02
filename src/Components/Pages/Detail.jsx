import React from 'react'
import { FaArrowLeft } from "react-icons/fa"
import './detail.css'
import ax from "../ax.png"
import Button from '../Utils/Button'

function Detail() {
    return (
        <>
            <div className="searchArea center-items">
                <div>
                    <button className='back-button'>
                        <FaArrowLeft className='left-arrow'/> Back
                    </button>
                </div>
            </div>

            <div className="countries center-items">
                <div className='detail-container'>
                    <div className='detail-img'>
                        <img src={ax} alt='country flag'/>
                    </div> 
                    <div className='detail-content'>
                        <div className='country-info'>
                            <div className='info-header'>
                                <h2>Belgium</h2>
                                <p>Population: 11,319,511</p>
                                <p>Region: Europe</p>
                                <p>Sub Region: Western Europe</p>
                                <p>Capital: Brussels</p>
                            </div>
                            <div className='country-info-secondary'>
                                <p>Top Level Domain: be</p>
                                <p>Currencies: Euro</p>
                                <p>Languages: Dutch, French, German</p>
                            </div>    
                        </div>

                        <div className='other-info'>
                            <h3>Border Countries:</h3>
                            <div className='border-list'>
                                <Button />
                                <Button />
                                <Button />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail
