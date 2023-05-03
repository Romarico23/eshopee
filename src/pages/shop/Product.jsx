import React, { useContext } from "react";
// import "./product.css";
import { ShopContext } from "../../context/ShopContextProvider";
import { NumericFormat } from "react-number-format";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt="Product" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>
          <NumericFormat
            value={price}
            displayType={"text"}
            thousandSeparator={","}
            decimalScale={2}
            fixedDecimalScale
            prefix="₱"
          />
        </p>
      </div>
      <button
        className="addToCartBtn"
        onClick={() => {
          addToCart(id);
        }}
      >
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};
