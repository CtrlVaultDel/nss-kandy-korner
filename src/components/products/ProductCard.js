import React, {useContext} from "react";
import { CustomerProductContext } from "../customers/CustomerProductProvider.js";

export const ProductCard = ({product, productType}) => {
    const { customerProducts, addCustomerProduct, getCustomerProducts, updateCustomerProduct } = useContext(CustomerProductContext);

    const addOrder = (itemId) => {
        const customerId = parseInt(localStorage.getItem("kandykorner_customer"));
        const productId = itemId;
        let id = 0;
        let quantity = 1;
        getCustomerProducts()
        .then(() => {
            if(customerProducts.some((relation) => relation.customerId === customerId && relation.productId === productId)){
                console.log("Updating existing order")
                const existingOrder = customerProducts.find((relation) => relation.customerId === customerId && relation.productId === productId)
                    id = existingOrder.id;
                    quantity = existingOrder.quantity + 1;
                    console.log(existingOrder);
                    updateCustomerProduct({
                        customerId,
                        productId,
                        quantity,
                        id
                    })
            } else {
                console.log("Going to have to make a new one")
                console.log(customerId, productId, quantity)
                addCustomerProduct({
                    customerId,
                    productId,
                    quantity
                });
            };       
        });
    };
    
    return (
        <section className="product">
            <div className="product__name">{product.name}</div>
            <div className="product__price">Price: ${product.price}</div>
            <div className="product__type">Product Type: {productType.type}</div>
            <button className={`product__button--${product.id}`} onClick={() => addOrder(product.id)}>
                Add to order
            </button>
        </section>
)};