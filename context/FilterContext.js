import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState("");
  const [ships, setShips] = useState([]);
  const [filteredShips, setFilteredShips] = useState([]);

  const url = "https://swapi.dev/api/starships/?page";

  useEffect(() => {
    async function fetchData() {
      try {
        let i;
        let allShips = [];
        for (i = 1; i < 5; i++) {
          const response = await axios.get(`${url}=${i}`);
          allShips = [...allShips, ...response.data?.results];
        }
        setShips(allShips);
        setFilteredShips(allShips);
        localStorage.setItem("allShips", JSON.stringify(allShips));
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = ships.filter((ship) => {
      if (!filter) {
        return ship;
      }
      return (
        ship.name.toLowerCase().includes(filter.toLowerCase()) ||
        ship.model.toLowerCase().includes(filter.toLowerCase())
      );
    });

    setFilteredShips(filtered);
    localStorage.setItem("filteredShips", JSON.stringify(filtered));
  }, [filter, ships]);

  const values = {
    ships: filteredShips,
    setShips,
    setFilteredShips,
    setFilter,
    filter,
  };

  return (
    <FilterContext.Provider value={values}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
