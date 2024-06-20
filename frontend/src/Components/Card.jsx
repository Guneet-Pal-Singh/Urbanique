import React from 'react';
import { Link } from 'react-router-dom';

function CardTwo({ name, description, imageUrl,link }) {
  return (
    <Link to={link} className="w-full sm:w-[50vw] rounded-md border border-slate-950 focus:outline-none hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 block no-underline">
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="h-[30vh] w-full rounded-md object-cover"
        />
      </div>
      <div className="p-4">
        <h1 className="text-lg font-semibold">{name}</h1>
        <p className="mt-3 text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  );
}

export default CardTwo;
