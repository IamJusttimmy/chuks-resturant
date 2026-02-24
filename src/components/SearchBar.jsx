const SearchBar = () => {
  return (
    <div className="flex justify-center -translate-y-1/2 px-4">
      <div className="bg-[#ffffff] shadow-2xl rounded-lg flex items-center px-6 py-5 w-full max-w-3xl border border-gray-100">
        <span className="mr-3 opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
        <input 
          type="text" 
          placeholder="What are you craving for today?" 
          className="w-full outline-none text-lg text-gray-700 placeholder:text-gray-400"
          style={{ fontFamily: 'Inter' }}
        />
      </div>
    </div>
  );
};

export default SearchBar;