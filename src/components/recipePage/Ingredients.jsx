import { ListItem, Text, UnorderedList } from "@chakra-ui/react";

export const Ingredients = ({ recipe }) => {
  const ingredientList = recipe.ingredientLines.map((ingredient) => (
    <ListItem key={ingredient}>{ingredient}</ListItem>
  ));

  return (
    <>
      <Text fontWeight="bold">Ingredients:</Text>
      <UnorderedList styleType="none" marginStart={{ base: "1em", md: 0 }}>
        {ingredientList}
      </UnorderedList>
    </>
  );
};
