import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Layout from "./Components/Layout";

function App() {
  return (
    <Router>
        <div className="app">
            <Layout>
              <Suspense fallback={<h1>Loading</h1>}>
                <Routes />
              </Suspense>
            </Layout>
        </div>
    </Router>  
  );
}

export default App;
