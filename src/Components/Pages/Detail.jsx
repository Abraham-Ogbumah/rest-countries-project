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
                <div className='detail-img'>
                    <img src={ax} alt='country flag'/>
                </div> 
                <div className='detail-container'>
                    <div className='country-info'>
                        <div className='info-header'>
                            <h2>Belgium</h2>
                        </div>
                        <div className='country-info-secondary'>
                           
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
        </>
    )
}

export default Detail
