import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/ShopContextProvider";
import { CartItem } from "./CartItem";
import "./cart.css";
import { NumericFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      {totalAmount > 0 ? (
        <div>
          <h1>Your Cart Items</h1>
        </div>
      ) : (
        <p></p>
      )}
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>
            Subtotal:{" "}
            <NumericFormat
              value={totalAmount}
              displayType={"text"}
              thousandSeparator={","}
              decimalScale={2}
              fixedDecimalScale
              prefix="₱"
            />
          </p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button onClick={() => navigate("/contact")}>Checkout</button>
        </div>
      ) : (
        <h1>Your Cart is Empty!</h1>
      )}
    </div>
  );
};
