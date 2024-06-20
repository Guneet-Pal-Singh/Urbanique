import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Payment from './Payment';
import { useNavigate } from 'react-router-dom';

function ProductThree({ images, Company, desc, price }) {
  // const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  const [imageurl, setUrl] = useState('');
  const [prices, setPrice] = useState('');


  return (
    <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 max-w-7xl">
      {images.map((imageUrl, index) => (
        <div key={index} className="rounded-md border">
          <img
            src={imageUrl}
            alt={`Product ${index + 1}`}
            className="object-cover w-full h-auto sm:h-40 md:h-48 lg:h-48 xl:h-48 2xl:h-48 rounded-md shadow-md"
          />
          <div className="p-2 text-center bg-slate-100">
            <h1 className="inline-flex items-center text-md font-semibold">{Company}</h1>
            <p className="mt-2 text-xs text-gray-600">{desc}</p>
            <p className="mt-2 text-xs text-gray-600">Rs. {price}</p>
            <button
              onClick={() => {
                setUrl(imageUrl);
                setPrice(price);
                navigate('/payment', { replace: true, state: { imageUrl, price } });
              }}
              className="mt-2 w-full rounded-sm bg-black px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
      {/* {selectedProduct && <Payment image={selectedProduct.image} price={selectedProduct.price} />} */}
    </div>
  );
}

ProductThree.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  Company: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired, // Assuming price is a number, not a string
};

export default ProductThree;
