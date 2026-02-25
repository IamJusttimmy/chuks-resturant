import React from 'react';

const FoodCard = ({ name, description, price, img }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full transition-all hover:shadow-lg">
      <div className="h-52 overflow-hidden">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-lg mb-2 text-gray-800" style={{ fontFamily: 'Inter' }}>{name}</h3>
        <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed" style={{ fontFamily: 'Inter' }}>
          {description}
        </p>
        <div className="flex justify-between items-center mt-auto">
          <span className="font-bold text-xl text-[#FF7A18]" style={{ fontFamily: 'Inter' }}>
            {price}
          </span>
          <button className="bg-[#FF7A18] text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold shadow-md hover:bg-[#e66d16] transition-colors">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;