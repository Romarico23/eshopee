import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
import { NumericFormat } from "react-number-format";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>
          Price:{" "}
          <NumericFormat
            value={price}
            displayType={"text"}
            thousandSeparator={","}
            decimalScale={2}
            fixedDecimalScale
            prefix="₱"
          />
        </p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};
