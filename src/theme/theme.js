import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    greyTheme: {
      100: "#FFFFFF", // Pure white
      200: "#F7FAFC", // White, bg
      300: "#E6E6E6", // Lighter grey
      400: "#7F8DAA", // Grey, text
      500: "#CCCCCC", // Darker grey
    },
    blueTheme: {
      100: "#286BA8", // Light blue
      200: "#0B1C55", // Darker blue, headings
      300: "#1A202C", // Darkest blue, icons
      400: "#CCD9E1", // White blue, bg2
      500: "#3F3D56", // Dark ourple
    },
    purpleButton: {
      500: "#8764FA", // Dark purple
      600: "#6C50C8", // Dark blue
    },
    redButton: {
      500: "#D75634", // Dark purple
      600: "#AA4327", // Dark blue
    },
    whiteButton: {
      500: "#CCCCCC", // Dark purple
      600: "#AAAAAA", // Dark blue
    },
    themeColors: {
      100: "#FFFFFF", // White
      200: "#E6E6E6", // Lighter grey (set pieces/props)
      300: "#CCCCCC", // Light grey (curtain, lines)
      400: "#3F3D56", // Dark purple (bg)
      500: "#2F2E41", // Darker purple (buildings)
      600: "#8764FA", // Purple (shirt, secondary props)
      700: "#6C50C8", // Darker purple (shading)
      800: "#D75634", // Red (hair)
    }
  },
  fonts: {
    heading: `'Montserrat', 'Kreon', 'Overpass'`,
    body: `'Montserrat', 'Raleway', 'Overpass'`,
  },
  components: {
    Button: {
      baseStyle: {
        color: 'themeColors.500',
      },
    },
    Link: {
      baseStyle: {
        fontSize: '30px',
        fontWeight: 'bold',
        fontFamily: 'var(--chakra-fonts-heading)',
        transitionDuration: '200ms',
        color: 'blueTheme.200',
        _hover: {
          color: 'blueTheme.100',
          textDecoration: 'none'
        },
      },
      variants: {
        lightStyle: {
          color: 'blueTheme.200',
          _hover: {
            color: 'blueTheme.100',
            textDecoration: 'none'
          },
        },
        darkStyle: {
          color: 'themeColors.200',
          _hover: {
            color: 'themeColors.100',
            textDecoration: 'none'
          },
        },
      },
    },
    Flex: {
      variants: {
        lightStyle: {
          bg: "themeColors.100"
        },
        darkStyle: {
          bg: "themeColors.400"
        }
      }
    },
    Heading: {
      baseStyle: {
        fontFamily: 'var(--chakra-fonts-heading)',
        color: 'blueTheme.200',
        lineHeight: '1.2',
        decoration: 'none',
        fontWeight: 'bold',
        fontSize: '50px'
      },
      variants: {
        mainHeading: {
          fontFamily: 'var(--chakra-fonts-heading)',
          fontWeight: 'bold',
          color: 'greyTheme.200',
          lineHeight: '1.2',
        },
        subHeading: {
          fontFamily: 'var(--chakra-fonts-heading)',
          color: 'greyTheme.200',
          lineHeight: '1.2',
        },
        bodyHeading: {
          fontFamily: 'var(--chakra-fonts-heading)',
          fontWeight: 'bold',
          color: 'greyTheme.500',
          lineHeight: '1.2',
        }
      }
    },
    Text: {
      baseStyle: {
        lineHeight: '1.6',
        fontWeight: 'bold',
        color: 'themeColors.500',
      },
    },
    Tooltip: {
      baseStyle: {
        fontFamily: 'var(--chakra-fonts-heading)',
        fontWeight: 'bold',
        bg: 'blueTheme.500',
        color: 'greyTheme.300',
      },
    },
  },
  styles: {
    global: {
      body: {
        fontWeight: 'normal',
        bg: 'greyTheme.100',
        color: 'greyTheme.500',
      },
      "*": {
        borderColor: 'themeColors.300'
      },
    },
  },
});

export default theme;
