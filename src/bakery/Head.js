
    import React from 'react';
    import './head.css';
    import { Link, useNavigate } from 'react-router-dom';
     
    
    
    const Head = () => {
      const navigate=useNavigate();
      const gotosignup=()=>{
        navigate('/Signup')
      }
      

      return (
        <header className="header">
          <nav className="header-nav">
            
            <ul>
              <li><a href="#">Home</a></li>
              <li><Link to = '/Menu'>Menu</Link></li>
              <li><Link to = '/add'>Add Product</Link></li>

              <li><Link to = '/Contactus'>Contact us</Link></li>
            
              
              <li><a href="#">Add to Cart</a></li>
              <li><Link to = '/MyForm'>Payment</Link></li>
              
              <li><Link to = '/privacypolicy'>PrivacyPolicy</Link></li>
              <li onClick={gotosignup} style={{cursor:'pointer'}}>Sign up</li>
            </ul>
          </nav>
           <div className="header-logo">
            <img src="bor.webp" alt="Logo" />
          </div> 
        </header>
      );
    };
    
    export default Head;
    