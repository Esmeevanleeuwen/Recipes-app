import { Flex, SimpleGrid, Tag, Text } from "@chakra-ui/react";

export const Cautions = ({ recipe, recipePage }) => {
  const recipeCautions = recipe.cautions.map((label) => (
    <Tag key={label} variant="caution">
      {label}
    </Tag>
  ));

  return (
    recipeCautions.length != 0 &&
    (recipePage ? (
      <>
        <Text fontSize="sm">Cautions:</Text>
        <SimpleGrid minChildWidth="127px" spacing="5px">
          {recipeCautions}
        </SimpleGrid>
      </>
    ) : (
      <Flex justify="center" wrap="wrap" gap="5px">
        {recipeCautions}
      </Flex>
    ))
  );
};
