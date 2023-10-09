// src/Order.js
import React from 'react';

function Order(props) {
  const { orderItems, removeFromOrder } = props;

  return (
    <div>
      <h2>Order</h2>
      <ul>
        {orderItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromOrder(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Order;