import React from 'react';

const MealCard = ({ name, description, price, img }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
      {/* Image Container */}
      <div className="h-56 overflow-hidden">
        <img 
          src={img} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow text-center">
        <h3 
          className="font-bold text-xl mb-3 text-[#1A202C]" 
          style={{ fontFamily: 'Inter' }}
        >
          {name}
        </h3>
        
        {/* Only include description if you want to match the Home Screen screenshot details */}
        <p 
          className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed" 
          style={{ fontFamily: 'Inter' }}
        >
          {description}
        </p>
        
        <div className="flex justify-between items-center mt-auto">
          <span 
            className="font-bold text-lg text-[#FF7A18]" 
            style={{ fontFamily: 'Inter' }}
          >
            {price}
          </span>
          <button 
            style={{ 
              backgroundColor: '#FF7A18', 
              fontFamily: 'Inter', 
              fontWeight: '600' 
            }}
            className="text-white px-6 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealCard;