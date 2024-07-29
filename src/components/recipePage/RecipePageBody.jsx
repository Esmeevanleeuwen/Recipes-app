import { Box, Divider, Flex, Grid, GridItem } from "@chakra-ui/react";
import { Info } from "./Info";
import { Ingredients } from "./Ingredients";
import { HealthLabels } from "../HealthLabels";
import { DietLabels } from "../DietLabels";
import { Cautions } from "../Cautions";
import { Nutrients } from "./Nutrients";
import { DetermineTemplateAreas } from "./DetermineTemplateAreas";

export const RecipePageBody = ({ recipe }) => {
  const templateAreas = DetermineTemplateAreas(recipe);
  const dlCau = () =>
    recipe.dietLabels.length != 0 && recipe.cautions.length != 0;
  const dl = () =>
    recipe.dietLabels.length != 0 && recipe.cautions.length === 0;
  const cau = () =>
    recipe.cautions.length != 0 && recipe.dietLabels.length === 0;

  return (
    <Grid
      templateAreas={{
        base: templateAreas.base,
        sm: templateAreas.sm,
        md: templateAreas.md,
      }}
      bgColor="palette.yellowBackground"
      rowGap="1px"
    >
      <GridItem
        area="info"
        bgColor="palette.yellowDark"
        paddingBottom="5px"
        paddingRight={{ sm: "10px" }}
      >
        <Info recipe={recipe} />
      </GridItem>
      <GridItem
        area="ingr"
        bgColor="palette.yellowDark"
        paddingTop={{ base: "5px", md: 0 }}
        paddingBottom="5px"
        paddingX={{ md: "10px" }}
      >
        <Ingredients recipe={recipe} />
      </GridItem>
      <GridItem
        area="hl"
        bgColor="palette.yellowDark"
        paddingY="5px"
        paddingRight={{ md: "10px" }}
      >
        <HealthLabels recipe={recipe} recipePage={true} />
      </GridItem>
      {dlCau() && (
        <GridItem
          area="dlCau"
          bgColor="palette.yellowDark"
          paddingY="5px"
          paddingLeft={{ md: "10px" }}
        >
          <Flex
            flexDirection={{ base: "column", sm: "row", md: "column" }}
            rowGap="5px"
            columnGap="20px"
            width="100%"
          >
            <Box flexGrow="1">
              <DietLabels recipe={recipe} recipePage={true} />
            </Box>
            <Divider display={{ sm: "none" }} />
            <Box flexGrow="1">
              <Cautions recipe={recipe} recipePage={true} />
            </Box>
          </Flex>
        </GridItem>
      )}
      {dl() && (
        <GridItem
          area="dl"
          bgColor="palette.yellowDark"
          paddingY="5px"
          paddingLeft={{ md: "10px" }}
          paddingRight={{ sm: "50%", md: 0 }}
        >
          <DietLabels recipe={recipe} recipePage={true} />
        </GridItem>
      )}
      {cau() && (
        <GridItem
          area="cau"
          bgColor="palette.yellowDark"
          paddingY="5px"
          paddingLeft={{ md: "10px" }}
          paddingRight={{ sm: "50%", md: 0 }}
        >
          <Cautions recipe={recipe} recipePage={true} />
        </GridItem>
      )}

      <GridItem
        area="nutr"
        bgColor="palette.yellowDark"
        paddingTop={{ base: "5px", sm: 0 }}
        paddingBottom={{ sm: "5px" }}
        paddingLeft={{ sm: "10px" }}
      >
        <Nutrients totalNutrients={recipe.totalNutrients} />
      </GridItem>
    </Grid>
  );
};
