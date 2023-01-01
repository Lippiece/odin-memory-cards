import "./css/App.css";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useReducer } from "react";

import CardType from "./@types/Card";
import GameScreen from "./components/GameScreen";
import MainMenu from "./components/MainMenu";
import Scoreboard from "./components/Scoreboard";
import {
  CardsContext,
  cardsDispatchContext,
  defaultCards,
  useCards,
} from "./context/cardsContext";
import {
  ScoreContext,
  ScoreDispatchContext,
  useScore,
} from "./context/scoreContext";
import shuffleArray from "./logic/shuffleArray";

const theme        = createTheme({
  palette: {
    mode   : "dark",
    primary: {
      main: "#ff7231",
    },
    secondary: {
      main: "#35ff90",
    },
  },
  typography: {
    fontFamily: [ "Rubik", "sans-serif" ].join(","),
  },
});
const cardsReducer = (
  state: CardType[],
  action: { type: string, payload: CardType[] }
) => {
  switch (action.type) {
  case "shuffle cards": {
    return shuffleArray(state);
  }
  default: {
    return console.error(
      `Unhandled action type: ${action.type} (at cardsReducer)`
    );
  }
  }
};

// TODO: scoreReducer
type StatusCodes = "error" | "OK" | "won" | "lost";
const App = () => {
  const [ cards, dispatchCards ] = useReducer(cardsr);
  const [ score, dispatchScore ] = useScore(0);
  return (
    <ThemeProvider
      theme={theme}>
      <CssBaseline />
      <CardsContext.Provider
        value={cards}>
        <CardsDispatchContext
          value={dispatchCards}>
          <ScoreContext.Provider
            value={score}>
            <ScoreDispatchContext
              value={dispatchScore}>
              <div
                className="App"
                data-testid="app"
              >
                <MainMenu />
                <GameScreen
                  inputCards={cards}
                  incrementScore={incrementScore}
                />
                <Scoreboard
                  score={score} />
              </div>
            </ScoreDispatchContext>
          </ScoreContext.Provider>
        </CardsDispatchContext>
      </CardsContext.Provider>
    </ThemeProvider>
  );
};

export default App;
