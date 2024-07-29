import { DietLabels } from "./DietLabels";
import { Cautions } from "./Cautions";
import { HealthLabels } from "./HealthLabels";
import {
  Container,
  Image,
  Text,
  AspectRatio,
  Flex,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";

export const RecipeCard = ({ recipe, clickFn }) => {
  return (
    <Container
      cursor={"pointer"}
      onClick={() => clickFn(recipe)}
      background="palette.yellowDark"
      borderRadius="10px"
      padding={0}
    >
      <AspectRatio ratio={3 / 2}>
        <Image
          src={recipe.image}
          alt={"Picture of " + recipe.label}
          width="100%"
          borderTopRadius="10px"
        />
      </AspectRatio>
      <Flex
        padding={["5%", "15px"]}
        flexDir="column"
        rowGap="5px"
        alignItems="center"
      >
        <Text fontSize="1.4em" fontWeight="bold" textAlign="center">
          {recipe.label}
        </Text>

        <Divider />

        <HealthLabels recipe={recipe} recipePage={false} />
        <DietLabels recipe={recipe} recipePage={false} />
        <Cautions recipe={recipe} recipePage={false} />

        <Divider />

        <SimpleGrid columns="2" columnGap="10px" maxWidth="310px">
          <Text>Meal type</Text>
          <Text fontWeight="bold" whiteSpace="pre-line">
            {recipe.mealType.length === 1
              ? recipe.mealType[0]
              : `${recipe.mealType[0]}\n${recipe.mealType[1]}`}
          </Text>
          <Text>Dish type</Text>
          <Text fontWeight="bold">{recipe.dishType}</Text>
          <Text>Cooking time</Text>
          <Text fontWeight="bold">{recipe.totalTime + " minutes"}</Text>
        </SimpleGrid>
      </Flex>
    </Container>
  );
};
