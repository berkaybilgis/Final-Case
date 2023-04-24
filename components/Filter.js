import { useState, useEffect } from "react";
import {
  Input,
  InputGroup,
  FormLabel,
  FormControl,
  Button,
} from "@chakra-ui/react";

function Filter() {
  return (
    <div>
      <FormControl>
        <InputGroup mt="10" justifyContent="center">
          <FormLabel mt="2">Name / Modal</FormLabel>
          <Input type="text" placeholder="Name / Model" width="sm" />
          <Button
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
      </FormControl>
    </div>
  );
}

export default Filter;
