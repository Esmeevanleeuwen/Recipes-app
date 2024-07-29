import { AspectRatio, CloseButton, Container, Image } from "@chakra-ui/react";

export const ImageContainer = ({ recipe, clickFn }) => {
  return (
    <Container position="relative" padding={0} maxW="100%">
      <AspectRatio ratio={{ base: 3 / 2, sm: 2 / 1, md: 3 / 1 }}>
        <Image
          src={recipe.image}
          alt={"Picture of " + recipe.label}
          borderTopRadius="10px"
        />
      </AspectRatio>
      <CloseButton
        onClick={() => clickFn()}
        position="absolute"
        right="0px"
        top="0px"
        background="palette.yellowBackground"
        borderRadius="0px"
        borderTopRightRadius="10px"
        _hover={{ bgColor: "palette.yellowLight" }}
        _active={{ bgColor: "palette.yellowLight" }}
        _focusVisible={{ shadow: "none" }}
      />
    </Container>
  );
};
