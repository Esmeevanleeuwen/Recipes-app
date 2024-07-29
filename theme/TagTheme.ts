import { tagAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    bgColor: "palette.yellowLight",
    textTransform: "uppercase",
    boxShadow: "none",
    margin: "2px",
    justifyContent: "center",
    textAlign: "center",
  },
});

const health = definePartsStyle({
  container: {
    color: "#49FF00",
    outline: "2px solid #49FF00",
  },
});

const diet = definePartsStyle({
  container: {
    color: "#FF9300",
    outline: "2px solid #FF9300",
  },
});

const caution = definePartsStyle({
  container: {
    color: "#FF0000",
    outline: "2px solid #FF0000",
  },
});

export const TagTheme = defineMultiStyleConfig({
  baseStyle,
  variants: {
    health: health,
    diet: diet,
    caution: caution,
  },
  defaultProps: {
    size: "sm",
  },
});