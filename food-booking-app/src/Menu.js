// src/Menu.js
import React from 'react';

function Menu(props) {
  const { menuItems, addToOrder } = props;

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <img
              src={`/images/${item.image}`} // Adjust the path to your images
              alt={item.name}
              width="100"
              height="100"
            />
            <div>
              <strong>{item.name}</strong>
              <br />
              Price: ${item.price}
            </div>
            <button onClick={() => addToOrder(item)}>Add to Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;