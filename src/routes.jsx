import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Home = lazy(() => import('./pages/List'));
const CountryDetail = lazy(() => import("./pages/Detail"));

export const route = {
    home: "/countries",
    country: "/country/:id"
};

const CountriesRoutes = () => {
    return (
        <Routes>
            <Route path={route.home} exact element={ <Home />} />
            <Route path={route.country} exact element={ <CountryDetail />} />
            <Route path="/" element={<Navigate to="/countries" />}></Route>
        </Routes>
    )
};

export default CountriesRoutes;