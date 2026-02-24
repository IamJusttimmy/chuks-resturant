import React from 'react';

const Categories = () => {
  const categories = [
    { id: 1, name: 'Jollof Delights', img: '/jollof-delight.png' },
    { id: 2, name: 'Swallows & Soups', img: '/swallow&soup.png' },
    { id: 3, name: 'Grills & BBQ', img: '/grill&bbq.png' },
    { id: 4, name: 'Sweet Treats', img: '/sweet&treats.png' },
    { id: 5, name: 'Jollof Delights', img: '/jollof-delight.png' },
    { id: 6, name: 'Jollof Delights', img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=500' },
  ];

  return (
    <section className="px-6 md:px-16 py-12 bg-white">
      <h2 className="text-2xl font-bold text-center mb-10" style={{ fontFamily: 'Inter' }}>
        Popular Categories
      </h2>
      
      {/* Grid set to 3 columns on desktop to match the required "3 in a row" layout */}
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
        style={{ gap: '50px' }} // Exactly as per Figma detail
      >
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className="flex flex-col items-center bg-white shadow-sm border border-gray-100 transition-all hover:shadow-md"
            style={{ 
              width: '360px',       // Figma Width
              height: '393px',      // Figma Height
              opacity: '1',         // Figma Opacity
              borderRadius: '14px', // Figma Border-radius
              padding: '2px 2px 85px 2px',
              margin: '0 auto',
              gap: '70px'
            }}
          >
            {/* Image section with the same border radius */}
            <div className="w-full h-full overflow-hidden" style={{ borderRadius: '14px 14px 0 0' }}>
              <img 
                src={cat.img} 
                alt={cat.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Category Name */}
            <p 
              className="mt-8 font-semibold text-xl text-[#1A202C]" 
              style={{ fontFamily: 'Inter' }}
            >
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;