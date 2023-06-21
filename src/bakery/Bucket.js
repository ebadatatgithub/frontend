import React, { useState } from 'react';
import Menu from './Menu';

const Bucket = ({ cake }) => {
  const [counter, setCounter] = useState(0);
  const [price, setPrice] = useState(cake.price);
  const [topping, setTopping] = useState(false);

  const handleIncrement = () => {
    setCounter(counter + 1);
    setPrice(price + cake.price); // Assuming each item adds the same price as the cake
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setPrice(price - cake.price); // Assuming each item subtracts the same price as the cake
    }
  };

  const handleToppingChange = (e) => {
    setTopping(e.target.checked);
    if (e.target.checked) {
      setPrice(cake.price + 5); // Assuming each extra topping costs $5
    } else {
      setPrice(cake.price - 5); // Assuming each extra topping costs $5
    }
  };

  return (
    <div>
      <h2>{cake.name}</h2>
      <p>Price: ${cake.price}</p>
      <p>Counter: {counter}</p>
      <div>
        <button onClick={handleIncrement}>Add to Bucket</button>
        <button onClick={handleDecrement}>Remove from Bucket</button>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={topping} onChange={handleToppingChange} />
          Extra Topping (+$5)
        </label>
      </div>
    </div>
  );
};

export default Bucket;
