import { useState } from "react";
import { useRouter } from "next/router";
import {
  SimpleGrid,
  Box,
  Image,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { useFilter } from "@/context/FilterContext";
import Loading from "./Loading";
import images from "../Images.json";

function Container() {
  const { ships, filter } = useFilter(); // context üzerinden ships ve filter alındı
  const [numShown, setNumShown] = useState(10); // gösterilecek item sayısını belirlemek için state oluşturuldu
  const router = useRouter(); // detay sayfasına yönlendirme yapmak için next router çağırıldı

  // her tıklama yapıldığında diğer 10 uzay gemisini de state'e ekleyen fonksiyon
  const handleClick = () => {
    setNumShown((prev) => prev + 10);
  };

  return (
    <div>
      {/* Responsive olması için SimpleGrid kullanıldı ve tanımlamaları yapıldı */}
      <SimpleGrid
        columns={[1, 2, 3, 4, 5]}
        spacing={[25, 25, 25, 25, 35, 50]}
        mt={20}
        mb={15}
        ml={[12, 12, 15, 17, 17, 20]}
        mr={[12, 12, 15, 17, 17, 20]}
      >
        {/* ships içerisindeki verileri numShown sayısına göre sınırlandırıp gösteren card bölümü */}
        {ships &&
          ships.slice(0, numShown).map((ship, i) => (
            <Box
              key={i}
              className="card-container"
              backgroundColor="gray.700"
              border="3px solid"
              borderColor="white"
              borderRadius={25}
              textAlign="center"
              onClick={() => {
                localStorage.setItem("selectedShip", JSON.stringify(ship)); // card'a tıklandığında localStorage'a o anki card verilerini kaydeder
                router.push(`details/${ship.name}`); // card'a tıklandığında o uzay gemisinin adına göre detay sayfasına gider
              }}
              cursor="pointer"
            >
              <Image
                src={images.find((item) => item.name === ship.name)?.img} // images.json dosyasından img alındı
                alt="starship"
                height={200}
                width="100%"
                p={3}
                borderRadius={25}
              />

              {/* Card başlığı oluşturuldu */}
              <Heading
                className="title"
                size="md"
                color="white"
                pl="5px"
                pr="5px"
              >
                {ship.name}
              </Heading>

              {/* Card text bölümü oluşturuldu */}
              <Box className="text-area" mt="3" mb={7}>
                <Box textAlign="left" pl="25px" pr="25px" color="white">
                  <Text display="inline" fontWeight="medium">
                    Model:
                  </Text>{" "}
                  <Text display="inline">{ship.model}</Text>
                </Box>

                <Box textAlign="left" pl="25px" pr="25px" mt="2" color="white">
                  <Text display="inline" fontWeight="medium">
                    Hyperdrive Rating:
                  </Text>{" "}
                  {ship.hyperdrive_rating}
                </Box>
              </Box>
            </Box>
          ))}
      </SimpleGrid>

      {/* belirli sınırlandırmalara göre Load More butonu oluşturuldu */}
      {ships && numShown <= ships.length ? (
        <Box textAlign="center">
          <Button
            onClick={handleClick}
            colorScheme="blue"
            ml="3"
            size="md"
            borderRadius="10"
          >
            Load More
          </Button>
        </Box>
      ) : ships.length !== 0 && ships.length > 10 ? (
        // gösterilecek herhangi bir uzay gemisi kalmadığında gösterilen yazı
        <Box textAlign="Center" color="white">
          There are no more starships left to show.
        </Box>
      ) : (
        ""
      )}

      {/* ships, ships.length ve filter sınırlandırmalarına göre Loading component gösterildi */}
      {ships && ships.length === 0 && !filter && <Loading />}
    </div>
  );
}

export default Container;
