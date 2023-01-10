import "./css/App.css";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useReducer } from "react";
import appReducer from "./logic/appReducer";
import GameScreen from "./components/GameScreen";
import MainMenu from "./components/MainMenu";
import Scoreboard from "./components/Scoreboard";
import {
  CardsContext,
  CardsDispatchContext,
  defaultContext,
} from "./context/cardsContext";

const App = () => {
  const [data, dispatch] = useReducer(appReducer, defaultContext);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CardsContext.Provider value={data}>
        <CardsDispatchContext.Provider value={dispatch}>
          <div
            className="App"
            data-testid="app"
          >
            <MainMenu />
            <Scoreboard />
            <GameScreen />
          </div>
        </CardsDispatchContext.Provider>
      </CardsContext.Provider>
    </ThemeProvider>
  );
};
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

export default App;
