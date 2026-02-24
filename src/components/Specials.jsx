import React from 'react';
import MealCard from './MealCard';

const Specials = () => {
  const meals = [
    { 
      name: 'Spicy Tilapia Pepper Soup', 
      description: 'A comforting and spicy soup with fresh tilapia fish, local herbs and spices.', 
      price: '₦4,500', 
      img: '/tilapia.png' 
    },
    { 
      name: 'Jollof Rice & Fried Chicken', 
      description: 'Our signature smoky Jollof rice served with spicy fried chicken and fried plantain.', 
      price: '₦3,500', 
      img: '/jollof-delight.png' 
    },
    { 
      name: 'Jollof Rice & Fried Chicken', 
      description: 'Our signature smoky Jollof rice served with spicy fried chicken and fried plantain.', 
      price: '₦3,500', 
      img: '/jollof-delight.png' 
    },
    { 
      name: 'Jollof Rice & Smoked Chicken', 
      description: 'Our signature Jollof rice, cooked to perfection, served with succulent Smoked chicken.', 
      price: '₦3,500', 
      img: '/jollof.png' 
    },
    { 
      name: 'Jollof Rice & Fried Chicken', 
      description: 'Our signature smoky Jollof rice served with spicy fried chicken and fried plantain.', 
      price: '₦3,500', 
      img: '/jollof-delight.png' 
    },
    { 
      name: 'Egusi Soup & Pounded Yam', 
      description: 'Fluffy pounded yam served with rich Egusi soup containing melon seeds and spinach.', 
      price: '₦5,000', 
      img: '/egusi&poundo.png' 
    }
  ];

  return (
    <section className="px-6 md:px-16 py-16 bg-[#FFFFFF]">
      <h2 
        className="text-3xl font-bold text-center mb-12 text-[#1A202C]" 
        style={{ fontFamily: 'Inter' }}
      >
        Chef's Specials
      </h2>
      
      {/* Grid: 1 column on mobile, 3 columns on large screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {meals.map((meal, index) => (
          <MealCard key={index} {...meal} />
        ))}
      </div>
    </section>
  );
};

export default Specials;