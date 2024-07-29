import { SimpleGrid, Text } from "@chakra-ui/react";

export const Info = ({ recipe }) => {
  return (
    <SimpleGrid
      columns="2"
      columnGap="5px"
      gridTemplateColumns={{ base: "1fr 125px", sm: "1fr 1fr" }}
    >
      <Text>Meal type: </Text>
      <Text fontWeight="bold" whiteSpace="pre-line">
        {recipe.mealType.length === 1
          ? recipe.mealType[0]
          : `${recipe.mealType[0]}\n${recipe.mealType[1]}`}
      </Text>
      <Text>Dish type:</Text>
      <Text fontWeight="bold">{recipe.dishType}</Text>
      <Text>Cuisine:</Text>
      <Text fontWeight="bold" textTransform="capitalize" whiteSpace="pre-line">
        {recipe.cuisineType.length === 1
          ? recipe.cuisineType[0]
          : `${recipe.cuisineType[0]}\n${recipe.cuisineType[1]}`}
      </Text>
      <Text>Cooking time:</Text>
      <Text fontWeight="bold">{recipe.totalTime + " minutes"}</Text>
      <Text>Servings:</Text>
      <Text fontWeight="bold">{recipe.yield}</Text>
    </SimpleGrid>
  );
};
