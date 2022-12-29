import "./css/App.css";
import GameScreen from "./components/GameScreen";
import MainMenu from "./components/MainMenu";
import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const theme = createTheme( {
  palette: {
    primary: {
      main: "#ff7231",
    },
    secondary: {
      main: "#35ff90",
    },
    mode: "dark",
  },
  typography: {
    fontFamily: [
      "Rubik",
      "sans-serif",
    ].join( "," ),
  },
} );

const App = () => {
  const [ cards, setCards ] = useState( [] );
  return (
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <div className="App">
        <MainMenu />
        <GameScreen
          cards={ cards }
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
