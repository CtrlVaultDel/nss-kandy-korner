import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data
// createContext() makes an object with properties
export const ProductContext = createContext();

// This component establishes what data can be used.
export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return fetch("http://localhost:8088/products")
        .then(res => res.json())
        .then(setProducts);
    };

    const addProduct = productObj => {
        return fetch("http://localhost:8088/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productObj)
        })
        .then(getProducts);
    };

    // Subcomponent that renders a subset of itself called a Provider
    // Provider = Interface that other components can use in order to gain access
    // to what the provider holds.
    return (
        <ProductContext.Provider value={{products, getProducts, addProduct}}>
            {props.children}
        </ProductContext.Provider>
    );
};