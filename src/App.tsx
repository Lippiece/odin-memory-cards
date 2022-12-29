import "./css/App.css";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

import GameScreen from "./components/GameScreen";
import MainMenu from "./components/MainMenu";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff7231",
    },
    secondary: {
      main: "#35ff90",
    },
  },
  typography: {
    fontFamily: ["Rubik", "sans-serif"].join(","),
  },
});
const source = "https://picsum.photos/200/300";

const cards = [
  {
    id: 1,
    image: source,
  },
  {
    id: 2,
    image: source,
  },
  {
    id: 3,
    image: source,
  },
  {
    id: 4,
    image: source,
  },
  {
    id: 5,
    image: source,
  },
];
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <MainMenu />
        <GameScreen inputCards={cards} />
      </div>
    </ThemeProvider>
  );
};

export default App;
