import React from 'react'
import SearchAndFilter from './SearchAndFilter'
import Card from './Card'

function List({infoToList}) {

    const countries = Array(20).fill(0)

    return (
        <>
            <div className="searchArea center-items">
                <SearchAndFilter />
                {/* <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} /> */}
            </div>

            <div className="countries center-items">
                <div className="card-container">
                     {countries.map(() => <Card 
                         country="Belgium"
                         population={11.23}
                         region="Germany"
                         capital="brussel"
                     />)}
                </div>
                {infoToList}
            </div>
        </>
        
    )
}

export default List