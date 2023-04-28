import React from "react";
import Image from "next/image";
import { Center } from "@chakra-ui/react";

function Header() {
  return (
    // header oluşturuldu
    <Center mt={5}>
      <Image
        src="/starwarstext.png"
        alt="starwars"
        width="500"
        height="220"
        priority={true}
      />
    </Center>
  );
}

export default Header;
