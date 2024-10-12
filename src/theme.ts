import { extendTheme, Switch } from "@chakra-ui/react";
import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {},
  thumb: {},
  track: {
    bg: "red",
    _checked: {
      bg: "green",
    },
  },
});

const switchTheme = defineMultiStyleConfig({ baseStyle });

const theme = extendTheme({
  colors: {
    lightPurple: "#F1F2FF",
    darkPurple: "#8094F9",
    darkBlue: "#335099",
    gray: "#5B5B5B",
    red: "#F24E1E",
    orange: "#FF8800",
    green: "#0FA958",
  },
  fonts: {
    body: "'Roboto', sans-serif",
    heading: "'Roboto', sans-serif",
  },
  fontSizes: {
    small: "16px",
    medium: "24px",
    large: "36px",
    extraLarge: "48px",
  },
  components: {
    Switch: switchTheme,
  },
  styles: {
    global: {
      body: {
        bg: "lightPurple",
      },
    },
  },
});

export default theme;
