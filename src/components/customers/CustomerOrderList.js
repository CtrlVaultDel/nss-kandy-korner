import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CustomerContext } from "./CustomerProvider.js";
import { ProductContext } from "../products/ProductProvider.js";
import { CustomerProductCard } from "./CustomerProductCard.js";

export const CustomerOrderList = () => {
  
    // This states change when invoked below
    const { customer, getCustomerById } = useContext(CustomerContext);
    const { products, getProducts } = useContext(ProductContext);

    const { customerId } = useParams();

    const findInfo = () => {
        getCustomerById(customerId)
        .then(getProducts)
        .then(() => {
            if(customer && products){
                customer.customerProducts.forEach(item => {
                    products.forEach(product => {
                        if (product.id === item.productId){
                            item.name = product.name;
                            item.price = product.price;
                        };
                    });
                });
                console.log(customer, "Customers and products made it!")
            } else {
                console.log("Customers and products did not make it for some reason")
            }
        });
    };

    //useEffect - reach out to the world for something
    useEffect(findInfo, []);
    
    return (
        <>
            <h2 className="customerProductsHeader">Customers</h2>
            <div className="customerProducts">
                {
                    //key is used to give an independant value to each card for React to keep track
                    customer.customerProducts.map(relation => <CustomerProductCard key={relation.id} product={relation}/>)
                }
            </div>
        </>
    );
};