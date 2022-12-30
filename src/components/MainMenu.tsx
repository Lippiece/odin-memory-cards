import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";

const MainMenu = () => {
  const [difficulty, setDifficulty] = useState("easy");

  const handleDifficultyChange = (
    event: React.ChangeEvent<{ value: string }>,
  ) => {
    setDifficulty(event.target.value);
  };

  return (
    <div
      className="main-menu"
      data-testid="main-menu"
    >
      <h1>Main Menu</h1>
      <Button>Start Game</Button>
      <div className="difficulty">
        <FormControl variant="standard">
          <InputLabel id="difficulty-select-label">Difficulty</InputLabel>
          <Select
            id="difficulty-select"
            label="Difficulty"
            labelId="difficulty-select-label"
            onChange={handleDifficultyChange}
            value={difficulty}
          >
            <MenuItem value="easy">Easy</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="hard">Hard</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default MainMenu;
