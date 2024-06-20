import React, { useState } from 'react';
import TopBar from './Components/Top_bar2';
import ProductThree from './Components/Card_shop_list.jsx';
import Payment from './Components/payment.jsx'; // Corrected import statement
import './Men_tee.css';

const Men_tshirts = () => {
  const imagesRow1 = [
    'src/Images/tshirt1.png', 'src/Images/tshirt2.jpg', 'src/Images/tshirt3.jpg'
  ];

  const imagesRow2 = [
    'src/Images/tshirt4.jpg', 'src/Images/tshirt5.jpg', 'src/Images/tshirt6.jpg'
  ];

  const imagesRow3 = [
    'src/Images/adidas.png', 'src/Images/adidas.png', 'src/Images/adidas.png'
  ];

  

  return (
    <div className="bg-gray-200">
      <TopBar />
      <h1 className="heading text-center mt-10 mb-10 font-bold">MEN'S T-SHIRTS</h1>
      <div className="product-row">
        <ProductThree images={imagesRow1} Company="Adidas" desc="asd" price="500" />
      </div>
      <br />
      <br />
      <div className="product-row">
        <ProductThree images={imagesRow2} Company="Adidas" desc="asd" price="500"/>
      </div>
      <br />
      <br />
      <div className="product-row">
        <ProductThree images={imagesRow3} Company="Adidas" desc="asd" price="500"/>
      </div>
      
      {/* <Pay/ment orderedItems={orderedItems} /> Corrected component reference */}
    </div>
  );
}

export default Men_tshirts;
