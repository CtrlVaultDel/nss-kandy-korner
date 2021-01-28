import React, { createContext, useState }from "react";

// The context is imported and used by individual components that need data
// createContext() makes an object with properties
export const CustomerContext = createContext();

// This component establishes what data can be used.
export const CustomerProvider = (props) => {

    const [customer, setCustomer] = useState([]);

    const getCustomerById = (id) => {
        return fetch(`http://localhost:8088/customers/${id}?_embed=customerProducts`)
            .then(res => res.json())
            .then(response => setCustomer(response));
    };

    // Subcomponent that renders a subset of itself called a Provider
    // Provider = Interface that other components can use in order to gain access
    // to what the provider holds.
    return (
        <CustomerContext.Provider value={{customer, getCustomerById}}>
            {props.children}
        </CustomerContext.Provider>
    );
};