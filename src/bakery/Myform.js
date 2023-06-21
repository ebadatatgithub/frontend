import React, { useRef } from "react";

const MyForm = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    formRef.current.style.backgroundColor = "purple";
    formRef.current.style.color = "red";
  };

  return (
    <div>
      <div className="payment-form-container">
        <h2>Payment Details</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input type="text" id="cardNumber" required />
          </div>

          <div className="form-group">
            <label htmlFor="cardHolder">Card Holder</label>
            <input type="text" id="cardHolder" required />
          </div>

          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input type="text" id="expiryDate" required />
          </div>

          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" required />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MyForm;
