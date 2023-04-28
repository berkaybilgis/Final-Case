import React from "react";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useFilter } from "@/context/FilterContext";

function Navbar() {
  const router = useRouter(); // next.js router çağırıldı
  const { setFilter } = useFilter(); // context üzerinden setFilter alındı

  return (
    <>
      <Box backgroundColor="gray.600" height={53} opacity="0.6"></Box>
      <Box
        ml={5}
        className="home"
        onClick={() => {
          router.push("/"); // helmet logosuna tıklandığında ana sayfaya gider
          setFilter(""); // tıklama yapıldığında filter'ın içeriğini temizler
        }}
      ></Box>
    </>
  );
}

export default Navbar;
