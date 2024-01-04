import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

export default function SearchBar() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const performSearch = () => {
    if (searchTerm) {
      chrome.search.query({ text: searchTerm, disposition: 'CURRENT_TAB' });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      performSearch();
    }
  };

  return (
    <div className="flex items-center justify-center w-full	mb-16">
      <input
        type="text"
        id="searchBar"
        placeholder={t('search.placeholder')}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
        className="block w-full mr-2 p-2 text-base border rounded"
      />
      <button
        id="searchButton"
        onClick={performSearch}
        className="p-2 bg-black text-base text-white rounded cursor-pointer dark:bg-red-700"
      >
        {t('search.button')}
      </button>
    </div>
  );
}
