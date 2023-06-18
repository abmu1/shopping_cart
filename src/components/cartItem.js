import React, { useEffect, useState } from 'react';

function CartItem({item, setCart}) {
  // Maybe there is a better way of causing a re render.
  const [quantity, setQuantity] = useState(item.quantity);

  const add = () => {
    item.quantity += 1;
    setQuantity(item.quantity);
    // :(
    setCart(prevCart => {
      return [...prevCart];
    });
  };

  const substract = () => {
    if (item.quantity === 1) {
      return;
    };
    item.quantity -= 1;
    setQuantity(item.quantity);
    // :(
    setCart(prevCart => {
      return [...prevCart];
    });
  };

  const remove = () => {
    setCart(prevCart => {
      return (prevCart.filter((prevItem) => {
        return (prevItem.id !== item.id);
      }));
    });
  };

  const toggle = (e) => {
    e.currentTarget.classList.toggle('getting-clicked');
  };

  useEffect(() => {
    setQuantity(item.quantity);
  },[item.quantity])

  return (
    <div className='cart-item'>
      <img src={item.image} alt='product' className='item-image'/>
      <div className='item-info'>
        <p>{item.title}</p>
        <p>${item.price}</p>
        <div className='item-quantity'>
          <img src='./svgs/minus.svg' alt='minus' onClick={substract} onMouseDown={toggle} onMouseUp={toggle}/>
          <span>{quantity}</span>
          <img src='./svgs/plus.svg' alt='plus' onClick={add} onMouseDown={toggle} onMouseUp={toggle}/>
        </div>
      </div>
      <img src='./svgs/trash.svg' alt='trash' onClick={remove} className='remove-item' onMouseDown={toggle} onMouseUp={toggle}/>
  </div>
  )
};

export default CartItem;