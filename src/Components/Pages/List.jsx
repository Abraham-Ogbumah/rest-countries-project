import React from 'react'
import SearchAndFilter from './SearchAndFilter'
import Card from './Card'

function List() {

    const countries = Array(20).fill(0)

    return (
        <>
            <div className="searchArea center-items">
                <SearchAndFilter />
                {/* <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} /> */}
            </div>

            <div className="countries center-items">
                <div className="card-container">
                     {countries.map(() => <Card />)}
                </div>
            </div>
        </>
        
    )
}

export default List