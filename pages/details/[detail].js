import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Button,
  Box,
  Image,
  Heading,
  Text,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { useFilter } from "@/context/FilterContext";
import { BiArrowBack } from "react-icons/bi";

function Detail() {
  const [starship, setStarship] = useState(null);
  const { setFilteredShips } = useFilter();
  const router = useRouter();

  useEffect(() => {
    setStarship(JSON.parse(localStorage.getItem("selectedShip")));
  }, []);

  const handleBackButton = () => {
    setFilteredShips(JSON.parse(localStorage.getItem("filteredShips")));
  };

  console.log(starship);

  return (
    <div>
      <button
        className="detail-btn"
        onClick={() => {
          router.back();
          handleBackButton();
        }}
      >
        <BiArrowBack />
      </button>

      <Center>
        <Box
          className="Card"
          backgroundColor="gray.800"
          borderRadius={25}
          textAlign="center"
          mt={140}
          mb={10}
          width="33%"
          minWidth={[275, 300, 500]}
          minHeight="100%"
        >
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

          <Image
            src="https://www.denofgeek.com/wp-content/uploads/2019/12/star-wars-jedi-starfighter.jpg?w=1024"
            alt="starship"
            height={250}
            width="100%"
            pt={5}
            pl={5}
            pr={5}
            borderRadius={50}
          />

          <Box className="text-area" mt="5" mb={10} fontSize={18}>
            <Box pl="25px" pr="25px" color="white">
              <Text display="inline" fontWeight="medium">
                Model :
              </Text>{" "}
              <Text display="inline">{starship?.model}</Text>
            </Box>

            <Box pl="25px" pr="25px" mt="2" color="white">
              <Text display="inline" fontWeight="medium">
                Hyperdrive Rating :
              </Text>{" "}
              {starship?.hyperdrive_rating}
            </Box>

            <Box pl="25px" pr="25px" mt="2" color="white">
              <Text display="inline" fontWeight="medium">
                Passengers :
              </Text>{" "}
              {starship?.passengers}
            </Box>

            <Box pl="25px" pr="25px" mt="2" color="white">
              <Text display="inline" fontWeight="medium">
                Max Atmosphering Speed :
              </Text>{" "}
              {starship?.max_atmosphering_speed}
            </Box>

            <Box pl="25px" pr="25px" mt="2" color="white">
              <Text display="inline" fontWeight="medium">
                Manufacturer :
              </Text>{" "}
              {starship?.manufacturer}
            </Box>

            <Box pl="25px" pr="25px" mt="2" color="white">
              <Text display="inline" fontWeight="medium">
                Crew :
              </Text>{" "}
              {starship?.crew}
            </Box>

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
