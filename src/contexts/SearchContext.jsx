import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const updateSearchQuery = (query) => {
    setSearchQuery(query);
  };

  return (
    <SearchContext.Provider value={{ searchQuery, updateSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};

export { SearchContext, SearchContextProvider };
