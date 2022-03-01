import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft, FaBorderStyle } from "react-icons/fa"

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
                const { numericCode, flags, name, region, population, subregion, capital, topLevelDomain, currencies, borders, languages } = c

                return (
                    <div className="countries center-items" key={numericCode}>
                        <div className='detail-container'>
                            <div className='detail-img'>
                                <img src={flags.svg} alt={name}/>
                            </div> 
                            <div className='detail-content'>
                                <div className='country-info'>
                                    <div className='info-header'>
                                        <h2>{name}</h2>
                                        <p>Population: {population.toLocaleString()}</p>
                                        <p>Region: {region}</p>
                                        <p>Sub Region: {subregion}</p>
                                        <p>Capital: {capital}</p>
                                    </div>
                                    <div className='country-info-secondary'>
                                        <p>Top Level Domain: {topLevelDomain}</p>
                                        <p>Currencies: {currencies[0].code}</p>
                                        <p>Languages: {languages.map((language, ind) => {
                                            return (
                                                <span>{(ind ? ', ': '') + language.name}</span>
                                            )
                                        })}</p>
                                    </div>    
                                </div>

                                <div className='other-info'>
                                    <h3>Border Countries:</h3>
                                    <div className='border-list'>
                                            {borders ? borders.map((border) => {return (<Button name={border}/>)
                                        }) : <Button/>} 
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
