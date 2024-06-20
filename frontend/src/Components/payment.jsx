import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate hook

import './Payment.css'; // Import CSS file

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate hook instead of useHistory
  const [showPopup, setShowPopup] = useState(false);

  const handleCancelOrder = () => {
    // You can add your cancellation logic here
    // For demonstration, let's just show the popup and go back to previous page after 2 seconds
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate(-1); // Navigate back to previous page
    }, 2000);
  };

  return (
    <div className="payment-container">
      <p className="payment-price">Order Placed</p>
      <img className="payment-image" src={location.state.imageUrl} alt="Product" />
      <p className="payment-price">Price: Rs. {location.state.price}</p>
      <button onClick={handleCancelOrder} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Cancel Order
      </button>
      {showPopup && (
        <div className="popup">
          <p>Order Canceled!</p>
        </div>
      )}
    </div>
  );
};

export default Payment;
