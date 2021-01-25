import React, { useContext, useEffect } from "react";
import { ProductContext } from "./ProductProvider.js";
import { ProductCard } from "./ProductCard.js";
import "./Product.css";

export const ProductList = () => {
  // This state changes when `getProducts()` is invoked below
  const { products, getProducts } = useContext(ProductContext);

  //useEffect - reach out to the world for something
  // eslint-disable-next-line
  useEffect(getProducts, []);

  return (
    <>
      <h2 className="productsHeader">Products</h2>
      <div className="products">
        {
          //   key is used to give an independant value to each card for React to keep track
          products.map(product => <ProductCard key={product.id} product={product} />)
        }
      </div>
    </>
  );
};