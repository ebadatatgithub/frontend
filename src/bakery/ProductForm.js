import React, { useState } from 'react';
import axios from 'axios'
const ProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Do something with the form data (e.g., send it to an API)
    const formData = {
      name: name,
      price: price,
      image: image
    };
    await axios.post('http://localhost:5000/product',formData)
    
    // Reset the form
    setName('');
    setPrice(0);
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
      </label>
      <br />
      <label>
        Image URL:
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
