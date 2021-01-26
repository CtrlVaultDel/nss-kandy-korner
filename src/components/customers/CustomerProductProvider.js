import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data
// createContext() makes an object with properties
export const CustomerProductContext = createContext();

// This component establishes what data can be used.
export const CustomerProductProvider = (props) => {
    const [customerProducts, setCustomerProducts] = useState([]);

    const getCustomerProducts = () => {
        return fetch("http://localhost:8088/customerProducts")
        .then(res => res.json())
        .then(setCustomerProducts);
    };

    const addCustomerProduct = customerProductObj => {
        return fetch("http://localhost:8088/customerProducts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerProductObj)
        })
        .then(getCustomerProducts);
    };

    // Subcomponent that renders a subset of itself called a Provider
    // Provider = Interface that other components can use in order to gain access
    // to what the provider holds.
    return (
        <CustomerProductContext.Provider value={{customerProducts, getCustomerProducts, addCustomerProduct}}>
            {props.children}
        </CustomerProductContext.Provider>
    );
};