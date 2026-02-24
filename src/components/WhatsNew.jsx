const WhatsNew = () => {
  return (
    <header className="relative h-[550px] flex items-center px-6 md:px-16 overflow-hidden">
  
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/what-new.png')`
        }}
      ></div>

      <div className="relative z-10 text-[#ffffff] max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'Inter, san-serif' }}>
          Introducing Our New Menu Additions!
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed max-w-md" style={{ fontFamily: 'Inter, san-serif' }}>
          Explore exciting new dishes, crafted with the freshest ingredients and authentic Nigerian flavors. Limited time offer!
        </p>
        
        <button 
          style={{ 
            backgroundColor: '#FF7A18',
            fontFamily: 'Inter, san-serif',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '24px'
          }}
          className="text-[#ffffff] px-6 py-3 rounded-lg transition-transform hover:scale-105"
        >
          Discover what’s new
        </button>
      </div>
    </header>
  );
};

export default WhatsNew;