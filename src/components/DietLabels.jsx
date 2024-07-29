import { Flex, SimpleGrid, Tag, Text } from "@chakra-ui/react";

export const DietLabels = ({ recipe, recipePage }) => {
  const recipeDietLabels = recipe.dietLabels.map((label) => (
    <Tag key={label} variant="diet">
      {label}
    </Tag>
  ));

  return (
    recipeDietLabels.length != 0 &&
    (recipePage ? (
      <>
        <Text fontSize="sm">Diet labels:</Text>
        <SimpleGrid minChildWidth="127px" spacing="5px">
          {recipeDietLabels}
        </SimpleGrid>
      </>
    ) : (
      <Flex justify="center" wrap="wrap" gap="5px">
        {recipeDietLabels}
      </Flex>
    ))
  );
};
