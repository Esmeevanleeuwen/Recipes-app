import { GridItem, SimpleGrid, Text } from "@chakra-ui/react";

export const Nutrients = ({ totalNutrients }) => {
  const NutrientGridItems = ({ nutrient }) => {
    return (
      <>
        <GridItem>{nutrient.label + ":"}</GridItem>
        <GridItem>{Math.round(nutrient.quantity)}</GridItem>
        <GridItem>{nutrient.unit}</GridItem>
      </>
    );
  };

  return (
    <>
      <Text fontWeight="bold">Total Nutrients:</Text>
      <SimpleGrid
        templateColumns="12ch 7ch 5ch"
        marginStart={{ base: "1em", sm: 0 }}
      >
        <NutrientGridItems nutrient={totalNutrients.ENERC_KCAL} />
        <NutrientGridItems nutrient={totalNutrients.PROCNT} />
        <NutrientGridItems nutrient={totalNutrients.FAT} />
        <NutrientGridItems nutrient={totalNutrients.CHOCDF} />
        <NutrientGridItems nutrient={totalNutrients.CHOLE} />
        <NutrientGridItems nutrient={totalNutrients.NA} />
      </SimpleGrid>
    </>
  );
};
