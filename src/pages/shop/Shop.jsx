import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./Product";
import "./product.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>SHOP NOW!</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product, key) => (
          <Product data={product} key={key} />
        ))}
      </div>
    </div>
  );
};
