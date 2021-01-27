import React, {useContext} from "react";
import { CustomerProductContext } from "../customers/CustomerProductProvider.js";

export const ProductCard = ({product, productType}) => {
    console.log(useContext(CustomerProductContext))
    const { addCustomerProduct } = useContext(CustomerProductContext);
    
    const AddOrder = (productId) => {
        const customerId = localStorage.getItem("kandykorner_customer");
    
        // Assign the above variables to an object to be saved as a new relationship between the customer and product
        const customerProductObj = {
            customerId,
            productId
        };

        console.log(customerProductObj)
        addCustomerProduct(customerProductObj);
    };
    
    return (
    <section className="product">
        <div className="product__name">{product.name}</div>
        <div className="product__price">Price: ${product.price}</div>
        <div className="product__type">Product Type: {productType.type}</div>
        <button className={`product__button--${product.id}`} onClick={() => AddOrder(product.id)}>
            Add to order
        </button>
    </section>
)};