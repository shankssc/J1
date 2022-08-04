import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const COLORS = {
  primary: "#001F2D",
  secondary: "#4D626C",

  white: "#FFF",
  gray: "#74858C",
  tutu: "#ffeff8",
  lavendarBlush: "#ffeff2",
  gts: "#fee4e6"

};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

export const FONTS = {
  bold: "InterBold",
  semiBold: "InterSemiBold",
  medium: "InterMedium",
  regular: "InterRegular",
  light: "InterLight",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};

export const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    }
  }
});

/*
export const CustomTheme1 = createTheme({
  palette: {
    background: {
      color: "#a6baa6",
      image: "C:/IP/J1/J1/assets/images/FoodAndDrinkDesign.svg"
    }
  }
});
*/

export const CustomTheme1 = {
    background: {
      style: {
        color: "red",
        //image: "C:/IP/J1/J1/assets/images/FoodAndDrinkDesign.svg"
      }
    }
};

