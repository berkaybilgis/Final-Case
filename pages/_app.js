import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { FilterProvider } from "@/context/FilterContext";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <FilterProvider>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </FilterProvider>
  );
}
