import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { getProduct } from '../service/api';
import Bucket from './Bucket';
import './menu.css';

const Menu= () => {
  const [cake, setCake] = useState([]);

  const navigate = useNavigate();
  useEffect(()=>{
    fetch()
  })
  
  const handleDetail = (cake) => {

    navigate('/Det', { state: { from: cake } });
  };
  
  const handleDelete = (id) => {
    setCake(cake.filter((cake) => cake.id !== id));
  };

   async function fetch(){
      const data = await getProduct();
      setCake(data)
  }

  

  return (

    <div>

    
    <div className="women-shoes-section">
      <h2>MENU</h2>
      <div className="shoes-container">
        {cake.map((cake) => (
          
          <div className="shoe-card" key={cake.id}>
            <img src={cake.image} alt={cake.name} />
            <h3>{cake.name}</h3>
            <p>Price: {cake.price}</p>

            <button onClick={() => handleDelete(cake.id)}>Delete</button>


           

            <button >
              <Link to = "/Det" state = {{from:cake}} >Detail </Link>
              
            </button>
          </div>

          




        ))}
      </div>
    </div>

    
    </div>
  );
};

export default Menu;