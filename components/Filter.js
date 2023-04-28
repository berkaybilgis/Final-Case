import { useState } from "react";
import {
  Input,
  InputGroup,
  FormLabel,
  FormControl,
  Button,
  Alert,
  AlertIcon,
  Box,
} from "@chakra-ui/react";
import { useFilter } from "@/context/FilterContext";

function Filter() {
  const [search, setSearch] = useState(""); // arama sonuçlarını her değişiklik yapıldığında tutan state
  const [alert, setAlert] = useState(""); // alertin koşula göre değişimini tutan state
  const { setFilter } = useFilter(); // context üzerinden setFilter alındı

  // inputta her değişiklik yapıldığında veriyi search'e ekleyen fonksiyon
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // inputta her submit işlemi yapıldığında search'de tutulan veriyi filter'a aktaran fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedSearch = search.trim(); // search içerisinde başta veya sonda boşluk varsa temizler
    trimmedSearch
      ? (setFilter(trimmedSearch), setAlert("")) // trimmedSearch varsa filter'a eklenir ve alert temizlenir
      : setAlert("error"); // trimmedSearch yoksa alert'e error ataması yapar

    setSearch(""); // submit işlemi her tamamlandığında inputun içerisini temizler
  };

  return (
    <div>
      {/* form'a onSubmit fonksiyonu atandı */}
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormControl>
          <InputGroup mt="10" justifyContent="center">
            <FormLabel mt="2" color="white">
              Name / Modal
            </FormLabel>
            <Input
              type="text"
              placeholder="Name / Model"
              color="white"
              value={search}
              width="sm"
              onChange={(e) => handleChange(e)} // input'a onChange fonksiyonu atandı
            />

            {/* Filter butonu oluşturuldu */}
            <Button
              type="submit"
              colorScheme="blue"
              ml="3"
              pl="7"
              pr="7"
              size="md"
              borderRadius="10"
            >
              Filter
            </Button>
          </InputGroup>

          {/* alert'in olmasına göre görüntülenecek uyarı oluşturuldu */}
          {alert ? (
            <Box textAlign="center" mt={2} maxWidth={330} mx="auto">
              <Alert status={alert} borderRadius={7}>
                <AlertIcon />
                Please type what you want to search!
              </Alert>
            </Box>
          ) : null}
        </FormControl>
      </form>
    </div>
  );
}

export default Filter;
