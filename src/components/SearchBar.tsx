import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function SearchBar() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const performSearch = () => {
    if (searchTerm) {
      chrome.search.query({ text: searchTerm, disposition: "CURRENT_TAB" });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      performSearch();
    }
  };

  return (
    <div className="flex justify-center items-center mb-6 md:mb-16 lg:mb-24">
      <div className="flex justify-between w-full lg:w-auto items-center border-2 border-gray-300 h-12 px-5 rounded-full text-base shadow-md">
        <input
          type="search"
          name="search"
          placeholder={t("search.placeholder")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
          autoFocus
          className="outline-none border-none flex-1 md:w-72 bg-transparent dark:text-white"
        />
        <button type="submit" className="ml-4" onClick={performSearch}>
          <MagnifyingGlassIcon className="text-gray-600 h-5 w-5 dark:text-white" />
        </button>
      </div>
    </div>
  );
}
