import { createTheme, ThemeOptions } from "@mui/material/styles";

export const darkThemeOptions: ThemeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1a8144",
    },
    secondary: {
      main: "#efde26",
    },
  },
});

export const lightThemeOptions: ThemeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1a8144",
    },
    secondary: {
      main: "#efde26",
    },
  },
});
