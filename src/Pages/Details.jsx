import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const loaderdetails = useLoaderData();
    const { _id, imageUrl, author, category, description, name
        , quantity, rating } = loaderdetails;
    return (
        <div className="grid p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="h-48">
            <img className="object-cover w-full h-full" src={imageUrl} alt={name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg font-bold">{name}</h2>
            <p className="text-gray-500">Author: { author}</p>
            <p className="text-gray-500">Category: { category}</p>
            <p className="text-gray-500">Rating: { rating}</p>
            <p className="text-gray-500">{ description}</p>
          </div>
        </div>
      </div>
    );
};

export default Details;