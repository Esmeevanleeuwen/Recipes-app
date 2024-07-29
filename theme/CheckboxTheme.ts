import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  label: {
    color: "palette.greenLight",
    _checked: {
      color: "palette.greenDark",
    },
  },
  control: {
    borderColor: "palette.greenLight",
    _checked: {
      background: "palette.greenDark",
      borderColor: "palette.greenDark",
      _hover: {
        background: "palette.greenDark",
        borderColor: "palette.greenDark",
      },
    },
  },
  container: {
    marginInlineStart: "0px",
    marginStart: "0px",
  },
});

export const CheckboxTheme = defineMultiStyleConfig({ baseStyle });
