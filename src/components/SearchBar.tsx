import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function SearchBar({ className }: { className?: string }) {
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
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex h-12 w-full items-center justify-between rounded-full border-2 border-gray-300 px-5 text-base shadow-md lg:w-auto">
        <input
          type="search"
          name="search"
          placeholder={t("search.placeholder")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
          autoFocus
          className="flex-1 border-none bg-transparent outline-none md:w-72 dark:text-white"
        />
        <button type="submit" className="ml-4" onClick={performSearch}>
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-600 dark:text-white" />
        </button>
      </div>
    </div>
  );
}
