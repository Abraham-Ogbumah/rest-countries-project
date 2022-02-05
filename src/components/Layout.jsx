import React from "react";
// import { PageProps } from "types";
import Header from ".//Header";
import "../index.css"

const Layout = (props) => {
    const { children } = props;
    return (
        <>
            <div className="header-container">
                <Header />
            </div> 

            {children}
        </>
    )
}

export default Layout;