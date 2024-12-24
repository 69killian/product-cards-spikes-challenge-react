import React, { useState, useEffect } from 'react';

const Filters = ({ setSearchQuery, setFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState('All Challenges');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    setFilter(event.target.value); // Met à jour le filtre dans App
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Met à jour la recherche dans App
  };

  const handleCleanFilters = () => {
    setSelectedFilter('All Challenges');
    setFilter('All Challenges');
    setSearchQuery('');
  };

  return (
    <div 
      className={`mt-10 flex justify-center items-center px-10  gap-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} 
      style={{ transition: 'opacity 0.5s ease-out' }}
    >
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by title"
        className="font-inter font-medium text-[14.78px] flex items-center justify-center gap-2 border border-solid rounded-[9.83px] w-full sm:w-[337px] h-[35px] relative bg-white  p-[9px] focus:outline focus:outline-2 focus:outline-offset-2"
        onChange={handleSearchChange}
      />
      
      {/* Select Filter */}
      <select
        value={selectedFilter}
        onChange={handleFilterChange}
        className="cursor-pointer font-inter font-medium text-[14.78px] flex items-center justify-center gap-2 border border-solid rounded-[9.83px] w-full sm:w-[337px] h-[35px] relative bg-white p-[9px] focus:outline focus:outline-2 focus:outline-offset-2"
      >
        <option value="All Challenges">All Challenges</option>
        <option value="Premium">Premium</option>
        <option value="Free">Free</option>
      </select>

      {/* Clean Filters Button */}
      <button
        onClick={handleCleanFilters}
        className="font-inter font-medium text-[14.78px] flex items-center justify-center gap-2 border border-solid rounded-[9.83px] w-full sm:w-[337px] h-[35px] relative bg-white transition-all duration-200 ease-in-out hover:shadow-[2px_2px_0px_rgba(0,0,0,0.2)] p-[9px]"
      >
        Clean Filters
      </button>
    </div>
  );
};

export default Filters;
