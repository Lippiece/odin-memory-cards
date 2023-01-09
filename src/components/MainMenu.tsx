import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { CardsContext, CardsDispatchContext } from "../context/cardsContext";
import { useCallback, useContext, useState } from "react";

const MainMenu = () => {
  const data = useContext(CardsContext);
  const dispatch = useContext(CardsDispatchContext);
  const [difficulty, setDifficulty] = useState(data.toShow.length);

  const handleDifficultyChange = useCallback(
    (event: React.ChangeEvent<{ value: string }>) => {
      setDifficulty(event.currentTarget.value);
      dispatch({
        type: "set difficulty",
        payload: Number(event.currentTarget.value),
      });
    },
    [],
  );

  return (
    <div
      className="main-menu"
      data-testid="main-menu"
    >
      <h1>Main Menu</h1>
      <Button>Start Game</Button>
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
      </div>
    </div>
  );
};

export default MainMenu;
