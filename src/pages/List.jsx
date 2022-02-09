import React, { useState, useEffect } from 'react'
// import SearchAndFilter from '../Components/SearchAndFilter'
import SearchBar from "../Components/Search/SearchBar"
import Filter from "../Components/Filter/Filter"
import Card from '../Components/Card'
import { getCountries } from "../services/countriesApi"

function List() {

    const [country, setCountryInfo] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [searchedResults, setSearchedResults] = useState([]);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== "") {
            const searchedData = country.filter((item) => {
                return Object.values(item).join("").toLowerCase().includes(searchInput.toLowerCase())
            })
            setSearchedResults(searchedData)
        }
        else {
            setSearchedResults(country)
        }
    }

    // const searchedData = country.filter((item) => {
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
                        return (
                                <Card 
                                    key={item.alpha2Code}
                                    image={item.flags.png}
                                    country={item.name}
                                    population={item.population.toLocaleString()}
                                    region={item.region}
                                    capital={item.capital}
                                />
                           
                        )
                    })
                ) : (
                    country.map((item) => {
                        return (
                                <Card 
                                    key={item.alpha2Code}
                                    image={item.flags.png}
                                    country={item.name}
                                    population={item.population.toLocaleString()}
                                    region={item.region}
                                    capital={item.capital}
                                />
                        )
                    })
                )}
                </div> 
            </div>
        </> 
    )
}

export default List