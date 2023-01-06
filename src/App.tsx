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
  const [data, dispatch] = useReducer(cardsReducer, defaultCards);
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

interface State {
  cards: CardType[];
  score: number;
  toShow: number;
}
interface Action {
  type: string;
  payload: CardType | number;
}
const cardsReducer = (state: State, action: Action) => {
  const setClicked = () =>
    map((card: CardType) =>
      card.id === action.payload.id ? { ...card, clicked: true } : card,
    )(state.cards);
  const actions: { [key: string]: () => State } = {
    "clicked first time": () => ({
      ...state,
      cards: shuffleArray(setClicked()),
      score: state.score + 1,
    }),
    "clicked second time": () => ({
      ...state,
      cards: shuffleArray(setClicked()),
      score: 0,
    }),
    "set difficulty": () => ({
      ...state,
      cards: shuffleArray(state.cards),
      score: state.score,
      toShow: action.payload,
    }),
  };
  return (
    actions[action.type]() ||
    console.error(`Unhandled action type: ${action.type} (at cardsReducer)`)
  );
};

export default App;
