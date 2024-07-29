import { Flex, SimpleGrid, Tag, Text } from "@chakra-ui/react";

export const HealthLabels = ({ recipe, recipePage }) => {
  const vegan = recipe.healthLabels.find((label) => label === "Vegan");
  const vegetarian = recipe.healthLabels.find(
    (label) => label === "Vegetarian"
  );
  const pescatarian = recipe.healthLabels.find(
    (label) => label === "Pescatarian"
  );
  const partialHealthLabelArray = [
    vegan && (
      <Tag key="vegan" variant="health">
        {vegan}
      </Tag>
    ),
    vegetarian && (
      <Tag key="vegetarian" variant="health">
        {vegetarian}
      </Tag>
    ),
    pescatarian && (
      <Tag key="pescatarian" variant="health">
        {pescatarian}
      </Tag>
    ),
  ].filter((label) => label != undefined);

  return recipePage ? (
    <>
      <Text fontSize="sm">Health labels:</Text>
      <SimpleGrid minChildWidth={120} spacing="5px">
        {recipe.healthLabels.map((label) => (
          <Tag key={label} variant="health">
            {label}
          </Tag>
        ))}
      </SimpleGrid>
    </>
  ) : (
    partialHealthLabelArray.length != 0 && (
      <Flex justify="center" wrap="wrap" gap="5px">
        {partialHealthLabelArray}
      </Flex>
    )
  );
};
