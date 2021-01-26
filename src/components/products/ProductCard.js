import React, {useContext} from "react";
import { CustomerProductContext } from "../customers/CustomerProductProvider.js";

const addOrder = (e) => {
    //const { addCustomerProduct } = useContext(CustomerProductContext);
    const customerId = localStorage.getItem("kandykorner_customer");
    const productId = e.target.className.split("--")[1];

    // Assign the above variables to an object to be saved as a new relationship between the customer and product
    const customerProductObj = {
        customerId,
        productId
    };
    console.log(customerProductObj)

    //addCustomerProduct(customerProductObj);
};

export const ProductCard = ({product, productType}) => (
    <section className="product">
        <div className="product__name">{product.name}</div>
        <div className="product__price">Price: ${product.price}</div>
        <div className="product__type">Product Type: {productType.type}</div>
        <button className={`product__button--${product.id}`} onClick={(e) => addOrder(e)}>
            Add to order
        </button>
    </section>
);