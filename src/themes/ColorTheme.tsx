import { PaletteOptions, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette['primary'];
    vibrant: Palette['primary'];
    basic: Palette['primary'];
    tertiary: PaletteOptions['primary'];
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
    vibrant?: PaletteOptions['primary'];
    basic?: PaletteOptions['primary'];
    tertiary?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#F6A314', // orange
      dark: '#FF9500', // darkorange
      light: '#FFC157', // lightorange
    },
    secondary: {
      main: '#BC5090', // purple
      dark: '#8F2C66', // darkpurple
      light: '#D277AD', // lightpurple
    },
    neutral: {
      main: '#58508D', // violet
      dark: '#3B3569', // darkviolet
      light: '#766EAD', // lightviolet
    },
    vibrant: {
      main: '#FF6380', // coral
      dark: '#FF496C', // darkcoral
      light: '#FF7C95', // lightcoral
    },
    basic: {
      main: '#003F5C', // navy
      dark: '#002233', // darknavy
      light: '#005075', // lightnavy
    },
    tertiary: {
      main: '#EDEBF2',
      dark: '#002233',
      light: '#F5F7FE',
    }
  },
});

export default theme;
