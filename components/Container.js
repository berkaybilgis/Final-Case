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

function Container() {
  const { ships, filter } = useFilter();
  const [numShown, setNumShown] = useState(10);
  const router = useRouter();

  const handleClick = () => {
    setNumShown((prev) => prev + 10);
  };

  return (
    <div>
      <SimpleGrid
        columns={[1, 2, 3, 4, 5]}
        spacing={[25, 25, 25, 25, 35, 50]}
        mt={20}
        mb={15}
        ml={[12, 12, 15, 17, 17, 20]}
        mr={[12, 12, 15, 17, 17, 20]}
      >
        {ships &&
          ships.slice(0, numShown).map((ship, i) => (
            <Box
              key={i}
              className="Card"
              backgroundColor="gray.800"
              borderRadius={25}
              textAlign="center"
              onClick={() => {
                localStorage.setItem("selectedShip", JSON.stringify(ship));
                router.push(`details/${ship.name}`);
              }}
              cursor="pointer"
            >
              <Image
                src="https://www.denofgeek.com/wp-content/uploads/2019/12/star-wars-jedi-starfighter.jpg?w=1024"
                alt="starship"
                height={200}
                width="100%"
                p={3}
                borderRadius={25}
              />

              <Heading
                className="title"
                size="md"
                color="white"
                pl="5px"
                pr="5px"
              >
                {ship.name}
              </Heading>

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

      {ships && numShown <= ships.length ? (
        <Box textAlign="center" mb={5}>
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
        <Box textAlign="Center" mb={10} fontWeight="bold">
          There are no more starships left to show.
        </Box>
      ) : (
        ""
      )}
      {ships && ships.length === 0 && !filter && <Loading />}
    </div>
  );
}

export default Container;
