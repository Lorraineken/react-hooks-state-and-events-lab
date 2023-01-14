import React, { useState } from "react";

function Item({ name, category }) {
 
  const [inCart,setCart]=useState(false)

  const addCart = inCart ? "in-cart":"";
  const itemCart = inCart ? "Remove From Cart":"Add to Cart"

  function handleCart(){
    setCart(!inCart)
  }


  return (
    <li className={addCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{itemCart}</button>
    </li>
  );
}

export default Item;
