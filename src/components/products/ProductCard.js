import React, {useContext} from "react";
import { CustomerProductContext } from "../customers/CustomerProductProvider.js";

export const ProductCard = ({product, productType}) => {
    const { customerProducts, addCustomerProduct, getCustomerProducts, updateCustomerProduct } = useContext(CustomerProductContext);

    const addOrder = (productId) => {
        const customerId = parseInt(localStorage.getItem("kandykorner_customer"));
        let id = 0;
        let quantity = 1;
        getCustomerProducts()
        .then(() => {
            const foundMatch = customerProducts.some((relation) => {
                if(relation.customerId === customerId && relation.productId === productId) {
                    id = relation.id;
                    quantity = relation.quantity + 1;
                    updateCustomerProduct({
                        customerId,
                        productId,
                        quantity,
                        id
                    })
                }
            });
            if (!foundMatch){
                console.log("Going to have to make a new one")
                addCustomerProduct({
                    customerId,
                    productId,
                    quantity
                });
            }
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