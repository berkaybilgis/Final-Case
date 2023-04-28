import { useState } from "react";
import {
  Input,
  InputGroup,
  FormLabel,
  FormControl,
  Button,
  Alert,
  AlertIcon,
  Box,
} from "@chakra-ui/react";
import { useFilter } from "@/context/FilterContext";

function Filter() {
  const [search, setSearch] = useState("");
  const [alert, setAlert] = useState("");
  const { setFilter } = useFilter();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedSearch = search.trim();
    trimmedSearch
      ? (setFilter(trimmedSearch), setAlert(""))
      : setAlert("error");

    setSearch("");
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormControl>
          <InputGroup mt="10" justifyContent="center">
            <FormLabel mt="2" color="white">
              Name / Modal
            </FormLabel>
            <Input
              type="text"
              placeholder="Name / Model"
              color="white"
              value={search}
              width="sm"
              onChange={(e) => handleChange(e)}
            />

            <Button
              type="submit"
              colorScheme="blue"
              ml="3"
              pl="7"
              pr="7"
              size="md"
              borderRadius="10"
            >
              Filter
            </Button>
          </InputGroup>
          {alert ? (
            <Box textAlign="center" mt={2} maxWidth={330} mx="auto">
              <Alert status={alert} borderRadius={7}>
                <AlertIcon />
                Please type what you want to search!
              </Alert>
            </Box>
          ) : null}
        </FormControl>
      </form>
    </div>
  );
}

export default Filter;
