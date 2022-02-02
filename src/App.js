import React from "react";
import Header from "./Components/Header";
import List from "./Components/Pages/List";
import Detail from "./Components/Pages/Detail";

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
