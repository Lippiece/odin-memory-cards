import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";

import { CardsContext, Context } from "../context/cardsContext";

const Scoreboard = () => {
  const [ _name, setName ]               = useState<string>("John"); // prettier-ignore
  const { score, shownComponents, time } = useContext(CardsContext);
  return (
    <div
      className="scoreboard"
      data-testid="scoreboard"
      hidden={!shownComponents.has("scoreboard")}
    >
      <Form setName={setName} />
      <Score
        name={_name}
        score={score}
      />
      <Timings time={time} />
    </div>
  );
};
interface FormProps {
  setName: (name_: string) => void;
}
const Form = ({ setName }: FormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { value } = event.currentTarget.querySelector("input");
    setName(value);
  };
  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      data-testid="form"
    >
      <TextField
        type="text"
        id="name"
        label="Name"
        data-testid="nameInput"
        role="textbox"
      />
      <Button
        id="submit"
        type="submit"
        data-testid="submit"
        role="button"
      >
        Submit
      </Button>
    </form>
  );
};
interface ScoreProps {
  name: string;
  score: number;
}
const Score   = ({ name, score }: ScoreProps) => {
  return (
    <div>
      <h1>Scoreboard</h1>
      <p data-testid="score">{`Score: ${score}`}</p>
      <p>{name}</p>
    </div>
  );
};
const Timings = ({ time }: { time: Context["time"] }) => {
  return (
    <div
      className="timings"
      data-testid="timings"
    >
      <h2>Timings:</h2>
      <h3 data-testid="timeGeneral">{`Time taken to complete the game: ${time.difference}`}</h3>
      <h3>Times per each card:</h3>
      <ul>
        {[ ...time.cards ].map((card, index) => (
          <li key={index}>{`Card ${index + 1}: ${card.timestamp}`}</li>
        ))}
      </ul>
    </div>
  );
};
export default Scoreboard;
