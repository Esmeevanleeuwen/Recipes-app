import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    color: "palette.greenDark",
    _placeholder: {
      color: "palette.greenLight",
    },
  },
});

const variantOutline = definePartsStyle({
  field: {
    borderColor: "palette.greenLight",
    _hover: { borderColor: "palette.greenLight" },
    _focusVisible: {
      borderColor: "palette.greenDark",
      boxShadow: "0 0 0 1px #4b5f22",
      _placeholder: {
        color: "palette.greenDark",
      },
    },
  },
});

const variants = {
  outline: variantOutline,
};

export const InputTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: { variant: "outline" },
});
