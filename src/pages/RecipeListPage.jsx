import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { Search } from "../components/Search";
import { MatchedRecipeGrid } from "../components/MatchedRecipeGrid";

export const RecipeListPage = ({ recipeList, clickFn }) => {
  const [searchField, setSearchField] = useState("");
  const [veganFilter, setVeganFilter] = useState(false);
  const [vegetFilter, setVegetFilter] = useState(false);
  const [pescFilter, setPescFilter] = useState(false);

  const handleSearchChange = (event) => setSearchField(event.target.value);
  const handleVeganFilterChange = () => setVeganFilter(!veganFilter);
  const handleVegetFilterChange = () => setVegetFilter(!vegetFilter);
  const handlePescFilterChange = () => setPescFilter(!pescFilter);

  const veganRecipeList = () => {
    if (veganFilter) {
      return recipeList.filter(({ recipe }) =>
        recipe.healthLabels.includes("Vegan")
      );
    } else return recipeList;
  };

  const vegetRecipeList = () => {
    if (vegetFilter) {
      return veganRecipeList().filter(({ recipe }) =>
        recipe.healthLabels.includes("Vegetarian")
      );
    } else return veganRecipeList();
  };

  const pescRecipeList = () => {
    if (pescFilter) {
      return vegetRecipeList().filter(({ recipe }) =>
        recipe.healthLabels.includes("Pescatarian")
      );
    } else return vegetRecipeList();
  };

  const matchedRecipes = pescRecipeList().filter(({ recipe }) => {
    const matchesName = recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
    const matchesHealthLabels = recipe.healthLabels.some((label) =>
      label.toLowerCase().includes(searchField.toLowerCase())
    );
    const matchesIngredients = recipe.ingredientLines.some((ingredient) =>
      ingredient.toLowerCase().includes(searchField.toLowerCase())
    );
    return matchesName || matchesHealthLabels || matchesIngredients;
  });

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      p={{ base: "5vw", md: "3vw", xl: "2vw" }}
    >
      <Search
        changeSearchFn={handleSearchChange}
        changeVeganFilterFn={handleVeganFilterChange}
        changeVegetFilterFn={handleVegetFilterChange}
        changePescFilterFn={handlePescFilterChange}
      />
      <MatchedRecipeGrid matchedRecipes={matchedRecipes} clickFn={clickFn} />
    </Flex>
  );
};
