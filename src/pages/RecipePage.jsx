import { Button, Container, Divider, Flex, Text } from "@chakra-ui/react";
import { RecipePageBody } from "../components/RecipePage/RecipePageBody";
import { ImageContainer } from "../components/RecipePage/Imagecontainer";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <Container
      width="100%"
      maxW="992px"
      p={{ base: "5vw", md: "3vw" }}
      m={{ base: 0, lg: "auto" }}
    >
      <ImageContainer recipe={recipe} clickFn={clickFn} />
      <Flex
        background="palette.yellowDark"
        borderBottomRadius="10px"
        padding={["5%", "15px"]}
        width="100%"
        maxW="100%"
        flexDirection="column"
        rowGap="5px"
      >
        <Text
          fontSize={{ base: "1.4em", sm: "1.8em", md: "2em" }}
          fontWeight="bold"
          textAlign="center"
          py={3}
        >
          {recipe.label}
        </Text>
        <Divider />
        <RecipePageBody recipe={recipe} clickFn={clickFn} />
        <Divider />
        <Button
          onClick={() => clickFn()}
          bgColor="palette.yellowBackground"
          _hover={{ bgColor: "palette.yellowLight" }}
          _active={{ bgColor: "palette.yellowLight" }}
          _focusVisible={{ shadow: "none" }}
          width={{ base: "100%", sm: "200px" }}
          mx="auto"
          marginTop="5px"
        >
          Back
        </Button>
      </Flex>
    </Container>
  );
};
