import React, { useState } from 'react';
import FoodCard from '../components/FoodCard';
import menuHero from '../assets/menu-hero.png'; 

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState("Popular");

  // Data structure with unique descriptions for each item
  const menuData = {
    "Popular": [
      { name: "Jollof Rice & Fried Chicken", price: "₦3,500", img: "/jollof-delight.png", desc: "Our signature Jollof rice, served with crispy fried chicken and plantain." },
      { name: "Eba & Egusi Soup (Goat Meat)", price: "₦5,500", img: "/explore/eba-egusi.png", desc: "Hearty Egusi soup with tender goat meat, served with soft Eba." },
      { name: "Pounded Yam & Efo-riro", price: "₦4,500", img: "/explore/poundo-edik.png", desc: "Traditional pounded yam with rich, leafy Edikaikong soup." },
      { name: "Peppered Snail", price: "₦6,000", img: "/explore/snail.png", desc: "Spicy and savory peppered snail, perfect as a starter." },
      { name: "Grilled Tilapia Fish", price: "₦7,500", img: "/explore/tilapia.png", desc: "Whole grilled tilapia seasoned with our special spices." },
      { name: "Jollof Rice & Fried Chicken", price: "₦3,500", img: "/jollof-delight.png", desc: "Our signature Jollof rice, served with crispy fried chicken and plantain." }
    ],
    "Jollof Rice & Entrees": [
      { name: "Jollof Rice & Smoked Fish", price: "₦3,800", img: "/explore/jollof-fish.png", desc: "Flavorful jollof rice served with perfectly smoked fish." },
      { name: "Party Jollof (Veg)", price: "₦2,500", img: "/jollof-delight.png", desc: "Vegetarian party jollof, full of rich flavors." },
      { name: "Fried Rice & Gizzard", price: "₦4,200", img: "/jollof-delight.png", desc: "Vegetarian party jollof, full of rich flavors." }
    ],
    "Swallow & Soups": [
      { name: "Amala with Gbegiri & Ewedu", price: "₦3,000", img: "/explore/amala.png", desc: "Classic Amala served with Gbegiri (beans) and Ewedu (jute leaf) soup." },
      { name: "Fufu & Okra Soup (Fish)", price: "₦3,500", img: "/explore/fufu.png", desc: "Light Fufu served with fresh okra soup and tilapia fish." },
      { name: "Pounded Yam & Edikang-Ikong", price: "₦5,500", img: "/explore/fufu.png", desc: "Light Fufu served with fresh okra soup and tilapia fish." }
    ]
  };

  return (
    <main className="pb-20 bg-[#F3F4F6]">
      {/* 1. Hero Section */}
      <header className="relative h-[450px] flex items-center px-6 md:px-16 overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${menuHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="relative z-10 text-white">
          <h1 className="text-4xl font-bold" style={{ fontFamily: 'Inter' }}>Chuks Kitchen</h1>
          <p className="text-lg opacity-90 mt-2" style={{ fontFamily: 'Inter' }}>
            Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)
          </p>
        </div>
      </header>

      {/* 2. Category Dropdown Section */}
      <section className="px-6 md:px-16 py-8 flex justify-center">
        <div className="relative w-full bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className='font-bold text-gray-800 mb-3' style={{ fontFamily: 'Inter' }}>Menu Category</h2>
          <select 
            value={selectedCategory}
            className="w-full p-4 border border-gray-200 rounded-lg appearance-none bg-gray-50 font-semibold text-gray-700 outline-none focus:border-[#FF7A18]"
            style={{ fontFamily: 'Inter' }}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="Popular">Popular</option>
            <option value="Jollof Rice & Entrees">Jollof Rice & Entrees</option>
            <option value="Swallow & Soups">Swallow & Soups</option>
            <option value="Grills & BBQ">Grills & BBQ</option>
            <option value="Desserts">Desserts</option>
            <option value="Beverages">Beverages</option>
          </select>
        </div>
      </section>

      {/* 3. Food Grid Sections */}
      <div className="px-6 md:px-16 space-y-20">
        {Object.entries(menuData).map(([categoryTitle, items]) => (
          <section key={categoryTitle}>
            <h2 className="text-2xl font-bold pb-2  inline-block" style={{ fontFamily: 'Inter' }}>
              {categoryTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {items.map((item, idx) => (
                <FoodCard 
                  key={idx} 
                  name={item.name} 
                  price={item.price} 
                  img={item.img} 
                  description={item.desc} 
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Explore;