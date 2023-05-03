import React, { useContext, useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ShopContext } from "../context/ShopContextProvider";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

export const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const handleClick = () => {
    setMenuIcon(!menuIcon);
  };

  const { getItemQuantity } = useContext(ShopContext);
  const itemQuantity = getItemQuantity();

  return (
    <header>
      <div>
        <h1>EShopee</h1>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        {!menuIcon ? <BiMenu /> : <IoClose />}
      </div>
      <nav className={menuIcon ? "nav-active" : "nav"}>
        <NavLink to="/" onClick={handleClick}>
          Shop
        </NavLink>
        <NavLink to="/cart" onClick={handleClick}>
          <AiOutlineShoppingCart size={32} />
          <span>{itemQuantity}</span>
        </NavLink>
        <NavLink to="/contact" onClick={handleClick}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};
