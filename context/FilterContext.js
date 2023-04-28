import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const FilterContext = createContext(); // context oluşturuldu

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState(""); // filter verilerini tutan state
  const [ships, setShips] = useState([]); // başlangıçta apiden çekilen verileri tutan state
  const [filteredShips, setFilteredShips] = useState([]); // filtreleme sonucunda kalan verileri tutan state

  const url = "https://swapi.dev/api/starships/?page"; // api url

  // sayfa ilk yüklendiğinde apiden verileri çeker
  useEffect(() => {
    async function fetchData() {
      try {
        let i;
        let allShips = []; // for döngüsünden dönen verileri tutar
        for (i = 1; i < 5; i++) {
          const response = await axios.get(`${url}=${i}`); // axios ile apiden veriler alınır
          allShips = [...allShips, ...response.data?.results]; // alınan veriler allShips'e aktarılır
        }
        setShips(allShips); // döngü bitiminde allShips'deki verileri ships'e aktarılır
        setFilteredShips(allShips); // döngü bitiminde allShips'deki verileri filteredShips'e aktarılır
        localStorage.setItem("allShips", JSON.stringify(allShips)); // döngü bitiminde allShips'deki veriler localStorage'a kaydedilir
      } catch (error) {
        console.error(error); // error olması durumunda konsola hata verisini gösterir
      }
    }

    fetchData();
  }, []);

  // gelen filter'a göre filtreleme yapıp bunu filteredShips state'e aktaran fonksiyon
  useEffect(() => {
    const filtered = ships.filter((ship) => {
      if (!filter) {
        return ship;
      }
      return (
        ship.name.toLowerCase().includes(filter.toLowerCase()) || // isime göre filtreleme işlemi
        ship.model.toLowerCase().includes(filter.toLowerCase()) // modele göre filtreleme işlemi
      );
    });

    setFilteredShips(filtered); // filtrelenmiş veriler filteredShips'e aktarıldı
    localStorage.setItem("filteredShips", JSON.stringify(filtered)); // filtrelenmiş veriler localStorage'a kaydedildi
  }, [filter, ships]);

  // provider ile diğer componentlara gönderilen değerler
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

export const useFilter = () => useContext(FilterContext); // her sayfada useContext tekrarı oluşmaması açısından useFilter oluşturuldu
