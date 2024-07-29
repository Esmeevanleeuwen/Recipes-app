import { SimpleGrid } from "@chakra-ui/react";
import { RecipeCard } from "./RecipeCard";

export const MatchedRecipeGrid = ({ matchedRecipes, clickFn }) => {
  const matchedRecipeList = matchedRecipes.map(({ recipe }) => (
    <RecipeCard key={recipe.label} recipe={recipe} clickFn={clickFn} />
  ));
  return (
    <SimpleGrid
      width="100%"
      minChildWidth={{ base: "250px", lg: "300px" }}
      spacing={{ base: "5vw", md: "3vw", xl: "2vw" }}
    >
      {matchedRecipeList}
    </SimpleGrid>
  );
};
