import React, { useState } from 'react';
import Menu from './Menu';
import Order from './Order';
import Login from './Login';
import './App.css';

const App = () => {
  const [menuItems] = useState([
    { name: 'Burger', price: 5.99, image: 'burger.jpg' },
    { name: 'Pizza', price: 8.99, image: 'burger.jpg' },
    { name: 'Fries', price: 2.99, image: 'burger.jpg' },
    { name: 'Cake', price: 2.99, image: 'burger.jpg' },
  ]);

  const [orderItems, setOrderItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (loggedIn, user) => {
    setIsLoggedIn(loggedIn);
    setUsername(user); // Set the username when logging in
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  const addToOrder = (item) => {
    setOrderItems([...orderItems, item]);
  };

  const removeFromOrder = (index) => {
    const newOrder = [...orderItems];
    newOrder.splice(index, 1);
    setOrderItems(newOrder);
  };

  return (
    <div className="App">
      <header>
        {isLoggedIn ? (
          <div>
            <h1>Welcome, {username}!</h1>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <h1>Food Booking App</h1>
        )}
      </header>
      {isLoggedIn ? (
        <div>
          <div className="Menu class grid-item">
            <Menu menuItems={menuItems} addToOrder={addToOrder} />
          </div>
          <div className="Order">
            <Order orderItems={orderItems} removeFromOrder={removeFromOrder} />
          </div>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;