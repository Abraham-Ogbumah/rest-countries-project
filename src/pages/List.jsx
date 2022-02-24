import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

// import SearchAndFilter from '../Components/SearchAndFilter'
import SearchBar from "../Components/Search/SearchBar"
import Filter from "../Components/Filter/Filter"
import Card from '../Components/Card'
import { getCountries } from "../services/countriesApi"

function List() {

    const [countries, setCountryInfo] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [searchedResults, setSearchedResults] = useState([]);

    const searchItems = (searchValue) => {

        setSearchInput(searchValue)
        console.log(searchValue)
        if (searchInput !== "") {
            const searchedData = countries.filter((item) => {
                return item.name.toLowerCase().includes(searchInput.toLowerCase())
            })
            setSearchedResults(searchedData)
        }
        else {
            setSearchedResults(countries)
        }
    }

    // const searchedData = countries.filter((item) => {
    //     return Object.values(item).join("").toLowerCase().includes(searchInput.toLowerCase())
    // })

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
    
    // console.log(countries)

    return (
        <>
            <div className="searchArea center-items">
                <div className="searchAndFilter">
                    <SearchBar 
                        handleChange={(e) => searchItems(e.target.value)}
                    />
                    <Filter />
                </div>
            </div>

            <div className="countries center-items">
                <div className="card-container">
                
                {searchInput.length > 1 ? (
                    searchedResults.map((item) => {
                        const { numericCode, name, flags, population, region, capital } = item
                        return (
                            <Link to={`/country/${name}`}>
                                <Card 
                                    key={numericCode}
                                    link={`/country/${name}`}
                                    image={flags.png}
                                    country={name}
                                    population={population.toLocaleString()}
                                    region={region}
                                    capital={capital}
                                />
                            </Link>
                        )
                    })
                ) : (
                    countries.map((item) => {
                        const {numericCode, name, flags, population, region, capital } = item
                        return (
                            <Link to={`/country/${name}`}>
                                <Card 
                                    key={numericCode}
                                    link={`/country/${name}`}
                                    image={flags.png}
                                    country={name}
                                    population={population.toLocaleString()}
                                    region={region}
                                    capital={capital}
                                />
                            </Link>
                        )
                    })
                )}
                </div> 
            </div>
        </> 
    )
}

export default List