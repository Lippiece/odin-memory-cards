import "./css/App.css";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";

import GameScreen from "./components/GameScreen";
import MainMenu from "./components/MainMenu";
import Scoreboard from "./components/Scoreboard";

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
const source = "https://picsum.photos/200s/300";

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
  const [score, setScore] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        className="App"
        data-testid="app"
      >
        <MainMenu />
        <GameScreen
          inputCards={cards}
          score={score}
          setScore={setScore}
        />
        <Scoreboard score={score} />
      </div>
    </ThemeProvider>
  );
};

export default App;
