import { Flex, Input, Checkbox, Stack } from "@chakra-ui/react";

export const Search = ({
  changeSearchFn,
  changeVeganFilterFn,
  changeVegetFilterFn,
  changePescFilterFn,
}) => {
  return (
    <Flex
      direction="column"
      mb={{ base: "5vw", md: "3vw", xl: "2vw" }}
      width={{ base: "100%", sm: "70%", md: "500px" }}
      gap="5px"
      alignItems={["start", "center"]}
    >
      <Input
        onChange={changeSearchFn}
        placeholder="Search for recipes"
        width="100%"
      />
      <Stack
        direction={["column", "row"]}
        width="100%"
        marginLeft={["20px", "0px"]}
        alignItems="start"
      >
        <Checkbox value="vegan" onChange={changeVeganFilterFn}>
          Vegan
        </Checkbox>
        <Checkbox value="vegetarian" onChange={changeVegetFilterFn}>
          Vegetarian
        </Checkbox>
        <Checkbox value="pescatarian" onChange={changePescFilterFn}>
          Pescatarian
        </Checkbox>
      </Stack>
    </Flex>
  );
};
