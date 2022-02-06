import React, { useState, useEffect } from 'react'
import SearchAndFilter from '../components/SearchAndFilter'
import Card from '../components/Card'
import { getCountries } from "../services/countriesApi"

function List() {

    const countries = [1,2,3,4,5,6]

    const [country, setCountryInfo] = useState([]);

    useEffect(() => {
      let mounted = true;
      getCountries()
        .then(items => {
          if(mounted) {
            setCountryInfo(items)
          }
        })
        return () => mounted = false;
    }, [])

    console.log(country)
    
    return (
        <>
            <div className="searchArea center-items">
                <SearchAndFilter />
                {/* <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} /> */}
            </div>

            <div className="countries center-items">
                <div className="card-container">
                     {country.map((item) => <Card 
                         key={item.alpha2Code}
                         country={item.name}
                         population={item.population}
                         region={item.region}
                         capital={item.capital}
                     />)}
                </div>
            </div>
        </>
        
    )
}

export default List