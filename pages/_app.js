import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { FilterProvider } from "@/context/FilterContext";
import Navbar from "@/components/Navbar";
import { Box } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <FilterProvider>
      <ChakraProvider>
        <Box
          bg="url('/GCJRhiA.png')"
          backgroundRepeat="repeat"
          minHeight="100vh"
        >
          <Navbar />
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </FilterProvider>
  );
}
