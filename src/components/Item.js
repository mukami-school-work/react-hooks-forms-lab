import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import ItemForm from "./ItemForm";

function Item({ name, category, handleSubmit}) {
  const [isInCart, setIsInCart] = useState(false);

  function handleAddToCartClick() {
    setIsInCart((isInCart) => !isInCart);
  }

  return (
    <Fragment>
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={isInCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
    {handleSubmit}
    </Fragment>
  );
}

export default Item;
