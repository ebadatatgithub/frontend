import { useState } from "react";
import './menu.css';
import  { useLocation } from "react-router-dom";
import React, { useMemo } from 'react';
import Menu from "./Menu";




const  Det = () => {

    
    // const calculateTotalPrice = (cake) => {
        
    //     return cake.price * 1.1; 
    //   };
      
    //     const totalPrice = useMemo(() => calculateTotalPrice(cake), [cake]);

    const Location = useLocation();
    const { from } = Location.state;
    console.log("from", from);


    return (
        <>
            <div class="image">
                <img src={from.image} alt={from.name} height="350px" width="250px%" />
            </div>



            <div class="col-2">

                <p>{from.price}</p>
                <h1>{from.name}</h1>

                <img src={from.image} alt="" width="80px" />



                <select>
                    <option value="">Size Chart</option>
                    <option value="">1 pound</option>
                    <option value="">2 pound</option>
                    <option value="">3 pound</option>

                    

                </select>

                <button className="button">add to</button>
                <button className="button">Buy it</button>



            </div>
        </>

    );
}
export default Det;