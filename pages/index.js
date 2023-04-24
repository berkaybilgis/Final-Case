import Container from "@/components/Container";
import Filter from "@/components/Filter";
import Header from "@/components/Header";
import { FilterProvider } from "@/context/FilterContext";

export default function Home() {
  return (
    <FilterProvider>
      <Header />
      <Filter />
      <Container />
    </FilterProvider>
  );
}
