import React from 'react'
import SearchAndFilter from '../components/SearchAndFilter'
import Card from '../components/Card'

function List() {

    const countries = [1,2,3,4,5,6]
    
    return (
        <>
            <div className="searchArea center-items">
                <SearchAndFilter />
                {/* <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} /> */}
            </div>

            <div className="countries center-items">
                <div className="card-container">
                     {countries.map((x) => <Card 
                         key={x}
                         country="Belgium"
                         population={11.23}
                         region="Germany"
                         capital="brussel"
                     />)}
                </div>
            </div>
        </>
        
    )
}

export default List