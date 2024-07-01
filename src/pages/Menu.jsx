import React from 'react';
import { getMenuItems } from '../utils/helper';

function Menu() {
  const items = getMenuItems();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 pt-2">Our Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl hover:bg-gray-200 shadow hover:-translate-y-1"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-52 object-cover rounded mb-4"
            />
            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
            <p className="text-gray-700 mb-2">{item.description}</p>
            <p className="text-green-500 font-bold mb-4">{item.price}</p>
            <button
              type="button"
              className="bg-card2 text-white hover:bg-white hover:text-card2 hover:outline py-2 px-4 rounded w-full"
              onClick={() => alert('Ordered!')}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
