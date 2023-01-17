import "../css/MainMenu.css";

import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { useCallback, useContext, useState } from "react";

import { CardsContext, CardsDispatchContext } from "../context/cardsContext";

const MainMenu = () => {
  const data                                             = useContext(CardsContext);
  const dispatch                                         = useContext(CardsDispatchContext);
  const [ difficulty, setDifficulty ]                    = useState(data.currentCards.length);
  const { currentCards: toShow, score, shownComponents } = data;

  const handleDifficultyChange = useCallback(
    (event: React.ChangeEvent<{ value: string }>) => {
      setDifficulty(event.currentTarget.value);
      dispatch({
        payload: Number(event.currentTarget.value),
        type   : "set difficulty",
      });
    },
    []
  );
  const handleStartClick       = useCallback(() => {
    dispatch({ type: "started game" });
  }, []);

  return (
    <div
      className="main-menu"
      data-testid="main-menu"
      hidden={!shownComponents.has("main menu")}
    >
      <h1>Main Menu</h1>
      <div className="difficulty">
        <FormControl variant="standard">
          <TextField
            id="difficulty-input"
            data-testid="difficulty"
            label="Difficulty"
            type="number"
            value={difficulty}
            onChange={handleDifficultyChange}
          />
        </FormControl>
        <Button
          data-testid="start-game"
          onClick={handleStartClick}
        >
          Start Game
        </Button>
      </div>
    </div>
  );
};

export default MainMenu;
