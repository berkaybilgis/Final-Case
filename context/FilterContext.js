import { createContext, useContext } from "react";
import axios from "axios";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const values = {};

  return (
    <FilterContext.Provider value={values}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
