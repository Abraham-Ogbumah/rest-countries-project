import React, { useState, useEffect } from "react";
import Header from "./Components/Pages/Header";
import List from "./Components/Pages/List";
import getCountries from "./services/countriesApi";
// import Detail from "./Components/Pages/Detail";

function App() {

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
