import "./css/App.css";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

import GameScreen from "./components/GameScreen";
import MainMenu from "./components/MainMenu";

const theme = createTheme( {
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
    fontFamily: [
      "Rubik",
      "sans-serif",
    ].join( "," ),
  },
} );

const App = () => {

  const [
    cards,
    setCards,
  ] = useState( [] );
  const [
    clicked,
    setClicked,
  ] = useState( [] );
  return (
    <ThemeProvider
      theme={ theme }>
      <CssBaseline />
      <div
        className="App">
        <MainMenu />
        <GameScreen
          inputCards={ cards }
          setCards={ setCards }
          clicked={ clicked }
          setClicked={ setClicked }
        />
      </div>
    </ThemeProvider>
  );

};

export default App;
