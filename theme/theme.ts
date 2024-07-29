import { extendTheme, defineStyleConfig, defineStyle } from "@chakra-ui/react";
import { InputTheme } from "./InputTheme";
import { TagTheme } from "./TagTheme";
import { CheckboxTheme } from "./CheckboxTheme";

const solidDivider = defineStyle({
  borderColor: "palette.yellowLight",
  opacity: 0.5,
  borderTopWidth: "1.5px",
  borderBottomWidth: "1.5px",
});

export const theme = extendTheme({
  colors: {
    palette: {
      yellowLight: "#FFF9E0",
      yellowDark: "#F1C550",
      greenLight: "#A1C45A",
      greenDark: "#4b5f22",
      yellowBackground: "rgba(255, 249, 224, 0.5)",
    },
  },
  styles: {
    global: {
      body: {
        color: "palette.greenDark",
        width: "100%",
      },
    },
  },
  components: {
    Input: InputTheme,
    Tag: TagTheme,
    Checkbox: CheckboxTheme,
    Divider: defineStyleConfig({
      variants: { solid: solidDivider },
    }),
  },
});
