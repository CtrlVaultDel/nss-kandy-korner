import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data
// createContext() makes an object with properties
export const ProductTypeContext = createContext();

// This component establishes what data can be used.
export const ProductTypeProvider = (props) => {
    const [productTypes, setProductTypes] = useState([]);

    const getProductTypes = () => {
        return fetch("http://localhost:8088/productTypes")
        .then(res => res.json())
        .then(setProductTypes);
    };

    const addProductType = productTypeObj => {
        return fetch("http://localhost:8088/productTypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productTypeObj)
        })
        .then(getProductTypes);
    };

    // Subcomponent that renders a subset of itself called a Provider
    // Provider = Interface that other components can use in order to gain access
    // to what the provider holds.
    return (
        <ProductTypeContext.Provider value={{productTypes, getProductTypes, addProductType}}>
            {props.children}
        </ProductTypeContext.Provider>
    );
};