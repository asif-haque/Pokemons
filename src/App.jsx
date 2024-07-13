import React from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import { SearchContextProvider } from "./contexts/SearchContext";

const App = () => {
  return (
    <SearchContextProvider>
      <Navbar />
      <div className="h-[4rem]" />
      <div className="w-[95%] m-auto">
        <Cards />
      </div>
    </SearchContextProvider>
  );
};

export default App;
