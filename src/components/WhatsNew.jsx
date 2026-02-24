const WhatsNew = () => {
  return (
    <header className="relative h-[550px] flex items-center px-6 md:px-16 overflow-hidden">
  
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/hero-bg.jpg')`
        }}
      ></div>

      <div className="relative z-10 text-[#ffffff] max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'Inter' }}>
          The Heart of Nigerian Home Cooking
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90" style={{ fontFamily: 'Inter' }}>
          Handcrafted with passion, delivered with care.
        </p>
        
        <button 
          style={{ 
            backgroundColor: '#FF7A18',
            fontFamily: 'Inter',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '24px'
          }}
          className="text-[#ffffff] px-8 py-3 rounded-lg transition-transform hover:scale-105"
        >
          Explore menu
        </button>
      </div>
    </header>
  );
};

export default WhatsNew;