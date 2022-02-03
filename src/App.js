import React, { useState, useEffect } from "react";
import Header from "./Components/Pages/Header";
import List from "./Components/Pages/List";
import getCountries from "./services/countriesApi";
// import Detail from "./Components/Pages/Detail";

function App() {

  const [country, setCountry] = useState([]);

useEffect(() => {
  let mounted = true;
  getCountries()
    .then(items => {
      if(mounted) {
        setCountry(items)
      }
    })
    return () => mounted = false;
}, [])

  return (
    <main className="app">
        <div className="header-container">
            <Header />
        </div> 

       <List />
       {/* <Detail /> */}
       
    </main>
  );
}

export default App;
