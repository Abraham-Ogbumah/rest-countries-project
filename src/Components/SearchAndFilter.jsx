import React from "react"
import SearchBar from "./Search/SearchBar"
import Filter from "./Filter/Filter"

function SearchAndFilter() {
    return (
        <div className="searchAndFilter">
            <SearchBar />
            <Filter />
        </div>
    )
}

export default SearchAndFilter