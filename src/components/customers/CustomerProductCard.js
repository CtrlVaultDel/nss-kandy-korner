import React from "react";

export const CustomerProductCard = ({product}) => (
    <section className="product">
        <div className="product__name">Item: {product.name}</div>
        <div className="product__quantity">Quantity {product.quantity}</div>
        <div className="product__price">Price/Unit: ${product.price}</div>
        <div className="product__totalPrice">Total: ${product.quantity * price}</div>
    </section>
);