import React from "react";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useFilter } from "@/context/FilterContext";

function Navbar() {
  const router = useRouter();
  const { setFilter } = useFilter();

  return (
    <>
      <Box backgroundColor="gray.600" height={53} opacity="0.6"></Box>
      <Box
        ml={5}
        className="home"
        onClick={() => {
          router.push("/");
          setFilter("");
        }}
      ></Box>
    </>
  );
}

export default Navbar;
