import { useState } from "react";
import CartContext from "./Content";
const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const addItemToCartHandler = (item) => {
    setItems([...items, item]);
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    item: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
