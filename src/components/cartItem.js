import React, { useEffect, useState } from 'react';

function CartItem({item, setCart}) {
  // Maybe there is a better way of causing a re render.
  const [quantity, setQuantity] = useState(item.quantity);

  const add = () => {
    item.quantity += 1;
    setQuantity(item.quantity);
  };

  const substract = () => {
    if (item.quantity === 1) {
      return;
    };
    item.quantity -= 1;
    setQuantity(item.quantity);
  };

  const remove = () => {
    setCart(prevCart => {
      return (prevCart.filter((cartItem) => {
        return (cartItem.id !== item.id);
      }));
    });
  };

  useEffect(() => {
    setQuantity(item.quantity);
  },[item.quantity])

  return (
    <li>
      <img src={item.image} alt='product'/>
      <p>{item.title}</p>
      <p>{item.price}</p>
      <div>
        <button onClick={add}>plus 1</button>
        <div>Quantity: {quantity}</div>
        <button onClick={substract}>minus 1</button>
      </div>
      <button onClick={remove}>Remove</button>
  </li>
  )
};

export default CartItem;