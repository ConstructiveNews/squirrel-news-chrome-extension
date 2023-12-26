import React, { useState } from 'react';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const performSearch = () => {
    if (searchTerm) {
      const googleSearchURL = 'https://www.google.com/search?q=' + encodeURIComponent(searchTerm);
      window.location.href = googleSearchURL;
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      performSearch();
    }
  };

  return (
    <div className="flex items-center justify-center pt-40 mb-24">
      <input
        type="text"
        id="searchBar"
        placeholder="Search on Google"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
        className="mr-2 p-2 border rounded"
      />
      <button
        id="searchButton"
        onClick={performSearch}
        className="p-2 bg-blue-500 text-white rounded cursor-pointer"
      >
        Search
      </button>
    </div>
  );
}
