import React from "react";

export const ProductCard = ({product}) => (
    <section className="product">
        <div className="product__name">{product.name}</div>
        <div className="product__price">Price: ${product.price}</div>
        <div className="product__type">Product Type: {product.productTypeId}</div>
    </section>
);