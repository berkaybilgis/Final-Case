import React from "react";
import { Button, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useFilter } from "@/context/FilterContext";

function Navbar() {
  const router = useRouter();
  const { setFilteredShips } = useFilter();

  const handleHome = () => {
    setFilteredShips(JSON.parse(localStorage.getItem("allShips")));
  };

  return (
    <Box backgroundColor="gray.800" height={53} textAlign="left">
      <Button
        colorScheme="gray.800"
        mt={1}
        pl={10}
        onClick={() => {
          handleHome();
          router.push("/");
        }}
      >
        Home
      </Button>
    </Box>
  );
}

export default Navbar;
