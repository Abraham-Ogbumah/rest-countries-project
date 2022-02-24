import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa"

import './detail.css'
import ax from "../Components/ax.png"
import Button from '../Components/Utils/Button'


function Detail() {
    const [country, setCountry] = useState([])
    const { name } = useParams()

    useEffect(() => {

        const fetchCountryData = async () => {
            const response = await fetch(`https://restcountries.com/v2/name/${name}`)
            const country = await response.json()
            setCountry(country)
            console.log(country)
        }
        fetchCountryData()
    }, [name])

    return (
        <>
            <div className="searchArea center-items">
                <div>
                    <button className='btn'>
                        <Link to="/" className='back-button'><FaArrowLeft className='left-arrow'/> Back</Link> 
                    </button>
                </div> 
            </div>

            {country.map((c) => {
                const { numericCode, flags, name, region } = c

                return (
                    <div className="countries center-items" key={numericCode}>
                        <div className='detail-container'>
                            <div className='detail-img'>
                                <img src={flags.png} alt={name}/>
                            </div> 
                            <div className='detail-content'>
                                <div className='country-info'>
                                    <div className='info-header'>
                                        <h2>{name}</h2>
                                        <p>Population: 11,319,511</p>
                                        <p>Region: {region}</p>
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
                )
            })}
            
        </>
    )
}

export default Detail
