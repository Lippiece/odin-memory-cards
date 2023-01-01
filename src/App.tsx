import "./css/App.css";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useReducer } from "react";
import { map } from "sanctuary";

import CardType from "./@types/Card";
import GameScreen from "./components/GameScreen";
import MainMenu from "./components/MainMenu";
import Scoreboard from "./components/Scoreboard";
import {
  CardsContext,
  CardsDispatchContext,
  defaultCards,
} from "./context/cardsContext";
import shuffleArray from "./logic/shuffleArray";

const App = () => {
  const [ data, dispatch ] = useReducer(cardsReducer, defaultCards);
  return (
    <ThemeProvider
      theme={theme}>
      <CssBaseline />
      <CardsContext.Provider
        value={data}>
        <CardsDispatchContext.Provider
          value={dispatch}>
          <div
            className="App"
            data-testid="app"
          >
            <MainMenu />
            <GameScreen />
            <Scoreboard />
          </div>
        </CardsDispatchContext.Provider>
      </CardsContext.Provider>
    </ThemeProvider>
  );
};
const theme = createTheme({
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

interface stateType {
  cards: CardType[];
  score: number;
}
interface actionType {
  type: string;
  payload: CardType[];
}
const cardsReducer = (state: stateType, action: actionType) => {
  const setClicked = () => {
    return map((card: CardType) =>
      (card.id === action.payload.id ? { ...card, clicked: true } : card)
    )(state.cards);
  };
  switch (action.type) {
  case "clicked first time": {
    return {
      ...state,
      cards: shuffleArray(setClicked()),
      score: state.score + 1,
    };
  }
  case "clicked second time": {
    return state;
  }
  default: {
    return console.error(
      `Unhandled action type: ${action.type} (at cardsReducer)`
    );
  }
  }
};

export default App;
