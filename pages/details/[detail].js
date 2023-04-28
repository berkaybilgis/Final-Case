import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Image, Heading, Text, Center } from "@chakra-ui/react";
import { useFilter } from "@/context/FilterContext";
import { BiArrowBack } from "react-icons/bi"; // react-icons kütüphanesinden icon alındı
import images from "../../Images.json";

function Detail() {
  const [starship, setStarship] = useState(null); // starship verisini tutan state
  const { setFilteredShips } = useFilter(); // context üzerinden setFilteredShips alındı
  const router = useRouter(); // next.js router çağırıldı

  // sayfa yüklendiğinde localStorage'dan selectedShip verisini alıp starship'e aktaran fonksiyon
  useEffect(() => {
    setStarship(JSON.parse(localStorage.getItem("selectedShip")));
  }, []);

  // back butonuna tıklandığında localStorage'dan filteredShips verisini alıp context'deki filteredShips'e aktarır
  const handleBackButton = () => {
    setFilteredShips(JSON.parse(localStorage.getItem("filteredShips")));
  };

  return (
    <div>
      {/* Back butonu oluşturuldu */}
      <button
        className="detail-btn"
        onClick={() => {
          router.back(); // butona tıklandığında bir önceki sayfaya gider
          handleBackButton(); // butona tıklandığında handleBackButton fonskiyonu çalışır
        }}
      >
        <BiArrowBack />
      </button>

      {/* detay verilerini gösteren Card oluşturuldu */}
      <Center>
        <Box
          className="card-detail"
          backgroundColor="gray.700"
          border="3px solid"
          borderColor="white"
          borderRadius={25}
          textAlign="center"
          mt={140}
          mb={10}
          width="33%"
          minWidth={[275, 300, 500]}
          minHeight="100%"
        >
          {/* başlık oluşturuldu */}
          <Heading
            className="title"
            size="lg"
            color="white"
            pl="5px"
            pr="5px"
            mt={5}
          >
            {starship?.name}
          </Heading>
          {/* image oluşturuldu */}
          <Image
            src={images.find((item) => item.name === starship?.name)?.img} // images.json dosyasından isim eşleştirmesine göre resimler çekildi
            alt="starship"
            height={250}
            width="100%"
            pt={5}
            pl={5}
            pr={5}
            borderRadius={50}
          />

          <Box className="text-area" mt="5" mb={10} fontSize={18}>
            {/* Model bölümü oluşturuldu */}
            <Box pl="25px" pr="25px" color="white">
              <Text display="inline" fontWeight="medium">
                Model :
              </Text>{" "}
              <Text display="inline">{starship?.model}</Text>
            </Box>

            {/* Hyperdrive Rating bölümü oluşturuldu */}
            <Box pl="25px" pr="25px" mt="2" color="white">
              <Text display="inline" fontWeight="medium">
                Hyperdrive Rating :
              </Text>{" "}
              {starship?.hyperdrive_rating}
            </Box>

            {/* Passengers bölümü oluşturuldu */}
            <Box pl="25px" pr="25px" mt="2" color="white">
              <Text display="inline" fontWeight="medium">
                Passengers :
              </Text>{" "}
              {starship?.passengers}
            </Box>

            {/* Max Atmosphering Speed bölümü oluşturuldu */}
            <Box pl="25px" pr="25px" mt="2" color="white">
              <Text display="inline" fontWeight="medium">
                Max Atmosphering Speed :
              </Text>{" "}
              {starship?.max_atmosphering_speed}
            </Box>

            {/* Manufacturer bölümü oluşturuldu */}
            <Box pl="25px" pr="25px" mt="2" color="white">
              <Text display="inline" fontWeight="medium">
                Manufacturer :
              </Text>{" "}
              {starship?.manufacturer}
            </Box>

            {/* Crew bölümü oluşturuldu */}
            <Box pl="25px" pr="25px" mt="2" color="white">
              <Text display="inline" fontWeight="medium">
                Crew :
              </Text>{" "}
              {starship?.crew}
            </Box>

            {/* Cargo Capacity bölümü oluşturuldu */}
            <Box pl="25px" pr="25px" mt="2" color="white">
              <Text display="inline" fontWeight="medium">
                Cargo Capacity :
              </Text>{" "}
              {starship?.cargo_capacity}
            </Box>
          </Box>
        </Box>
      </Center>
    </div>
  );
}

export default Detail;
