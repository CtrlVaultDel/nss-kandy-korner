import React, { useContext, useEffect } from "react";
import { ProductContext } from "./ProductProvider.js";
import { ProductTypeContext } from "./ProductTypeProvider.js";
import { ProductCard } from "./ProductCard.js";
import "./Product.css";

export const ProductList = () => {
  // This state changes when `getProducts()` is invoked below
  const { products, getProducts } = useContext(ProductContext);

  // This state changes when `getProductTypes()` is invoked below
  const { productTypes, getProductTypes } = useContext(ProductTypeContext);

  //useEffect - reach out to the world for something
  useEffect(() => {
    getProductTypes()
    .then(getProducts)
  }, 
   // eslint-disable-next-line
   []);

  return (
    <>
      <h2 className="productsHeader">Products</h2>
      <div className="products">
        {
          //   key is used to give an independant value to each card for React to keep track
          products.map(product => {

            // Find the corresponding product type name for the product (e.g. gum, soda, hard candy)
            const productType = productTypes.find(p => p.id === product.productTypeId);

            // Return the required objects
            return <ProductCard key={product.id} product={product} productType={productType}/>
          })
        }
      </div>
    </>
  );
};