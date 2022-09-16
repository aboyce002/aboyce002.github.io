import { extendTheme } from "@chakra-ui/react"

const Theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
  fonts: {
    heading: `'Simplifica', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  components: {
    Link: {
      /*variants: {
        primary: ({ colorScheme = "purple" }) => ({
          color: `${colorScheme}.500`,
          _hover: {
            color: `${colorScheme}.400`,
          },
        }),
      },
      defaultProps: {
        variant: "primary",
      },*/
    },
  },
});

export default Theme;
