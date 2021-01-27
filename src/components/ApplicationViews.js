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
import { ProductTypeProvider } from "./products/ProductTypeProvider.js";
import { ProductList } from "./products/ProductList.js"; 

// Employee Imports
import { EmployeeProvider } from "./employees/EmployeeProvider.js";
import { EmployeeList } from "./employees/EmployeeList.js";
import { EmployeeForm } from "./employees/EmployeeForm.js";

// Customer Imports
import { CustomerOrders } from "./customers/CustomerOrder.js";
import { CustomerProductProvider } from "./customers/CustomerProductProvider.js";

// Application Routing Function
export const ApplicationViews = () => {
    return (
        <>
            {/* Render the home page when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the location list when http://localhost:3000/locations */}
            
            <LocationProvider>
                <ProductProvider>
                    <ProductTypeProvider>
                        <Route exact path="/locations">
                            <LocationList />
                            <CustomerProductProvider>
                                <ProductList />
                            </CustomerProductProvider>
                        </Route>
                    </ProductTypeProvider>
                </ProductProvider>
            </LocationProvider>

            <EmployeeProvider>
                <Route exact path="/employees">
                    <EmployeeList />
                </Route>
                
                <LocationProvider>
                    <Route exact path="/employees/create">
                        <EmployeeForm />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>
        </>
    );
};