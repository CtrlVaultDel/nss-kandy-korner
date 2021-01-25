// React Imports
import React from "react";
import { Route } from "react-router-dom";

// Home Import
import { Home } from "./Home";

// Location Imports
import { LocationProvider } from "./locations/LocationProvider.js";
import { LocationList } from "./locations/LocationList.js";

// Product Imports
import { ProductProvider } from "./products/ProductProvider.js";
import { ProductList } from "./products/ProductList.js"; 

// Application Routing Function
export const ApplicationViews = () => {
    return (
        <>
            {/* Render the home page when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the location list when http://localhost:3000/locations */}
            <Route path ="/locations">
                <LocationProvider>
                    <LocationList />
                </LocationProvider>
            </Route>

            {/* Render the location list when http://localhost:3000/products */}
            <Route path ="/products">
                <ProductProvider>
                    <ProductList />
                </ProductProvider>
            </Route>
        </>
    );
};